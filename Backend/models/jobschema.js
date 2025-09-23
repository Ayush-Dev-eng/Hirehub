import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirement:[
        {
            type:String
        }
    ],
    salary:{
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    position:{
        type:String
    },
    company:{
        type:mongoose.Schema.type.ObjectId,
        ref:'Company',
        required:true
    },
    created_by:{
        type:mongoose.Schema.type.ObjectId,
        ref:'User',
        required:true
    },
    applications:[
        {
            type:mongoose.Schema.type.ObjectId,
            ref:'Application'
        }
    ]
},{timestamps:true})
export const Job=mongoose.model('Job',JobSchema);