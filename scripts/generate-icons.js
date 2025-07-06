const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

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

    // Gerar favicon.ico com múltiplos tamanhos (16, 32, 48, 64)
    console.log('🔧 Gerando favicon.ico...');
    
    const faviconSizes = [16, 32, 48, 64];
    const pngBuffers = [];
    
    // Gerar buffers PNG para cada tamanho
    for (const size of faviconSizes) {
      const buffer = await sharp(sourceIcon)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toBuffer();
      
      pngBuffers.push(buffer);
    }
    
    // Converter para ICO
    const icoBuffer = await pngToIco(pngBuffers);
    
    // Salvar favicon.ico no diretório de ícones e na raiz do public
    const faviconIcoPath = path.join(outputDir, 'favicon.ico');
    const publicFaviconPath = path.join(__dirname, '../public/favicon.ico');
    
    fs.writeFileSync(faviconIcoPath, icoBuffer);
    fs.writeFileSync(publicFaviconPath, icoBuffer);

    console.log('✅ Gerado: favicon.ico');

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
