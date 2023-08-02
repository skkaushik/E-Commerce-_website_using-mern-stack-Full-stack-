import JWT from "jsonwebtoken";
import userModel from "../models/userModels.js";



//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
    try {
      const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
    }
  };


  /// Admin access
   export const isAdmin=async(req,res,next)=>{
    try{
const user= await userModel.findById(req.user._id);
// console.log(user)
if(user.role !==1){
    return res.status(401).send({
        success:false,
        message:"unAuthorized Access"

    })
}else{
    next()
}
    }catch(err){
console.log(err);
    }
   }