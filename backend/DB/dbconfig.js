import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        if(connectionInstance){
            console.log("Database connected successfully");
        }
        else{
            console.log("Database connection failed");
        }
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;