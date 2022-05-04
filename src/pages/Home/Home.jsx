import React from "react";
import { Categories, FlashSales } from "../../sections";

const Home = () => {
  return (
    <div className="mt-[80px]">
      {/* flash Sales Section */}
      <FlashSales />

      {/* Categories Section */}
      <Categories />
    </div>
  );
};

export default Home;
