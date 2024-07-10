import dotenv from "dotenv";
import express from "express";
import connectDB from "./DB/dbconfig.js";

dotenv.config({
    path: "./.env"
})

const app = express();

// app.listen(process.env.PORT,()=>{
//     console.log(`Server is running on port ${process.env.PORT}`);
// })

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err);
})