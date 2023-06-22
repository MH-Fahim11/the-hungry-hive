import React from "react";

const Hero = () => {
  return (
    <div className=" min-h-screen bg-gray-200 md:mx-10 my-5 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse md:px-10">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="md:max-w-sm w-96 rounded-lg shadow-2xl"
        />
        <div className=" md:px-10">
          <h1 className="text-4xl font-bold">Best Selling <span className=" text-orange-500">Food</span>  <br/> In this month.</h1>
          <p className="py-6 pr-5">
          Tacos are a popular Mexican food item that is enjoyed by people all over the world. They can be filled with a variety of ingredients such as meat, vegetables, and cheese.
          </p>
          <button className="px-3 py-3 font-semibold rounded-xl bg-orange-500 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
