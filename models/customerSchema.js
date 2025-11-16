const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    age: Number,
    country: String,
    gender: String
}, { timestamps: true });

const User = mongoose.model('customer', customerSchema);

module.exports = User;