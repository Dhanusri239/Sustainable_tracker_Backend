import express from "express";
import { registerUser } from "../controllers/usercontroller.js";

console.log("🚀 User routes loaded");

const router = express.Router();

router.post("/register", registerUser);

export default router;
