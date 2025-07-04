import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static('public'));


// Get all products
app.get('/api/products', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'data', 'products.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(data);
  res.json(products);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'data', 'products.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(data);

  const product = products.find(p => p.id == req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Get products by brand
app.get('/api/products/brand/:brand', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'data', 'products.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(data);

  const brand = req.params.brand.toLowerCase();
  const filtered = products.filter(
    (p) => p.brand.toLowerCase() === brand
  );

  if (filtered.length > 0) {
    res.json(filtered);
  } else {
    res.status(404).json({ message: `No products found for brand: ${req.params.brand}` });
  }
});


app.listen(port, () => {
  console.log(`Server running...`);
});
