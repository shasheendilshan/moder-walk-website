import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-zinc-600 my-10">Categories</h2>
      </div>
      <div className="h-64 flex flex-col md:flex-row gap-2 px-10 pb-10">
        <Link
          to="/mens-clothing"
          className="h-24 md:h-48  md:w-1/2 bg-green-500 rounded-3xl flex justify-center items-center cursor-pointer"
        >
          <h1 className="text-2xl md:text-3xl text-white font-bold">
            Men's Clothing
          </h1>
        </Link>

        <Link
          to="womens-clothing"
          className="h-24 md:h-48  md:w-1/2 bg-pink-500 rounded-3xl flex justify-center items-center cursor-pointer"
        >
          <h1 className="text-2xl md:text-3xl text-white  font-bold">
            Women's Clothing
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
