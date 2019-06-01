const { mongoose } = require('../mongo')

const theaterSchema = new mongoose.Schema({
    theaterID:{
        type: String,
        required: true,
        unique: true
    },
    city:{
        type: String,
    },
    location:{
        type: String,
    },
    name:{
        type: String,
    },
    openYear:{
        type: Number,
    },
    size:{
        type: Number,
    },
    rate:{
        type: String,
    },
    telNumber:{
        type: String,
    },
    impossibleDate:[
        {type: Date},
    ],
    reservedDate:[{
        type:Number,
        ref: 'event'
    }]
})



module.exports = mongoose.model('Theater', theaterSchema)
