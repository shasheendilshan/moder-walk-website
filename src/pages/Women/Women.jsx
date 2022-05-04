import React, { useEffect, useState } from "react";
import { Category } from "../../components";
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
    <Category title=" Women's Clothing" products={womenClothingProducts} />
  );
};

export default Women;
