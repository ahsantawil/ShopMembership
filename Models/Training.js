const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    videoUrl : {
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

module.exports = mongoose.model('Training', trainingSchema);