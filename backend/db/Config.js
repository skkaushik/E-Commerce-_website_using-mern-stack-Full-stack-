import mongoose from "mongoose";



const connectDB = async() => {
 try{
  const conn =await mongoose.connect(process.env.MONGO__URL);
  console.log(`Connected to database ${conn.connection.host}`)

 }catch(err){
  console.log(`Error in MongoDB ${err}`)

 }
  
};

export default connectDB;