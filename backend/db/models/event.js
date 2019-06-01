const { mongoose } = require('../mongo')

const eventSchema = new mongoose.Schema({
    eventID:{
        type:Number,
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    producer:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    size:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    ticketPrice:{
        type: Number,
        required: true
    }
})

eventSchema.plugin(autoIncrement, {
    model: 'event',
    field: 'eventID',
    startAt: 1
});

module.exports = mongoose.model('Event', eventSchema)
