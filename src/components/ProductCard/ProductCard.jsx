import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="h-full w-72 bg-white flex flex-col mx-auto items-center rounded-lg drop-shadow-2xl pt-2 cursor-pointer scale-90 hover:scale-100 transition duration-300 ease-linear">
      <div className="w-full p-2 h-24 overflow-hidden">
        <h3 className="text-lg font-semibold text-center">
          {product.title.substring(0, 100)}
        </h3>
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
          product.category !== "men's clothing"
            ? "bg-[#FF5E84]"
            : "bg-[#2BD9AF]"
        }  rounded-lg p-3 flex flex-col items-center overflow-auto`}
      >
        <h3 className="text-xl font-bold text-blue-900 mb-2">
          RS {product.price}
        </h3>

        <p className=" text-xs md:text-sm text-center text-zinc-900">
          {/* {product.description.split(" ").filter((n) => n !== "").length} */}
          {product.description.substring(0, 100) + "......"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
