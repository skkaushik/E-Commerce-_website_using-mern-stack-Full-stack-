import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/Config.js";
import  router from './routes/authRoute.js'

//config env
dotenv.config();

//database connection
connectDB();

// rest object
const app=express();


//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());



// routes
app.use('/api/',router)


//rest api
app.get("/",(req,res)=>{
    res.send("Hi! Welcome to the MernMarket Backend Server")
})



// Port
const port=process.env.PORT ||8080;

app.listen(port,()=>{
    console.log(`This Server is Running On port no.${port}`)
});