import React, { useState, useEffect } from "react";
import { ProductsSlider } from "../../components";
import { useStateContext } from "../../context/StateContext";
import { BallBeat } from "react-pure-loaders";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

  if (loading) {
    return (
      <>
        <div className="container mx-auto h-[400px] flex justify-center">
          <div className=" w-72 scale-90 rounded-sm bg-slate-200">
            <Skeleton className="rounded-sm h-full" />
          </div>
          <div className=" w-72 scale-90 rounded-sm bg-slate-200">
            <Skeleton className="rounded-sm h-full" />
          </div>
          <div className=" w-72 scale-90 rounded-sm bg-slate-200">
            <Skeleton className="rounded-sm h-full" />
          </div>
          <div className=" w-72 scale-90 rounded-sm bg-slate-200">
            <Skeleton className="rounded-sm h-full" />
          </div>
        </div>
        <div className="container mx-auto flex justify-center">
          <BallBeat color={"#2BD9AF"} loading={loading} />
        </div>
      </>
    );
  } else {
    return (
      <div className="container mx-auto mt-[100px] px-2">
        <div>
          <h2 className="text-2xl font-bold text-zinc-600 mt-10">
            Flash Sale !
          </h2>
        </div>
        <div className=" container mx-auto min-h-[480px]">
          <ProductsSlider products={flashSaleProducts} />
        </div>
      </div>
    );
  }
};

export default FlashSales;
