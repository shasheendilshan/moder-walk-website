import React, { useEffect, useState } from "react";
import { getSpecificCategory } from "../../api";
import { Category } from "../../components";

const Men = () => {
  const [mensClothingProducts, setMensClothingProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const productData = await getSpecificCategory("men's clothing");
      setMensClothingProducts(productData);
    };

    getData();
  }, []);

  return <Category title="Men's Clothing" products={mensClothingProducts} />;
};

export default Men;
