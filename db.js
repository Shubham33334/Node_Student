const mongoose = require('mongoose');

//define mongoDB connection url

const mongoURL = 'mongodb://localhost:27017/hotesl';

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

