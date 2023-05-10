const mongoose = require('mongoose')
const Schema= mongoose.Schema;

const workOutSchema=  new Schema({
    title : {
        type : String,
        require : true
    },

    reps : {
        type : Number,
        required: true
    },
    
    load: {
        type: Number,
        required: true
    }


}, {timestamps: true})

const dataBring =  mongoose.model('Workout', workOutSchema);
module.exports = dataBring;