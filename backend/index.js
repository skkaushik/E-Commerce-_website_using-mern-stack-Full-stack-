const express=require('express');
const cors=require('cors');
require('dotenv').config;
const port=process.env.PORT||8080

const app=express();
app.use(cors());

app.listen(port,()=>{
    console.log(`This Server is Running On port no.${port}`)
})