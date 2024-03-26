import mongoose from "mongoose"
const connect=async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DB connected")
    }catch(err){
        console.log("The error",err.message)
    }
}
export default connect;