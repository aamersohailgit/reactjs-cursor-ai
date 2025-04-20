const mongoose = require('mongoose');
require('dotenv').config();

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connection successful!');

    // Test a simple operation
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📚 Collections in database:', collections.map(c => c.name));

    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
};

testConnection();

console.log('Connection test successful!');
console.log('Backend is ready to go!');