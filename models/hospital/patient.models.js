import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
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
    addmintedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true})

export const Patient = mongoose.model("Patient",patientSchema)