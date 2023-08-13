import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to MernMarket, your premier destination for a seamless
            online shopping experience. Rooted in the cutting-edge MERN
            (MongoDB, Express.js, React, Node.js) stack, we are dedicated to
            delivering a dynamic and user-friendly e-commerce platform that
            brings together an expansive array of products, intuitive
            navigation, and secure transactions. At MernMarket, we're driven by
            a passion for innovation and customer satisfaction, consistently
            striving to provide you with a curated selection of high-quality
            goods, from fashion and electronics to home essentials and beyond.
            Join us in redefining online shopping as we connect technology with
            your desires, making every click an exploration of unparalleled
            choices and convenience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
