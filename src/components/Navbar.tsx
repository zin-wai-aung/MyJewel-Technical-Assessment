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

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header>
      {/* Top bar */}
      <div className="border border-b  border-[rgba(0,0,0,0.1)] h-[35px]">
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
              className=" cursor-pointer hover:text-black hover:scale-110 transition-all duration-300"
            />
            <Image
              src="/icons/heart.svg"
              alt="Heart"
              width={15}
              height={15}
              className=" cursor-pointer hover:text-black hover:scale-110 transition-all duration-300"
            />
            <Image
              src="/icons/shopping-bag.svg"
              alt="Bag"
              width={14}
              height={15}
              className=" cursor-pointer hover:text-black hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Logo & Nav */}
      <div className="border border-b  border-[rgba(0,0,0,0.1)] h-[80px] flex justify-center items-center">
        <div className="flex items-center justify-between w-full h-full">
          <div className=" w-[18%] flex justify-center items-center h-full">
            <Image src="/logo.png" alt="Logo" width={133.44} height={34.99} />
          </div>

          <div className=" w-[75%] flex justify-center items-center h-full border border-x border-y-transparent  border-[rgba(0,0,0,0.1)]">
            <nav className="hidden md:flex gap-x-14 uppercase text-[13px] tracking-[0.08em]">
              {navItems.map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative cursor-pointer transition-all duration-150 hover:text-black flex items-center gap-x-3"
                >
                  {item}
                  {["Jewelry", "Love and Engagement", "Gifts"].includes(
                    item
                  ) && (
                    <Image
                      src="/icons/chevrondown.svg"
                      alt="Chevron Down"
                      width={13}
                      height={13}
                    />
                  )}
                  {/* {hovered === item && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border shadow-md p-4 z-10">
                      <p className="text-xs text-gray-500">
                        Dropdown for {item}
                      </p>
                    </div>
                  )} */}
                </div>
              ))}
            </nav>
          </div>

          <div className=" w-[7%] flex justify-center items-center h-full">
            <Image
              src="/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="cursor-pointer hover:text-black hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
