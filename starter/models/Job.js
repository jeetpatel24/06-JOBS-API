const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company : {
        type:String,
        required:[true, 'Please provide company name'],
        maxlength:50
    },
    position : {
        type:String,
        required:[true, 'Please provide position'],
        maxlength:100
    },
    status:{
        type:String,
        enum:['interview', 'declined', 'pending'],
        default:'pending'
    },

    //tie job to a user
    //every job is associated to a user -> thats why every job has one ObjectId
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide a user']
    }
},{timestamps:true})

//timestamps -> automatically manages 'createdAt' and 'updatedAt' 


module.exports = mongoose.model('Job', JobSchema)