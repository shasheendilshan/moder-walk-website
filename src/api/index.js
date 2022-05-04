import axios from "axios";

export const getAllProducts = async () => {
  try {
    const allProducts = await axios.get(
      "https://fakestoreapi.com/products?limit=18"
    );
    return { data: allProducts.data, error: 0 };
  } catch (error) {
    console.log(error.response);
    return { data: [], error: error.response };
  }
};

export const getSpecificCategory = async (category) => {
  try {
    const allProducts = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return { data: allProducts.data, error: 0 };
  } catch (error) {
    console.log(error.response);
    return { data: [], error: error.response };
  }
};
