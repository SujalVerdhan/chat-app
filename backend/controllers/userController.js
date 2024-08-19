import User from "../models/usermodel.js"

const UsersForSidebar=async(req,res)=>{
    console.log(req.user._id)
    try{
        
        const loggeduserid=req.user._id;
        console.log("hello",loggeduserid)

    const users=await User.find({_id:{$ne:loggeduserid}}).select("-password") ;
    if(!users){
      return  res.status(400).json({"error":"No Users"});

    }
    return res.status(200).json(users)
}catch(err){
    res.status(500).json({"error":err});
}
}
export default UsersForSidebar 