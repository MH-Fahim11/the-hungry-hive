import React from "react";

const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-lg font-semibold">
          Food is not just fuel, it's information. It talks to your DNA and tells it what to do.
          </p>
          <button className="px-3 py-3 font-semibold rounded-xl bg-orange-500 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
