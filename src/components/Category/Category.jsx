import React from "react";
import { ProductCard } from "../../components";

const Category = ({ title, products }) => {
  return (
    <div className="flex flex-col container mx-auto">
      <div className="mt-[10px]">
        <h2 className="text-2xl font-bold text-zinc-600 m-10">{title}</h2>
      </div>
      <div className="w-full flex flex-wrap  md:grid md:grid-cols-4  gap-3 justify-center">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
