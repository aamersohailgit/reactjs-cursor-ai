const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
let dbConnected = false;
connectDB().then(connected => {
  dbConnected = connected;
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  const status = {
    status: 'ok',
    message: 'Backend server is running',
    database: dbConnected ? 'connected' : 'disconnected'
  };
  res.json(status);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});