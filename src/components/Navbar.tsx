"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  "Jewelry",
  "Love and Engagement",
  "Gifts",
  "Custom Jewelry",
  "About",
  "Contact Us",
];

const dropdownItems: Record<string, string[]> = {
  Jewelry: ["Necklaces", "Earrings", "Bracelets", "Rings", "Watches"],
  "Love and Engagement": ["Engagement Rings", "Wedding Bands", "Couple Sets"],
  Gifts: ["Birthday Gifts", "Anniversary Gifts", "Luxury Gifts"],
};

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header>
      {/* Top Bar */}
      <div className="border border-b border-[rgba(0,0,0,0.1)] h-[35px]">
        <div className="flex items-center justify-between py-2 tracking-[0.03em] px-[40px]">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/calendar.svg"
              alt="Calendar"
              width={16}
              height={16}
            />
            <span className="uppercase text-[10px]">Book an Appointment</span>
          </div>
          <div className="text-center text-[11px]">
            • Exclusive Collection Launch: Discover Timeless Elegance Today •
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/icons/user.svg"
              alt="User"
              width={15}
              height={15}
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            />
            <Image
              src="/icons/heart.svg"
              alt="Heart"
              width={15}
              height={15}
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            />
            <div className="relative">
              <Image
                src="/icons/shopping-bag.svg"
                alt="Bag"
                width={14}
                height={13}
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              />
              <span className="absolute -top-2 -right-2 bg-[#434343] text-white text-[10px] p-2 w-3 h-3 flex justify-center items-center rounded-full font-medium shadow">
                1
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo & Main Nav */}
      <div className="border border-b border-[rgba(0,0,0,0.1)] h-[80px] flex justify-center items-center">
        <div className="flex items-center justify-between w-full h-full px-[40px]">
          {/* Logo */}
          <div className="w-[18%] flex justify-center items-center h-full">
            <Image src="/logo.png" alt="Logo" width={133.44} height={34.99} />
          </div>

          {/* Nav Menu */}
          <div className="w-[75%] flex justify-center items-center h-full border border-x border-y-transparent border-[rgba(0,0,0,0.1)]">
            <nav className="hidden md:flex gap-x-14 uppercase text-[13px] tracking-[0.08em] relative">
              {navItems.map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative cursor-pointer transition-all duration-150 hover:text-black flex items-center gap-x-2"
                >
                  <span>{item}</span>
                  {dropdownItems[item] && (
                    <Image
                      src="/icons/chevrondown.svg"
                      alt="Chevron Down"
                      width={13}
                      height={13}
                    />
                  )}

                  {/* Dropdown Panel */}
                  {hovered === item && dropdownItems[item] && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-3 px-5 z-20 w-52">
                      <ul className="space-y-2 text-[13px] text-gray-700">
                        {dropdownItems[item].map((subItem) => (
                          <li
                            key={subItem}
                            className="hover:text-black transition-colors duration-200"
                          >
                            <a href="#">{subItem}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Search */}
          <div className="w-[7%] flex justify-center items-center h-full">
            <Image
              src="/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
