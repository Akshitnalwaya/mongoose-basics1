import { Timestamp } from "bson"
import mongoose, { Types } from "mongoose"
const categorySchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  },{timestamps:true}
)
export const Category = mongoose.model("Category",categorySchema)