const { mongoose } = require('../mongo')

const theaterManagerSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    pw:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('TheaterManager', theaterManagerSchema)
