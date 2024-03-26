import Conversation from "../models/conversations.js";
import Message from "../models/message.js";
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage=async(req,res)=>{
    //
    try{
        const message=req.body.message;
        console.log("lala",req.body.message)
        console.log("lala",message)
        const {id:recieverId}=await req.params;
        const senderId=await req.user._id;
    // res.json(message,recieverId,senderId)
    let conversation=await Conversation.findOne({
        participants:{$all:[senderId,recieverId]}

     })
     if(!conversation){
      conversation= await Conversation.create({
            participants:[senderId,recieverId]
        })
     }
     const newMessage=new Message({
senderId,recieverId,message
     })
     if(newMessage){
        await conversation.messages.push(newMessage._id)
     }
     await Promise.all([conversation.save(),newMessage.save()])
     console.log(newMessage)
     const recieverSocketId=getRecieverSocketId(recieverId);
     if(recieverSocketId){
        io.to(recieverSocketId).emit("newMessage",newMessage)
     }
     res.status(200).json(newMessage)
    }catch(err){
        res.status(500).json({error:"Internal server Error"})
    }
    
}
export const getMessage=async(req,res)=>{
    try{
const {id:userToChatId}=await req.params;
const senderId=req.user._id;
let conversation=await Conversation.findOne({participants:{$all:[senderId,userToChatId]}}).populate("messages");
if(!conversation){
  return  res.status(200).json([])
}
const messages=await conversation.messages
res.status(200).json(messages)
    }catch(err){
        res.status(500).json("Internal Server Error");

    }

}