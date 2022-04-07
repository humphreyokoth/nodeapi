import mongoose from "mongoose";


const connectDB =()=>{
try{
mongoose.connect(process.env.DB_URI);
}
catch(err){
    console.log(err)
}




}