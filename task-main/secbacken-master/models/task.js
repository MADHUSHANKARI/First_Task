const mongoose = require('mongoose');
// const validator = require('validator');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'please enter type'],
        unique:true
    },
    description: {
        type: String,
        required: [true, 'Please enter description']
    },
    due_date: {
        type: Date,
        required: [true, 'Please select date']
    },
    status: {
         type: String,
        enum: ['Pending', 'In Progress', 'Completed'], 
        default: 'Pending'
     }
,
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('task', taskSchema)