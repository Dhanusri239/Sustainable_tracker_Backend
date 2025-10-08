import mongoose from "mongoose";
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is connected");
        
    }
    catch(err){
        console.log("MongoDB is not connected",err);
        process.exist(1);
    }
};
export default connectDB;