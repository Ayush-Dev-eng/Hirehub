import mongoose from 'mongoose';

const CompanySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String
    },
    website:{
        type:String
    },
    logo:{
        type:String
    },
    userId:{
        type:mongoose.Schema.type.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true});
export const Company=mongoose.Schema('Company',CompanySchema);