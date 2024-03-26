import User from "../models/usermodel.js";
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js";
export const login=async(req,res)=>{
    try{
        const {userName,password}=req.body;
const user=await User.findOne({userName});

const comparedPass=await bcrypt.compare(password,user?.password||"");
if(!user || !comparedPass){
    return res.status(400).json({error:"Invalid username or password"})
}
await generateToken(user._id,res);
return res.status(200).json(user)
    }catch(err){
        res.status(500).json({"error":err.message})
    }
}




export const signup=async(req,res)=>{
    try{
const {fullName,userName,password,confirmPassword,gender}=req.body;
if(password!==confirmPassword){
    
  return res.status(400).json({error:"Password  doesn't match"});
}

    const user=await User.findOne({userName})
    if(user){
    return res.status(400).json({error:"User already exists"})
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const boyPic=`https://avatar.iran.liara.run/public/boy?username=${userName}`
    const girlPic=`https://avatar.iran.liara.run/public/girl?username=${userName}`
    const newuser=new User({
     fullName,
     userName,
     password:hashedPassword,
     gender,
     profilepic:gender==="male"?boyPic:girlPic,
    })
    if(newuser){
        await generateToken(newuser._id,res);
        await newuser.save()
        return res.status(200).json(newuser)
    }else{
        return res.status(400).json("Invalid User data")
    }
   
}
catch(err){
    res.status(500).json({"error":err.message})
}
}



export const logout=(req,res)=>{
try{
  res.cookie("jwt","",{maxAge:0})
  res.status(200).json({message:"Logged Out Successfully"});
}catch(err){

}
  }    