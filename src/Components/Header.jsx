import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiEllipsisVertical, // ✅ Replaces HiDotsVertical (works in hi2)
  HiPlus,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-4 bg-black text-white shadow-lg relative">
      {/* ===== Left Section (Logo + Menu) ===== */}
      <div className="flex items-center gap-6 md:gap-10">
        {/* Logo */}
        <img
          src={logo}
          alt="App Logo"
          className="w-[90px] md:w-[130px] object-contain"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </nav>

        {/* ===== Mobile Menu ===== */}
        <div className="flex md:hidden items-center gap-4">
          {/* First 3 icons visible */}
          {menuItems.slice(0, 3).map((item, index) => (
            <HeaderItem key={index} name="" Icon={item.icon} />
          ))}

          {/* Dropdown Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative focus:outline-none"
          >
            <HeaderItem name="" Icon={HiEllipsisVertical} />

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-44 bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-md p-3 z-20 animate-fadeIn">
                {menuItems.slice(3).map((item, index) => (
                  <HeaderItem key={index} name={item.name} Icon={item.icon} />
                ))}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* ===== Right Section (Avatar) ===== */}
      <div>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-600 hover:border-white transition duration-300"
        />
      </div>
    </header>
  );
};

export default Header;
