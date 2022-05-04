import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleMobileNav = () => setShow(!show);
  const { pathname } = useLocation();
  console.log(pathname.slice(1));
  return (
    <div className="w-[100%] h-[80px] z-20 bg-zinc-200 drop-shadow-lg fixed top-0">
      <div className="px-10 flex justify-between h-full items-center ">
        <div className="md:hidden" onClick={handleMobileNav}>
          {!show ? <GiHamburgerMenu size={25} /> : <GrFormClose size={25} />}
        </div>
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-3xl  font-bold text-slate-700">MODERN WALK</h1>
          </Link>
          <ul className="hidden  md:flex ml-40 ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/mens-clothing">
              <li>Men</li>
            </Link>
            <Link to="/womens-clothing">
              <li>Women</li>
            </Link>
          </ul>
        </div>
        <div>
          <AiOutlineShopping size={25} />
        </div>
      </div>
      {show && (
        <ul className=" absolute z-50 bg-zinc-200 w-full px-8">
          <Link to="/" onClick={handleMobileNav}>
            <li className="border-b-2 border-zinc-300 w-full">Home</li>
          </Link>
          <Link to="/mens-clothing" onClick={handleMobileNav}>
            {" "}
            <li className="border-b-2 border-zinc-300 w-full">Men</li>
          </Link>
          <Link to="/womens-clothing" onClick={handleMobileNav}>
            {" "}
            <li className="border-b-2 border-zinc-300 w-full">Women</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
