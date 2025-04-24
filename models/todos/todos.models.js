import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        require:true
    },
    complete:{
        type:Boolean,
        defalut:false
    },
//  now imp ==> we should know na that who has maded the, means getting the usr model
    createdBy:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"User"
    },
//      type:mongoose.Schema.Type.ObjectId,
//      ref:""
//  this is the format we can say , in this we say that the createdBy type is taken fro the schema
//  whose id is (ref) User

    subTodos:[{
        type:mongoose.Schema.Type.ObjectId,
        ref:"subTodo"
    }] //Array of subTodos
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)
