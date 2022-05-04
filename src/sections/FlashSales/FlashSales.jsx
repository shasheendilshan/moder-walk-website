import React from "react";
import { ProductsSlider } from "../../components";

const FlashSales = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-zinc-600 mt-10">Flash Sale !</h2>
      </div>
      <div className="bg-green-300  mt-[50px] md:flex md:flex-col md:justify-center md:items-center">
        <ProductsSlider />
      </div>
    </div>
  );
};

export default FlashSales;
