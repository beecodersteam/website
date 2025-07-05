#!/bin/bash

# Script para gerar ícones PWA a partir do ícone real da aplicação
# Requer ImageMagick instalado (sudo apt install imagemagick)

ICON_SOURCE="/home/luiz/projects/bee/website/app/icon.png"
ICONS_DIR="/home/luiz/projects/bee/website/public/icons"
PROJECT_DIR="/home/luiz/projects/bee/website"

# Verificar se ImageMagick está instalado
if ! command -v convert &> /dev/null; then
    echo "ImageMagick não está instalado. Instalando..."
    sudo apt update && sudo apt install -y imagemagick
fi

# Criar diretório se não existir
mkdir -p "$ICONS_DIR"

# Tamanhos de ícones para PWA
SIZES=(16 32 72 96 128 144 152 192 384 512)

echo "Gerando ícones PWA a partir de $ICON_SOURCE..."

# Verificar se o arquivo fonte existe
if [ ! -f "$ICON_SOURCE" ]; then
    echo "Erro: Arquivo fonte $ICON_SOURCE não encontrado!"
    exit 1
fi

for size in "${SIZES[@]}"; do
    echo "Gerando ícone ${size}x${size}..."
    
    # Redimensionar mantendo a proporção e preenchendo com transparência se necessário
    convert "$ICON_SOURCE" \
            -resize ${size}x${size} \
            -background transparent \
            -gravity center \
            -extent ${size}x${size} \
            "$ICONS_DIR/icon-${size}x${size}.png"
done

# Gerar favicon
echo "Gerando favicon..."
convert "$ICONS_DIR/icon-32x32.png" "$ICONS_DIR/favicon.ico"
cp "$ICONS_DIR/favicon.ico" "$PROJECT_DIR/public/favicon.ico"

# Gerar apple-touch-icon
echo "Gerando apple-touch-icon..."
cp "$ICONS_DIR/icon-192x192.png" "$ICONS_DIR/apple-touch-icon.png"

# Criar ícones específicos para Apple
echo "Gerando ícones específicos para Apple..."
convert "$ICON_SOURCE" -resize 180x180 -background transparent -gravity center -extent 180x180 "$ICONS_DIR/apple-touch-icon-180x180.png"

echo "Ícones PWA gerados com sucesso!"
echo "Arquivos gerados:"
ls -la "$ICONS_DIR"
echo ""
echo "Favicon copiado para: $PROJECT_DIR/public/favicon.ico"
