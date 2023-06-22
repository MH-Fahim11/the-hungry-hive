import React from "react";
import { Link } from "react-router-dom";
import { BiCookie } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import LazyLoad from "react-lazy-load";
import './lazy.css'
const ChefCard = (props) => {
  const {
    name,
    image,
    number_of_recipes,
    years_of_experience,
    likes,
    chefs_id,
  } = props.chef;
  return (
    <div className="card w-96 bg-orange-50 shadow-xl h-custom-2 ">
      <figure className="pt-4">
        <LazyLoad threshold={0.95} height={350} >
          <img src={image} alt="Chef img" className="rounded-xl h-custom-4 " />
        </LazyLoad>
      </figure>
      <div className=" text-center">
        <h2 className=" font-semibold text-xl mt-2 ">{name}</h2>
        <p className=" text-base text-slate-500">
          {" "}
          {years_of_experience} Years of Experience
        </p>
        <div className="flex justify-between px-10 mt-2">
          <p className=" flex text-lg">
            <BiCookie className=" mt-1 mr-1"></BiCookie> {number_of_recipes}+
            recipes
          </p>
          <p className=" flex text-lg">
            {" "}
            <AiFillLike className=" mt-1 mr-1"></AiFillLike> {likes}
          </p>
        </div>

        <Link to={`chefrecipes/${chefs_id}`}>
          <button className="mt-5 p-2 mb-4 bg-orange-500 rounded-lg text-white font-semibold text-center font-serif hover:bg-orange-600">
            View Recipes{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
