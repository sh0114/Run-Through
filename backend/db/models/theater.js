const { mongoose, autoIncrement } = require('../mongo')

const theaterSchema = new mongoose.Schema({
    theaterID:{
        type: String,
        required: true
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

theaterSchema.plugin(autoIncrement, {
    model: 'theater',
    field: 'theaterID',
    startAt: 1
});


module.exports = mongoose.model('Theater', theaterSchema)
