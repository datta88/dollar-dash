import { Schema, model } from "mongoose";

const transitionSchema = new Schema({
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:["credit","debit"],
        required:true
    },
    category:{
        type:String,
        enum:["shopping", "food", "reat", "entertainment", "travel", "other"],
        default:"other"
    },
    description:{
        type:String
    }
},
{
    timeStamps:true,
}
)
const transition = model ("transition ",transitionSchema);
export default transition