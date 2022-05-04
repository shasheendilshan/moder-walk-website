import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleMobileNav = () => setShow(!show);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg">
      <div className="px-10 flex justify-between h-full items-center ">
        <div className="md:hidden" onClick={handleMobileNav}>
          {!show ? <GiHamburgerMenu size={25} /> : <GrFormClose size={25} />}
        </div>
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-700">
              MODERN WALK
            </h1>
          </Link>
          <ul className="hidden  md:flex ml-40 ">
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
          </ul>
        </div>
        <div>
          <AiOutlineShopping size={25} />
        </div>
      </div>
      {show && (
        <ul className=" absolute bg-zinc-200 w-full px-8">
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">Men</li>
          <li className="border-b-2 border-zinc-300 w-full">Women</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
