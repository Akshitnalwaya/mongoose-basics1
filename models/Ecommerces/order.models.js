import { Timestamp } from "bson"
import mongoose, { Types } from "mongoose"
import { Product } from "./products.models"

const orderItemsSchema = new mongoose.Schema({
    ProductId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
// This will make a product id and we will see how many quantity
//basically this is for counting the quantity 
    quantity:{
        type:Number,
        require:true
    }
})


const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        require:true
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
// This is the array of the itmes or we can say that quantity this is 
    orderItems:{
        type:[orderItemsSchema]
    },
//  restricted filed format ===> means only these can be used except no 
//  other will be considered 
//  in this we decleared some values and only that values are used
    status:{
        type:String,
        enum: ["PENDING","DELIVERD","CANCELLED"],
        default:"PENDING"
    }
//  This mean that we can only choose from the enum's and no other value
//  will be choses or accepted 
},{timestamps:true}
)
export const Order = mongoose.model("Order",categorySchema)
