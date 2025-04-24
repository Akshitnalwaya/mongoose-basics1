import { Timestamp } from "bson"
import mongoose, { Types } from "mongoose"
const productSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  owners: {
    type:mongoose.Schema.Type.ObjectId,
     ref:"User"
  },
  Category:{
    type:mongoose.Schema.Type.ObjectId,
    ref:"Category",
    require: true
  }
  },{timestamps:true}
)
export const Product = mongoose.model("Product",categorySchema)
//In array order matters but not in object