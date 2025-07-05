const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceIcon = path.join(__dirname, '../app/icon.png');
const outputDir = path.join(__dirname, '../public/icons');

// Criar diretório se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Tamanhos de ícones para PWA
const sizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];

async function generateIcons() {
  console.log('Gerando ícones PWA a partir de app/icon.png...');
  
  try {
    // Verificar se o arquivo fonte existe
    if (!fs.existsSync(sourceIcon)) {
      console.error('Erro: app/icon.png não encontrado!');
      process.exit(1);
    }

    for (const size of sizes) {
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      
      await sharp(sourceIcon)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 107, g: 28, b: 143, alpha: 1 } // #6B1C8F
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✓ Gerado: icon-${size}x${size}.png`);
    }

    // Gerar favicon.ico
    const faviconPath = path.join(__dirname, '../public/favicon.ico');
    await sharp(sourceIcon)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 107, g: 28, b: 143, alpha: 1 }
      })
      .png()
      .toFile(faviconPath);
    
    console.log('✓ Gerado: favicon.ico');

    // Gerar apple-touch-icon
    const appleTouchPath = path.join(outputDir, 'apple-touch-icon.png');
    await sharp(sourceIcon)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 107, g: 28, b: 143, alpha: 1 }
      })
      .png()
      .toFile(appleTouchPath);
    
    console.log('✓ Gerado: apple-touch-icon.png');

    console.log('\n🎉 Ícones PWA gerados com sucesso!');
    console.log(`📁 Verifique o diretório: ${outputDir}`);
    
  } catch (error) {
    console.error('Erro ao gerar ícones:', error);
    process.exit(1);
  }
}

generateIcons();
