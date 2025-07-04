# Fake Product API

A lightweight mock product API built with Node.js and Express — perfect for frontend demos, prototyping, and testing.  
Products are stored as Markdown files with frontmatter, making them easy to manage without a database.

This project includes **20 sample products** out of the box — and you're free to add your own.

The goal is to **generate a `products.json` file** for use in frontend apps or prototypes.

---

## 🚀 Features

- 🧾 Products defined in Markdown (`.md`) with frontmatter metadata
- ⚙️ Generates a single `products.json` file
- 🔥 Express API for fetching:
  - All products
  - By `id`
  - By `brand`
- 📷 Local image support via `/public/images`
- 💾 No DB required — portable, file-based approach


---

## 📄 Example Product (Markdown)

Save each product in the `/products` folder as a `.md` file.  
Here’s an example schema:


```markdown
---
id: 1
name: Samsung Galaxy S23 Ultra
category: electronics
subcategory: mobile
brand: Samsung
price: 99999
image: /images/samsung_s23_ultra.jpg
keywords:
  - smartphone
  - mobile
  - 5G
  - AMOLED
specifications:
  screen_size: 6.8 inches
  resolution: 3088x1440
  processor: Snapdragon 8 Gen 2
  ram: 12GB
  storage: 512GB
  battery: 5000mAh
  os: Android 14
rating:
  rate: 4.7
  count: 320
---

5G smartphone with 6.8-inch AMOLED display, 200MP camera, 12GB RAM, 512GB storage.
```

## Installation

```bash
git clone https://github.com/a4arjun/fakeproducts.git
cd fakeproducts
npm install
```

## Generate JSON

```bash
npm run generate:products
```

This reads all `.md` files in `products/` and outputs `products.json"` at 

```bash
public/data/
```


This JSON file can be used directly in any frontend or mock app.

## Start the Server (Optional)

You can use the built-in Express API to serve the generated data.

```bash
node server.js
```

| Method | Endpoint                     | Description                    |
| ------ | ---------------------------- | ------------------------------ |
| GET    | `/api/products`              | Get all products               |
| GET    | `/api/products/:id`          | Get product by ID              |
| GET    | `/api/products/brand/:brand` | Get all products by brand name |

## Image Handling (optional)

Place product images inside `public/images/`.

Use relative paths in the frontmatter, like this:

```json
"image": "/images/iphone-16.png"
```

These images will be served at 

```bash
http://localhost:3000/images/iphone-16.jpg
```

## Batch Image Resizing (Optional)

If you'd like to resize all product PNGs to a consistent size using sharp.

- Place unedited images inside `public/raw/`.
- The resized versions will overwrite any files in `public/images/`
- Then run:

```bash
npm run resize:images
```

## Ideal for

- Frontend demo apps

- Portfolio projects

- E-commerce mockups

- Mobile filtering UI/UX
