const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceIcon = path.join(__dirname, '../app/icon.png');
const outputDir = path.join(__dirname, '../public/icons');

// Criar diretório se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Tamanhos de ícones para PWA e navegadores modernos
const iconSizes = [16, 32, 72, 96, 128, 144, 152, 180, 192, 384, 512];

async function generateIcons() {
  console.log('🐝 Gerando ícones para navegadores modernos...');
  
  try {
    // Verificar se o arquivo fonte existe
    if (!fs.existsSync(sourceIcon)) {
      console.error('❌ Erro: app/icon.png não encontrado!');
      process.exit(1);
    }

    // Gerar ícones em PNG
    for (const size of iconSizes) {
      const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
      
      await sharp(sourceIcon)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // Fundo transparente
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Gerado: icon-${size}x${size}.png`);
    }

    // Gerar favicon específicos
    console.log('🔧 Gerando favicons específicos...');
    
    // favicon-16x16.png
    await sharp(sourceIcon)
      .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(outputDir, 'favicon-16x16.png'));
    
    // favicon-32x32.png
    await sharp(sourceIcon)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(outputDir, 'favicon-32x32.png'));

    // apple-touch-icon.png (180x180 para iOS)
    await sharp(sourceIcon)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    // Gerar favicon.ico (usando o ícone 32x32)
    const favicon32Path = path.join(outputDir, 'icon-32x32.png');
    const faviconIcoPath = path.join(outputDir, 'favicon.ico');
    
    // Copiar o favicon para a raiz do public
    const publicFaviconPath = path.join(__dirname, '../public/favicon.ico');
    
    await sharp(favicon32Path)
      .resize(32, 32)
      .png()
      .toFile(faviconIcoPath);
    
    // Copiar para public/favicon.ico
    fs.copyFileSync(faviconIcoPath, publicFaviconPath);

    console.log('✅ Gerado: favicon.ico');
    console.log('✅ Gerado: apple-touch-icon.png');

    console.log('\n🎉 Todos os ícones foram gerados com sucesso!');
    console.log(`📁 Verifique o diretório: ${outputDir}`);
    
  } catch (error) {
    console.error('❌ Erro ao gerar ícones:', error);
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  generateIcons();
}

module.exports = generateIcons;
