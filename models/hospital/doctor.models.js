import mongoose from "mongoose";
import { Hospital } from "./hospitsal.models";

const HourSchema = new mongoose.Schema({
    worksIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    },
    time:{
        type:String,
        require:true
    }
})

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    bloodGrp:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        enum:["MALE","FEMALE","OTHERS"],
        require:true
    },
    salary:{
        type:Number,
        require:true
    },
    expirence:{
        type:Number,
        require:true,
        default:O
    }  ,
     workAt:["Manipal","Jodpur","Mumbai"],
     typeOfHospital:[
        {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Hospital"
        }
     ],
     workingHours:{
        type:mongoose.Schema.type.ObjectId,
        ref:"HourSchema"
     }
    
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)