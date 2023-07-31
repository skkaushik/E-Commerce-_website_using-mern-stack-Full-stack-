const express=require('express');
const cors=require('cors');
const dotenv = require("dotenv");

dotenv.config();
const port=process.env.PORT ||8080;
const connectDB = require("./db/Config");



const app=express();
app.use(cors());

connectDB();

app.get("/",(req,res)=>{
    res.send("Hi! Welcome to the MernMarket Backend Server")
})

app.listen(port,()=>{
    console.log(`This Server is Running On port no.${port}`)
});