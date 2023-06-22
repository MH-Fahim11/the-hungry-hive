import React from "react";

const NewsLetter = () => {
  return (
    <div
      className="mt-7 mx-10 rounded-2xl"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1628573255381-e1b7712b5ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
      }}
    >
      <div className=" hero-overlay bg-opacity-60 p-10 rounded-2xl">
        <div className=" md:flex justify-around text-white font-serif">
          <div>
            <h1 className=" font-bold md:text-3xl text-xl text-orange-100">Follow our newsletter</h1>
            <p className="md:ml-4 text-slate-300">We Will send you best recipe of the month.<br/> Also you will able to send your recipe too. </p>
          </div>
          <div className="mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered"
            />
            <button className="mt-5 md:mt-0 md:ml-2 p-3 font-serif bg-orange-400 rounded-xl text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
