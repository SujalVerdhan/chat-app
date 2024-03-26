import express from "express"
import dotenv from "dotenv"
// import router from "./routes/auth.routes"
// const express =require("express")
// const dotenv=require("dotenv")
// const auth=require("./routes/auth.routes")
import auth from "./routes/auth.routes.js"
import path from "path"
import connect from "./db/db.js";
import messageRoute from "./routes/message.routes.js"
import { protectRoute } from "./middlewares/protectRoute.js";
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js"
import cors from "cors"
import { app, server } from "./socket/socket.js";
dotenv.config();

const __dirname=path.resolve()
app.use(express.json())
// app.use(cors({
//     origin:'http://localhost:3000',
    
// }));
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With, Content-Type, Accept "
//     );
//     next();

// })
// app.use(cors({
//     origin: 'http://localhost:3000'
// }))
app.use(cookieParser())
// app.get("/",(req,res)=>{
// res.send("Hello Bhai")
// })
app.use("/api/messages",messageRoute)
app.use("/api/users",userRoutes)
app.use("/api/auth",auth);
app.use(express.static(path.join(__dirname,"/frontend/vite-project/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","vite-project","dist","index.html"))
})
server.listen(process.env.PORT,()=>{
    connect();
    console.log("server running in port 5000")
})
