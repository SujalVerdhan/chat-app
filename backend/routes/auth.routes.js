import express from "express";
// const express=require("express");
import { login, logout, signup } from "../controllers/authController.js";
const router=express.Router()
router.post("/login",login)
router.post("/signup",signup)
    router.post("/logout",logout)

// module.exports=router;
export default router