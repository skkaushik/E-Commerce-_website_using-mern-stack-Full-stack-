import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/Config.js";
import  router from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";


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
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);



//rest api
app.get("/",(req,res)=>{
    res.send("Hi! Welcome to the MernMarket Backend Server")
})



// Port
const port=process.env.PORT ||8080;

app.listen(port,()=>{
    console.log(`This Server is Running On port no.${port}`)
});