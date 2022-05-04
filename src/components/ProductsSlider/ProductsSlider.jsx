import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Card } from "../../components";
import { Data } from "./../Data";
import ProductCard from "./../ProductCard/ProductCard";
import { useStateContext } from "../../context/StateContext";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[180px] right-2 md:right-[-20px] w-[50px] h-[50px] rounded-full bg-zinc-800/50 flex items-center justify-center "
      onClick={onClick}
    >
      <button>
        <AiOutlineRight size={25} />
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-20 top-[180px] left-2 md:left-[-20px] w-[50px] h-[50px] rounded-full bg-zinc-800/50 flex items-center justify-center "
      onClick={onClick}
    >
      <button className="prev">
        <AiOutlineLeft size={25} />
      </button>
    </div>
  );
};

const ProductsSlider = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const { allProducts } = useStateContext();
  useEffect(() => {
    const flashSale = allProducts?.filter(
      (product) =>
        product.category === "men's clothing" ||
        product.category === "women's clothing"
    );
    setFlashSaleProducts(flashSale);
  }, [allProducts]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-blue-300 py-8  container">
      <Slider {...settings}>
        {flashSaleProducts.map((product, index) => {
          return (
            <>
              {/* <Card productItems={productItems} /> */}
              <ProductCard key={index} product={product} />
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
