import React from "react";
import { ProductCard } from "../../components";
import { BallBeat } from "react-pure-loaders";

const Category = ({ title, products, loading }) => {
  return (
    <div className="flex flex-col container mx-auto mt-[50px]">
      <div className="mt-[10px]">
        <h2 className="text-2xl font-bold text-zinc-600 m-10">{title}</h2>
      </div>
      <div className="flex justify-center">
        <BallBeat
          color={title === "Men's Clothing" ? "#2BD9AF" : "#FF5E84"}
          loading={loading}
        />
      </div>
      <div className="w-full flex flex-wrap  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3 justify-center">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
