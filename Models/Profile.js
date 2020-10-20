const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const profileSchema = new mongoose.Schema({
    membersId : {
        _id : {
            type : ObjectId,
            ref : 'Members',
            required: true
        },
        username : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required: true
        }
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    idNumber: {
        type: String,
        required: true
    },
    npwpNumber: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    posCode: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: false
    },
    refferalCode: {
        type: String,
        required: false
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

module.exports = mongoose.model('Profile', profileSchema);