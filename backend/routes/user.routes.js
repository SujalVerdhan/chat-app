import express from "express"
import UsersForSidebar from "../controllers/userController.js";
import { protectRoute } from "../middlewares/protectRoute.js";
const router=express.Router()
router.get("/",protectRoute,UsersForSidebar)
export default router;