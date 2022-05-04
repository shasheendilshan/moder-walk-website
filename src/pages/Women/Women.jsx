import React, { useEffect, useState } from "react";
import { getSpecificCategory } from "../../api";
import { Category } from "../../components";

const Women = () => {
  const [womenClothingProducts, setWomenClothingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //get women clothing data using new api call
    setLoading(true);
    const getData = async () => {
      const productData = await getSpecificCategory("women's clothing");
      setWomenClothingProducts(productData.data);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <Category
      title=" Women's Clothing"
      products={womenClothingProducts}
      loading={loading}
    />
  );
};

export default Women;
