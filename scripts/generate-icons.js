const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 72, 96, 128, 144, 152, 192, 384, 512];
const src = path.join(__dirname, '../app/icon.png');
const outDir = path.join(__dirname, '../public/icons');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function generate() {
  await Promise.all(
    sizes.map((size) => {
      const outPath = path.join(outDir, `icon-${size}x${size}.png`);
      return sharp(src)
        .resize(size, size)
        .toFile(outPath);
    })
  );
}

generate().catch((err) => {
  console.error('Failed to generate icons', err);
  process.exit(1);
});
