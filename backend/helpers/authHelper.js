import bcrypt from "bcrypt"




export let hashPassword = async (password) => {
  try {
    let saltRounds = 10;
    let hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword)
    return hashedPassword;
  } catch (err) {
    console.log(err);
  }
};


export let comparePassword = async (password, hashedPassword) => {
  return   bcrypt.compare(password, hashedPassword);
 
};


