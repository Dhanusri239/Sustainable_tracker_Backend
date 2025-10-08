import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Sustainable tracker is running");
});
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
 console.log("MongoDB is connected");
})
.catch((err)=>{
    console.log("MongoDB is not connected",err);
});
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server is running ");
});