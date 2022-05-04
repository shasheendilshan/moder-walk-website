import React, { useEffect, useState } from "react";
import { getSpecificCategory } from "../../api";
import { Category } from "../../components";

const CategoryPage = ({ category, title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const productData = await getSpecificCategory(category);
      setProducts(productData.data);
      setLoading(false);
    };

    getData();
  }, [category]);

  return <Category title={title} products={products} loading={loading} />;
};

export default CategoryPage;
