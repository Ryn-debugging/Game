#!/usr/bin/env bash
# =========================================================================
# ADMIN DADAKAN: Grup RT — build_apk.sh
# Skrip Build Otomatis APK Android (Signed V1+V2+V3, Portrait 9:16)
# =========================================================================
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SDK_DIR="/tmp/android-sdk"
BUILD_TOOLS="${SDK_DIR}/android-14"
PLATFORM_JAR="${SDK_DIR}/android-34/android.jar"

AAPT="${BUILD_TOOLS}/aapt"
D8="${BUILD_TOOLS}/d8"
ZIPALIGN="${BUILD_TOOLS}/zipalign"
APKSIGNER="${BUILD_TOOLS}/apksigner"

# Unduh Android Build-Tools 34 & Platform 34 jika belum ada di /tmp/android-sdk
if [[ ! -x "${AAPT}" || ! -f "${PLATFORM_JAR}" ]]; then
    echo "[1/7] Mengunduh Android Build-Tools 34 & Platform 34..."
    mkdir -p "${SDK_DIR}"
    curl -sL https://dl.google.com/android/repository/build-tools_r34-linux.zip -o "${SDK_DIR}/build-tools.zip"
    curl -sL https://dl.google.com/android/repository/platform-34-ext7_r02.zip -o "${SDK_DIR}/platform.zip"
    unzip -q -o "${SDK_DIR}/build-tools.zip" -d "${SDK_DIR}/"
    unzip -q -o "${SDK_DIR}/platform.zip" -d "${SDK_DIR}/"
fi

WORK_DIR="/tmp/admindadakan_apk_build"
rm -rf "${WORK_DIR}"
mkdir -p "${WORK_DIR}/gen" \
         "${WORK_DIR}/obj" \
         "${WORK_DIR}/dex" \
         "${WORK_DIR}/assets/css" \
         "${WORK_DIR}/assets/js" \
         "${WORK_DIR}/assets/assets/images" \
         "${ROOT_DIR}/android/res/drawable"

echo "[2/7] Membuat ikon peluncur Android (ic_launcher.png) dari karakter Dika..."
python3 -c "
from PIL import Image, ImageDraw
img = Image.open('${ROOT_DIR}/assets/images/char_dika.jpg').convert('RGBA')
img = img.resize((192, 192), Image.LANCZOS)
# Beri bingkai hijau khas WargaChat
border = Image.new('RGBA', (192, 192), (7, 94, 84, 255))
mask = Image.new('L', (180, 180), 255)
inner = img.resize((180, 180), Image.LANCZOS)
border.paste(inner, (6, 6), mask)
border.save('${ROOT_DIR}/android/res/drawable/ic_launcher.png', 'PNG')
print('      ic_launcher.png (192x192) berhasil dibuat.')
"

echo "[3/7] Menyalin aset permainan (HTML, CSS, JS, dan 9 Ilustrasi 2D) ke bundle APK..."
cp "${ROOT_DIR}/index.html" "${WORK_DIR}/assets/index.html"
cp "${ROOT_DIR}/css/style.css" "${WORK_DIR}/assets/css/style.css"
cp "${ROOT_DIR}/js/audio.js" "${WORK_DIR}/assets/js/audio.js"
cp "${ROOT_DIR}/js/story_data.js" "${WORK_DIR}/assets/js/story_data.js"
cp "${ROOT_DIR}/js/engine.js" "${WORK_DIR}/assets/js/engine.js"

# Optimasi ukuran gambar JPEG agar APK ringan & cepat diinstal (< 3 MB)
python3 -c "
import glob, os
from PIL import Image

src_dir = '${ROOT_DIR}/assets/images'
dst_dir = '${WORK_DIR}/assets/assets/images'
for path in glob.glob(os.path.join(src_dir, '*.jpg')):
    fname = os.path.basename(path)
    im = Image.open(path).convert('RGB')
    im.save(os.path.join(dst_dir, fname), 'JPEG', quality=82, optimize=True)
print('      9 aset gambar berhasil dioptimasi untuk APK.')
"

echo "[4/7] Mempaketkan resource Android & AndroidManifest.xml dengan AAPT..."
"${AAPT}" package -f -m \
    -J "${WORK_DIR}/gen" \
    -M "${ROOT_DIR}/android/AndroidManifest.xml" \
    -S "${ROOT_DIR}/android/res" \
    -A "${WORK_DIR}/assets" \
    -I "${PLATFORM_JAR}" \
    -F "${WORK_DIR}/unaligned.apk"

echo "[5/7] Mengompilasi kode Java (MainActivity.java & R.java) -> Dalvik DEX (classes.dex)..."
javac --release 8 \
    -cp "${PLATFORM_JAR}" \
    -d "${WORK_DIR}/obj" \
    "${WORK_DIR}/gen/id/admindadakan/gruprt/R.java" \
    "${ROOT_DIR}/android/src/id/admindadakan/gruprt/MainActivity.java"

CLASS_FILES=$(find "${WORK_DIR}/obj" -name "*.class")
"${D8}" --lib "${PLATFORM_JAR}" \
    --min-api 21 \
    --output "${WORK_DIR}/dex" \
    ${CLASS_FILES}

# Tambahkan classes.dex ke dalam root APK
(cd "${WORK_DIR}/dex" && zip -q -u "${WORK_DIR}/unaligned.apk" classes.dex)

echo "[6/7] Menyelaraskan (zipalign) & menandatangani (apksigner V1+V2+V3) APK..."
"${ZIPALIGN}" -f 4 "${WORK_DIR}/unaligned.apk" "${WORK_DIR}/aligned.apk"

KEYSTORE="${ROOT_DIR}/android/admindadakan.keystore"
if [[ ! -f "${KEYSTORE}" ]]; then
    keytool -genkeypair \
        -v \
        -keystore "${KEYSTORE}" \
        -alias admindadakan \
        -keyalg RSA \
        -keysize 2048 \
        -validity 10000 \
        -storepass admindadakan123 \
        -keypass admindadakan123 \
        -dname "CN=Admin Dadakan RT 05, OU=GameDev, O=RT05, L=Jakarta, ST=DKI, C=ID" >/dev/null 2>&1
fi

OUTPUT_APK="${ROOT_DIR}/AdminDadakan-GrupRT.apk"
"${APKSIGNER}" sign \
    --ks "${KEYSTORE}" \
    --ks-key-alias admindadakan \
    --ks-pass pass:admindadakan123 \
    --key-pass pass:admindadakan123 \
    --v1-signing-enabled true \
    --v2-signing-enabled true \
    --v3-signing-enabled true \
    --out "${OUTPUT_APK}" \
    "${WORK_DIR}/aligned.apk"

echo "[7/7] Memverifikasi tanda tangan digital APK..."
"${APKSIGNER}" verify --verbose "${OUTPUT_APK}" | head -n 6
ls -lh "${OUTPUT_APK}"
echo "=== BUILD APK SELESAI: ${OUTPUT_APK} ==="
