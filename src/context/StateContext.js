import React, { createContext, useContext, useState, useEffect } from "react";
import { getAllProducts } from "./../api/index";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const allProducts = await getAllProducts();
      setAllProducts(allProducts.data);
      setLoading(false);
      console.log(allProducts.data);
    };

    fetchData();
  }, [setAllProducts]);

  return (
    <Context.Provider
      value={{
        allProducts,
        setAllProducts,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
