const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
fs.readdirSync(dir).forEach(file => {
  if (file.match(/\.(jpe?g|png)$/i)) {
    const filePath = path.join(dir, file);
    const tempPath = filePath + '.tmp';
    
    // Resize to max 600px width and compress heavily to fix Lighthouse
    sharp(filePath)
      .resize({ width: 600, withoutEnlargement: true })
      .jpeg({ quality: 60, progressive: true })
      .toFile(tempPath)
      .then(() => {
        fs.renameSync(tempPath, filePath);
        console.log('Optimized:', file);
      })
      .catch(err => console.error('Error optimizing', file, err));
  }
});
