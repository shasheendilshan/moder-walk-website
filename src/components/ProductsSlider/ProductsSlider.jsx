import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProductCard from "./../ProductCard/ProductCard";
import useWindowSize from "./../../hooks/useWindowSize";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[180px] right-2 md:right-[-20px] w-[50px] h-[50px] rounded-full bg-[#FF5E84]/30 flex items-center justify-center "
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
      className="absolute z-10 top-[180px] left-2 md:left-[-20px] w-[50px] h-[50px] rounded-full bg-[#FF5E84]/30 flex items-center justify-center "
      onClick={onClick}
    >
      <button className="prev">
        <AiOutlineLeft size={25} />
      </button>
    </div>
  );
};

const ProductsSlider = ({ products }) => {
  const size = useWindowSize();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:
      size.width < 640
        ? 1
        : size.width < 768
        ? 2
        : size.width < 1024
        ? 2
        : size.width < 1280
        ? 3
        : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className=" py-8  container">
      <Slider {...settings}>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </Slider>
    </div>
  );
};

export default ProductsSlider;
