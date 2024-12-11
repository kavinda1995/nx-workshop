const express = require('express');
const cors = require('cors')

const app = express();
const port = 3001;

let products = [
  { id: 1, name: 'Laptop', price: 1000.0, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?fit=crop&w=500&q=80' },
  { id: 2, name: 'Smartphone', price: 800.0, image: 'https://i.guim.co.uk/img/media/6ead18d1b23b6cdaa33f6731c0c417a8f0576552/539_452_3726_2236/master/3726.jpg?width=445&dpr=1&s=none&crop=none' },
  { id: 3, name: 'Headphones', price: 200.0, image: 'https://cdn.mos.cms.futurecdn.net/kbrdKHwjXBwSp9uiY8hejP.jpg' }
];

app.use(express.json());
app.use(cors())

// Endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Endpoint to sell a product
app.post('/api/sell', (req, res) => {
  const { productId } = req.body;
  const index = products.findIndex(product => product.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, message: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});