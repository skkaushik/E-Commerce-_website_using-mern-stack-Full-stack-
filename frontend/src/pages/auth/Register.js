import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import  toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [phone,setPhone]=useState('');
  const [address,setAddress]=useState('');
  const [answer,setAnswer]=useState('');
  const navigate=useNavigate();
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
console.log(name,email,password,address,answer,phone);
try{

  const user={name,email,password,address,answer,phone};
  const res=await axios.post('https://ecommerceapp-hg1t.onrender.com/api/register',user);
  if(res.data.success){
    toast.success(res.data.message);
    console.log(res.data.message)
    navigate('/login');
  }else{
    toast.error(res.data.message);
  }
 
}catch(err){
  console.log(err);
  toast.success('Some thing is wrong');
}


  }

  return (
    <Layout >
    <div className="form-container" style={{ minHeight: "90vh" }}>
      <form  onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Address"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="What is Your Favorite sports"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
      </form>
    </div>
  </Layout>
);
}

export default Register