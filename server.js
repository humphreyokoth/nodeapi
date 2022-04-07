import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./Models/mongodbConfig"


// db connection
connectDB
// Server

const port = 3000;
const server = express();

// Middelware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));


server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

