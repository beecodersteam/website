#!/usr/bin/env node

console.log('🚀 Script starting...');

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const OPTIMIZED_DIR = path.join(IMAGES_DIR, 'optimized');

// Directory configurations
const DIRECTORIES = [
  {
    source: 'bees',
    output: 'bees',
    maxWidth: 800,
    maxHeight: 600,
    maintainAspect: true,
    description: 'Bee images (max 800x600, maintaining proportions)'
  },
  {
    source: 'illustrations',
    output: 'illustrations',
    maxWidth: 800,
    maxHeight: 600,
    maintainAspect: false,
    description: 'Illustration images (fixed 800x600)'
  },
  {
    source: 'logos',
    output: 'logos',
    maxWidth: null,
    maxHeight: null,
    maintainAspect: true,
    format: 'png',
    description: 'Logo images (original dimensions, PNG format)'
  },
  {
    source: 'portifolio',
    output: 'portifolio',
    maxWidth: 800,
    maxHeight: 600,
    maintainAspect: false,
    description: 'Portfolio images (fixed 800x600)'
  },
  {
    source: 'testimonials',
    output: 'testimonials',
    maxWidth: 150,
    maxHeight: 150,
    maintainAspect: false,
    description: 'Testimonial images (fixed 150x150)'
  }
];

// Create directories if they don't exist
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${path.relative(process.cwd(), dir)}`);
  }
}

// Process a single image
async function processImage(inputPath, outputPath, config) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const fileName = path.basename(inputPath);
    const baseName = path.parse(fileName).name;
    
    console.log(`📸 Processing: ${fileName} (${metadata.width}x${metadata.height})`);

    let processedImage = image;

    // Apply resizing based on configuration
    if (config.maxWidth && config.maxHeight) {
      if (config.maintainAspect) {
        // Resize maintaining aspect ratio (fit inside)
        processedImage = processedImage.resize(config.maxWidth, config.maxHeight, {
          fit: 'inside',
          withoutEnlargement: true
        });
      } else {
        // Resize to exact dimensions (cover)
        processedImage = processedImage.resize(config.maxWidth, config.maxHeight, {
          fit: 'cover',
          position: 'center'
        });
      }
    }

    // Convert and save based on format configuration
    if (config.format === 'png') {
      // Save as PNG for logos
      const outputFilePath = path.join(outputPath, `${baseName}.png`);
      await processedImage
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputFilePath);
      
      const finalMetadata = await sharp(outputFilePath).metadata();
      console.log(`  ✅ Optimized: ${baseName}.png (${finalMetadata.width}x${finalMetadata.height})`);
    } else {
      // Convert to WebP for all other images
      const outputFilePath = path.join(outputPath, `${baseName}.webp`);
      await processedImage
        .webp({ quality: 90 })
        .toFile(outputFilePath);

      const finalMetadata = await sharp(outputFilePath).metadata();
      console.log(`  ✅ Optimized: ${baseName}.webp (${finalMetadata.width}x${finalMetadata.height})`);
    }

  } catch (error) {
    console.error(`❌ Error processing ${path.basename(inputPath)}:`, error.message);
  }
}

// Process a directory
async function processDirectory(config) {
  const sourceDir = path.join(IMAGES_DIR, config.source);
  const outputDir = path.join(OPTIMIZED_DIR, config.output);

  console.log(`\n📁 Processing: ${config.description}`);
  console.log(`   Source: ${path.relative(process.cwd(), sourceDir)}`);
  console.log(`   Output: ${path.relative(process.cwd(), outputDir)}\n`);

  // Check if source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.log(`⚠️  Source directory not found: ${config.source}`);
    return 0;
  }

  // Ensure output directory exists
  ensureDirectoryExists(outputDir);

  // Find all images in source directory
  const pattern = path.join(sourceDir, '*.{jpg,jpeg,png,webp}');
  const imageFiles = glob.sync(pattern);

  if (imageFiles.length === 0) {
    console.log(`⚠️  No images found in ${config.source} directory`);
    return 0;
  }

  console.log(`Found ${imageFiles.length} images to process:\n`);

  // Process each image
  for (const imagePath of imageFiles) {
    await processImage(imagePath, outputDir, config);
  }

  return imageFiles.length;
}

// Main function
async function optimizeImages() {
  console.log('🐝 Starting comprehensive image optimization...\n');
  console.log('This will process all images and convert them to optimized format.\n');

  let totalProcessed = 0;

  // Process each directory configuration
  for (const config of DIRECTORIES) {
    const processed = await processDirectory(config);
    totalProcessed += processed;
  }

  console.log('\n🎉 Image optimization completed!\n');
  console.log('📋 Summary:');
  console.log(`   • Total images processed: ${totalProcessed}`);
  console.log('   • Images converted to WebP format (except logos in PNG)');
  console.log('   • Optimized images saved in: public/images/optimized/');
  console.log('\n📁 Directory structure:');
  DIRECTORIES.forEach(config => {
    console.log(`   • ${config.source}/ → optimized/${config.output}/`);
  });
  console.log('');
}

// Run the script
if (require.main === module) {
  console.log('🚀 Script started...');
  optimizeImages().catch(error => {
    console.error('❌ Error:', error);
  });
}

module.exports = { optimizeImages };
