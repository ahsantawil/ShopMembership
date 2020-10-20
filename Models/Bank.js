const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    nameBank: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    rekNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Bank', bankSchema);
