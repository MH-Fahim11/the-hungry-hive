import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesCards = (props) => {
  const { name, description, image, ingredients, cooking_method, rating } =
    props.recipe;
    const notify = () => toast("This recipe is your favorite!");
    const [disable ,setDisable] = useState(false);
    const hendelClicks=()=>{
       setDisable(true)
        notify()
    }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-custom-1 flex flex-col justify-between">
        <div>
          <figure className="px-5 pt-5 rounded-xl">
            <img src={image} alt="food" className=" rounded-lg h-80" />
          </figure>
          <div className="p-10 text-center">
            <h2 className=" font-bold text-2xl py-2">{name}</h2>
            <p className=" font-medium text-gray-400">{description}</p>
            <p className=" text-left py-5">
              <span className=" font-semibold text-lg">Ingredients:</span>
              <ul className=" text-left list-disc ml-8">
                {ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
            <p className="text-left">
              <span className=" font-semibold text-lg">Cooking Method:</span>
              <ul className=" list-decimal ml-8">
                {cooking_method.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
        <div className="card-actions justify-between mb-5 mx-10">
          <div className="flex mt-1">
            <Rating
              style={{ maxWidth: 120 }}
              value={Math.round(rating || 0)}
              readOnly
            />
            <span className="ms-2 mt-1"> {rating}</span>
          </div>
        <div>
           <button disabled={disable} onClick={hendelClicks} className={disable ? 'p-3 bg-gray-600 rounded-lg text-white font-semibold' : 'p-3 bg-orange-500 rounded-lg text-white font-semibold'}>
            Add to favorite
          </button>
          <ToastContainer /> 
        </div>   

        </div>
      </div>
    </div>
  );
};

export default RecipesCards;
