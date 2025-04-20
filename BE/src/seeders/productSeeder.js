const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  {
    name: "Classic White T-Shirt",
    description: "A comfortable and versatile white t-shirt made from 100% organic cotton.",
    price: 29.99,
    category: "men",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    stock: 100,
    rating: 4.5,
    featured: true
  },
  {
    name: "Floral Summer Dress",
    description: "Beautiful floral print dress perfect for summer days.",
    price: 49.99,
    category: "women",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Pink"],
    stock: 50,
    rating: 4.8,
    featured: true
  },
  {
    name: "Kids Denim Jacket",
    description: "Durable and stylish denim jacket for kids.",
    price: 39.99,
    category: "kids",
    images: [
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Blue"],
    stock: 30,
    rating: 4.2
  },
  {
    name: "Leather Crossbody Bag",
    description: "Elegant leather crossbody bag with multiple compartments.",
    price: 79.99,
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60"
    ],
    colors: ["Black", "Brown"],
    stock: 25,
    rating: 4.7,
    featured: true
  },
  {
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with comfortable stretch.",
    price: 59.99,
    category: "men",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    stock: 75,
    rating: 4.3
  },
  {
    name: "Oversized Hoodie",
    description: "Comfortable oversized hoodie perfect for casual wear.",
    price: 45.99,
    category: "men",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Gray", "Black"],
    stock: 60,
    rating: 4.6
  },
  {
    name: "Silk Blouse",
    description: "Elegant silk blouse for formal occasions.",
    price: 69.99,
    category: "women",
    images: [
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black"],
    stock: 40,
    rating: 4.7
  },
  {
    name: "Kids Sneakers",
    description: "Comfortable and stylish sneakers for kids.",
    price: 34.99,
    category: "kids",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["28", "30", "32", "34"],
    colors: ["White", "Black"],
    stock: 45,
    rating: 4.4
  },
  {
    name: "Wool Scarf",
    description: "Warm and stylish wool scarf for winter.",
    price: 29.99,
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60"
    ],
    colors: ["Red", "Blue", "Gray"],
    stock: 35,
    rating: 4.5
  },
  {
    name: "Leather Belt",
    description: "High-quality genuine leather belt.",
    price: 39.99,
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1582554172630-164515fdafb9?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1582554172630-164515fdafb9?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Black"],
    stock: 50,
    rating: 4.6
  },
  {
    name: "Denim Shirt",
    description: "Classic denim shirt for casual wear.",
    price: 49.99,
    category: "men",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],
    stock: 55,
    rating: 4.3
  },
  {
    name: "Pleated Skirt",
    description: "Elegant pleated skirt for formal occasions.",
    price: 59.99,
    category: "women",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy"],
    stock: 40,
    rating: 4.7
  },
  {
    name: "Kids T-Shirt",
    description: "Comfortable cotton t-shirt for kids.",
    price: 19.99,
    category: "kids",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["S", "M", "L"],
    colors: ["White", "Blue"],
    stock: 70,
    rating: 4.4
  },
  {
    name: "Wool Hat",
    description: "Warm wool hat for winter.",
    price: 24.99,
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&auto=format&fit=crop&q=60"
    ],
    colors: ["Gray", "Black"],
    stock: 45,
    rating: 4.5
  },
  {
    name: "Chino Pants",
    description: "Classic chino pants for casual wear.",
    price: 54.99,
    category: "men",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["30", "32", "34", "36"],
    colors: ["Khaki", "Navy"],
    stock: 50,
    rating: 4.4
  },
  {
    name: "Blazer",
    description: "Elegant blazer for formal occasions.",
    price: 89.99,
    category: "women",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy"],
    stock: 35,
    rating: 4.8
  },
  {
    name: "Kids Hoodie",
    description: "Warm and comfortable hoodie for kids.",
    price: 34.99,
    category: "kids",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Blue"],
    stock: 60,
    rating: 4.3
  },
  {
    name: "Sunglasses",
    description: "Stylish sunglasses with UV protection.",
    price: 39.99,
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop&q=60"
    ],
    colors: ["Black", "Brown"],
    stock: 40,
    rating: 4.6
  },
  {
    name: "Polo Shirt",
    description: "Classic polo shirt for casual wear.",
    price: 39.99,
    category: "men",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1598033129183-c50c736f10?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "White"],
    stock: 65,
    rating: 4.5
  },
  {
    name: "Maxi Dress",
    description: "Elegant maxi dress for special occasions.",
    price: 79.99,
    category: "women",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=60"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Red", "Black"],
    stock: 30,
    rating: 4.9,
    featured: true
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('Successfully seeded products');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();