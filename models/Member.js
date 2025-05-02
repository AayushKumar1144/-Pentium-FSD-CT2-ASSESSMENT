const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: String,
    email: String,
    image: String  
});

module.exports = mongoose.model('Member', memberSchema);
