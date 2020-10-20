const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    typeProduct : {
        type : String,
        required : true
    },
    size : {
        type: String,
        required: true
    },
    priceMember:  {
        type : Number,
        required: true
    },
    priceConsumer : {
        type: Number,
        required: true
    },
    stock : {
        type : Number,
        required: true
    },
    productDescription : {
        type : String,
        required: true
    },
    productUsed : {
        type : String,
        required : true
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

module.exports = mongoose.model('Product', productSchema);