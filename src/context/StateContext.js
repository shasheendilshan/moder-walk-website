import React, { createContext, useContext, useState, useEffect } from "react";
import { getAllProducts } from "./../api/index";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await getAllProducts();
      setAllProducts(allProducts);
    };

    fetchData();
  }, [setAllProducts]);

  return (
    <Context.Provider
      value={{
        allProducts,
        setAllProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
