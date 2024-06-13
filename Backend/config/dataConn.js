import mongoose from "mongoose"

const connectDB = async ()=>{
    await mongoose.connect(process.env.Mongo_URL).then(()=>{
        console.log("connected to database")
    }).catch((error)=>{
        console.log("error connecting to database",error)
    })

}

export default connectDB;