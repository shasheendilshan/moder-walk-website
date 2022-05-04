import React, { useEffect } from "react";
import { Categories, FlashSales } from "../../sections";
import axios from "axios";
import { useStateContext } from "../../context/StateContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {
  const { allProducts, setAllProducts } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      const sampleData = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(sampleData.data);
      return sampleData;
    };
    fetchData();
  }, [setAllProducts]);

  console.log(allProducts);

  return (
    <div>
      <FlashSales />
      <Categories />
    </div>
  );
};

export default Home;

{
  /* <div className="flex flex-col min-h-screen ">

<div className="mt-[80px] h-[400px] overflow-y-hidden">


</div>

<div>
  <Categories />
</div>
</div> */
}
