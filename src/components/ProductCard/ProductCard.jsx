import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="h-full w-72 bg-slate-200 flex flex-col items-center rounded-lg shadow-xl pt-2 scale-100 hover:scale-105 transition duration-300 ease-linear">
      <div className="p-3 h-16">
        <h3 className="text-md text-center">{product.title}</h3>
      </div>
      <div className="h-48 w-48 mb-3 flex justify-center">
        <img
          src={product.image}
          alt="product"
          className="object-contain h-48 w-48"
        />
      </div>

      <div
        className={`h-36  w-full ${
          product.category !== "men's clothing" ? "bg-pink-500" : "bg-green-500"
        }  rounded-lg p-3 flex flex-col items-center overflow-auto`}
      >
        <h3 className="text-xl font-bold text-blue-900 mb-2">
          RS :{product.price}
        </h3>

        <p className=" text-xs md:text-sm text-center">
          {/* {product.description.split(" ").filter((n) => n !== "").length} */}
          {product.description.slice(0, 100) + "......"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
