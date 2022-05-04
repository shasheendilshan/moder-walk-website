import React from "react";
import "./Card.css";

const Card = ({ productItems }) => {
  return (
    <div className="bg-white w-[300px] p-[20px] h-[350px] relative rounded-lg m-2 mt-[10px] mx-auto">
      <h3>{productItems.name}</h3>
      <div className="w-[150px] h-[150px] mt-[10px] object-contain ">
        <img src={productItems.cover} alt="" />
      </div>
      <div className="w-full bg-green-700 h-[140px]">
        <div className="price">
          <h4>${productItems.price}.00 </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
