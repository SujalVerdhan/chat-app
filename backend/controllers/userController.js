import User from "../models/usermodel.js"

const UsersForSidebar=async(req,res)=>{
    try{
        const loggeduserid=req.user._id;

    const users=await User.find({_id:{$ne:loggeduserid}}).select("-password") ;
    if(!users){
        res.status(400).json({error:"No Users"});

    }
    res.status(200).json(users)
}catch(err){
    res.status(500).json({error:err});
}
}
export default UsersForSidebar 