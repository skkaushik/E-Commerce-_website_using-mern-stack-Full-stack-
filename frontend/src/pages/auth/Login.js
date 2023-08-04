import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { toast } from 'react-hot-toast';
function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=async(e)=>{
    e.preventDefault();
console.log(email,password);
try{

  const user={email,password};
  const res=await axios.post('http://localhost:8080/api/login',user);
  if(res.data.success){
    toast.success(res.data.message);
    console.log(res.data.message)
    // navigate('/login');
  }else{
    toast.error(res.data.message);
  }
 
}catch(err){
  console.log(err);
  toast.success('Some thing is wrong');
}
  }
  return (
    <Layout>
    <div className="form-container" style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit} >
        <h4 className="title">LOGIN FORM</h4>

        <div className="mb-3">
          <input
            type="email"
            autoFocus
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
          <button
            type="button"
            className="btn forgot-btn"
            onClick={() => {
            //   navigate("/forgot-password");
            }}
          >
            Forgot Password
          </button>
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  </Layout>
);
}

export default Login