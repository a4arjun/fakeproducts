import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public/raw/');
const outputDir = path.join(__dirname, 'public/images/');

const width = 512;
const height = 512;

fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach((file) => {
  if (file.endsWith('.png')) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'center',
      })
      .toFile(outputPath)
      .then(() => console.log(`Resized ${file}`))
      .catch((err) => console.error(`Error resizing ${file}:`, err));
  }
});
