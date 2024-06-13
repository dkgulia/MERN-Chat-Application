import express from "express";
import dotenv from "dotenv"; 
import connectDB from "./config/dataConn.js";
import userRoute from "./routes/userRoute.js";
import msgRoute from "./routes/msgRoute.js";
import cookieParser from "cookie-parser"

dotenv.config({});

const app = express();
const PORT =9090;

app.use(express.json())
app.use(cookieParser())
//routes
app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",msgRoute)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running on ${PORT}`)
})