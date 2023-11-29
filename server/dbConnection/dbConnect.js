const mongoose = require('mongoose');

require('dotenv').config();

function dbconnect() {
    const mongoURI = process.env.MONGODB_URI;
    mongoose.connect(mongoURI);

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });

}

module.exports = dbconnect