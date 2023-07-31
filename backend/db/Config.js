const mongoose = require("mongoose");

const url =process.env.MONGO__URL;

const connectDB = async() => {
 await mongoose.connect(url)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};

module.exports=connectDB;