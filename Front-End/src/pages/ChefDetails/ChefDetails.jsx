import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BiCookie } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import RecipesCards from "../Shared/RecipesCards/RecipesCards";

const ChefDetails = () => {
  const { id } = useParams();
  const chefRecipes = useLoaderData();

  const [chef, setChef] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://the-hungry-hive-server-site-mh-fahim11.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.error(error));
    setLoading(false);
  }, []);

    return (
      <div className="mt-10">
        <div className="card card-side bg-base-100 shadow-xl mx-5">
          <figure>
            <img src={chef?.image} alt="Movie" />
          </figure>
          <div className="card-body mt-20 mr-20 mb-20">
            <h2 className="card-title font-serif">{chef?.name}</h2>
            <p>{chef?.bio}</p>{" "}
            <div>
              <p><span className="font-bold">Likes:</span> {chef?.likes} </p>
              <p> <span className="font-bold">Total Recipes:</span>  {chef?.number_of_recipes} </p>
            </div>
            <p><span className="font-bold">Experience: </span> {chef?.years_of_experience}years</p>
          </div>
        </div>
        <div className="mt-16 mx-6">
          <h1 className=" text-center font-bold text-2xl">All Recipe</h1>
          <div className="  grid grid-cols-2 gap-5">
          
            {
             chefRecipes?.map((recipe) => (<RecipesCards 
                key ={recipe.recipes_id}
                recipe = {recipe}
                ></RecipesCards>) ) 
            }  
        </div>
        </div>
        
      </div>
    );
};

export default ChefDetails;
