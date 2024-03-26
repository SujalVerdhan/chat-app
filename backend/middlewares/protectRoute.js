
import jwt from "jsonwebtoken"
import User from '../models/usermodel.js';

export const protectRoute = async(req,res,next) => {
  try{
const token= await req.cookies.jwt;
console.log("hello")
console.log(token)
if(!token){
 return res.status(401).json({error:"Unauthorised User-No token provided"});

}
const decoded=await jwt.verify(token,process.env.JWTSecret);
console.log(decoded)
if(!decoded){
 return res.status(401).json({errro:"Unauthorised Access- token not matched"})
}
const user=await User.findById(decoded.id).select("-password")
console.log(user)
if(!user){
return res.status(401).json({error:"User not found"});

}
req.user=user
next();


  }catch(err){
res.status(500).json({err:"internal server error by middle"})
  }
}
