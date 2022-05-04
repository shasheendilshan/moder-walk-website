import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

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
