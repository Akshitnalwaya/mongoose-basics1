//Data modeling 

//this discribe the user only 

//creating a schema 
//what is a schema --> an outline of the data set 

import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

})

// .schema -->this is the method and it take an object (object --<{})

//then export so that we can use it in our data base (mongoDb)

export const User = mongoose.model("User",userSchema)

// .model is a method which take two parameters 
//    1.Which/what model ==> User
//    2.And on which bases ==> userSchema



// Q1. Why we use new keyword in mongoose.schema?
// Q2. If i send User as the name of db in code how it will be store in mongoose
// ** when the data or the schema get store in the main database it is store as by plurales means with endind s and all are lowercase ** //

//means ===> User will be ===> users