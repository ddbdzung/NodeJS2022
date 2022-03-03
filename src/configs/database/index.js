const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect('mongodb://localhost:27017/NodeJS_HIT', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect to MongoDB successfully!');
    } catch (err) {
        console.error('Error connecting to MongoDB!');
    }
}

module.exports = { connect };
