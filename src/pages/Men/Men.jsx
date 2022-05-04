import React, { useEffect, useState } from "react";
import { getSpecificCategory } from "../../api";
import { Category } from "../../components";

const Men = () => {
  const [mensClothingProducts, setMensClothingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //get mens clothing data using new api call
    setLoading(true);

    const getData = async () => {
      const productData = await getSpecificCategory("men's clothing");
      setMensClothingProducts(productData.data);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <Category
      title="Men's Clothing"
      products={mensClothingProducts}
      loading={loading}
    />
  );
};

export default Men;
