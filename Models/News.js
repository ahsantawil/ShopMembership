const mongoose =  require('mongoose')

const newsSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    article : {
        type: String,
        required : true
    },
    imgUrl : {
        type : String,
        required : true
    },
    publish : {
        type : Date,
        default: Date.now
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

module.exports = mongoose.model('News', newsSchema);