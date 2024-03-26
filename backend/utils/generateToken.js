import jwt from "jsonwebtoken"
const generateToken=async (id,res)=>{
const token=jwt.sign({id},process.env.jwtSecret,{expiresIn:"15d"});
await res.cookie("jwt",token,{
    maxAge:15*24*60*60*1000,
    httpOnly:"true",
    sameSite:"strict",
   


});
}
export default generateToken;