import mongoose from "mongoose"
import User from "./usermodel.js"
import Message from "./message.js"
const conversationSchema=mongoose.Schema({
messages:[
    {
        type:mongoose.Schema.Types.ObjectId,ref:Message
        ,default:[]
    }
],
participants:[
    {
        type:mongoose.Schema.Types.ObjectId,ref:User
    }
]
},{timestamps:true});
const Conversation=mongoose.model("Conversation",conversationSchema);
export default Conversation;