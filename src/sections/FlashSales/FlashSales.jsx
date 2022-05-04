import React, { useState, useEffect } from "react";
import { ProductsSlider } from "../../components";
import { useStateContext } from "../../context/StateContext";
import { BallBeat } from "react-pure-loaders";

const FlashSales = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const { allProducts, loading } = useStateContext();

  useEffect(() => {
    const flashSale = allProducts?.filter(
      (product) =>
        product.category === "men's clothing" ||
        product.category === "women's clothing"
    );

    setFlashSaleProducts(flashSale);
  }, [allProducts]);

  return (
    <div className="container mx-auto mt-[100px] px-2">
      <div>
        <h2 className="text-2xl font-bold text-zinc-600 mt-10">Flash Sale !</h2>
      </div>
      <div className="flex justify-center">
        <BallBeat color={"#2BD9AF"} loading={loading} />
      </div>
      <div className=" container mx-auto min-h-[480px]">
        <ProductsSlider products={flashSaleProducts} />
      </div>
    </div>
  );
};

export default FlashSales;
