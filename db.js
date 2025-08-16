const mongoose = require('mongoose');
require('dotenv').config();
//define mongoDB connection url

// const mongoURL = 'mongodb://localhost:27017/hotesl';
const mongoURL = process.env.DB_URL;
mongoose.connect(mongoURL);

const db = mongoose.connection;

//event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});


//export the database connection

module.exports = db;

