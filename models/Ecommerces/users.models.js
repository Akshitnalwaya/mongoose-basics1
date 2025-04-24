import { Timestamp } from "bson"
import mongoose, { Types } from "mongoose"
const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
  password:{
    type:String,
    required:[true,"Password is require"],
  }
  },{timestamps:true}
)

export const User = mongoose.model("User",userSchema)