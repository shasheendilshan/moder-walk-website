import React, { useState, useEffect } from "react";
import { ProductsSlider } from "../../components";
import { useStateContext } from "../../context/StateContext";

const FlashSales = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const { allProducts } = useStateContext();

  useEffect(() => {
    const flashSale = allProducts?.filter(
      (product) => product.category === "men's clothing"
    );
    setFlashSaleProducts(flashSale);
  }, [allProducts]);

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-zinc-600 mt-10">Flash Sale !</h2>
      </div>
      <div className=" md:flex md:flex-col md:justify-center md:items-center">
        <ProductsSlider products={flashSaleProducts} />
      </div>
    </div>
  );
};

export default FlashSales;
