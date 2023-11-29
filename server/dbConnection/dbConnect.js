const mongoose = require('mongoose');
const Visitor = require('../model/visitorModel')
require('dotenv').config();

function dbconnect(data) {
    const mongoURI = process.env.MONGODB_URI;
    mongoose.connect(mongoURI);

    const newVisitor = new Visitor({
        visitors_name: data.visitors_name,
        visitors_mobile: data.visitors_mobile,
        visitors_address: data.visitors_address,
        drinks_snacks: data.drinks_snacks,
        came_to_meet: data.came_to_meet,
        reason_for_visit: data.reason_for_visit,
    });

    newVisitor.save();

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });

}

module.exports = dbconnect