import mongoose from "mongoose";

const subSchema = new mongoose.Schema({
    content:String
},{timestamps})

export const subTodo = mongoose.model("subTodo",subSchema)