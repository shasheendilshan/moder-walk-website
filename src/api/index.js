import axios from "axios";

export const getAllProducts = async () => {
  try {
    const allProducts = await axios.get("https://fakestoreapi.com/products");
    return allProducts?.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const getSpecificCategory = async (category) => {
  try {
    const allProducts = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return allProducts?.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
