import { Timestamp } from "bson"
import mongoose, { Types } from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
//this discribe all the properties of the object username 
  email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
  password:{
    type:String,
    required:[true,"Password is require"],
//  this is array that is pass it says that if PS = fasle the show this message 
  }
  },{timestamps:true}
// Timestamps --> create that when db is created and when updated 
)

export const User = mongoose.model("User",userSchema)