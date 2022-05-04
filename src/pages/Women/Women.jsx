import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { useStateContext } from "../../context/StateContext";

const Women = () => {
  const [womenClothingProducts, setWomenClothingProducts] = useState([]);
  const { allProducts } = useStateContext();

  useEffect(() => {
    const womenCategory = allProducts?.filter(
      (product) => product.category === "women's clothing"
    );
    setWomenClothingProducts(womenCategory);
  }, [allProducts]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-[80px]">
        <h2 className="text-2xl font-bold text-zinc-600 m-10">
          Women's Clothing
        </h2>
      </div>
      <div className="w-full flex flex-wrap  gap-3 justify-center">
        {womenClothingProducts?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Women;
