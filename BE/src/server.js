const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    const dbState = mongoose.connection.readyState;
    const dbStatus = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting',
    };

    const status = {
      server: 'running',
      timestamp: new Date(),
      database: {
        state: dbStatus[dbState],
        status: dbState === 1 ? 'healthy' : 'unhealthy'
      }
    };

    console.log('🏥 Health Check:', {
      timestamp: status.timestamp,
      server: status.server,
      database: status.database
    });

    res.json(status);
  } catch (error) {
    console.error('❌ Health check failed:', error);
    res.status(500).json({
      status: 'error',
      message: 'Health check failed',
      error: error.message
    });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    // Start the server only after DB connection is established
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🔗 Health endpoint available at http://localhost:${PORT}/health`);
      console.log(`🛍️ Products API available at http://localhost:${PORT}/api/products`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  });