import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsDir = path.join(__dirname, 'products');
const outputPath = path.join(__dirname, 'public', 'data', 'products.json');

function generateJSON() {
  const files = fs.readdirSync(productsDir);

  const products = files.map((file) => {
    const filePath = path.join(productsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      ...data,
      description: content.trim(),
    };
  });

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
  console.log(`${products.length} products written to ${outputPath}`);
}

generateJSON();
