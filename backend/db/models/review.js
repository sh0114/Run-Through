const { mongoose } = require('../mongo')

const reviewSchema = new mongoose.Schema({
    theaterID:{
        type:String,
        required: true
    },
    eventID:{
        type: Number,
        required: true
    },
    rate:{
        type:Double,
        required: true
    },
    contents:{
        type:String,
        required: true
    },
    title:{
        type:String,
    }
})

module.exports = mongoose.model('Review', reviewSchema)
