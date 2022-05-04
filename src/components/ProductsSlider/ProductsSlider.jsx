import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProductCard from "./../ProductCard/ProductCard";
import useWindowDimensions from "./../../hooks/useWindowsDimentions";

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

const ProductsSlider = ({ products }) => {
  const { width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      width < 640
        ? 1
        : width < 768
        ? 2
        : width < 1024
        ? 2
        : width < 1280
        ? 2
        : 4,
    slidesToScroll: 1,
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

      {/* <div>
        width: {width} ~ height: {height}
      </div> */}
    </div>
  );
};

export default ProductsSlider;
