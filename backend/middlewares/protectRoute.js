
import jwt from "jsonwebtoken"
import User from '../models/usermodel.js';

export const protectRoute = async(req,res,next) => {
  const token= await req.cookies.jwt;
  try{

console.log("hello")
console.log(token)
if(!token){
 return res.status(401).json({error:"Unauthorised User-No token provided"});

}
console.log(process.env.jwtSecret)
const decoded=await jwt.verify(token,process.env.jwtSecret);
console.log("jai ho")
console.log(decoded)
if(!decoded){
 return res.status(401).json({error:"Unauthorised Access- token not matched"})
}
const user=await User.findById(decoded.id).select("-password")
console.log(user)
if(!user){
return res.status(401).json({error:"User not found"});

}
req.user= user
next();


  }catch(err){
   
    
    console.log(err)
return res.status(500).json({error:"Token Expired Login again"})

  }
}
