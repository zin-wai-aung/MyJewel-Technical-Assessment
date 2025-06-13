"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import { useState } from "react";

const messages = [
  "Absolutely breathtaking! The craftsmanship is perfect.",
  "From the moment I ordered, I felt like royalty.",
  "Every detail, from sparkle to packaging, was flawless.",
  "Exceptional quality and customer support!",
  "Top-notch service, fast delivery, stunning product.",
  "The best diamond-buying experience I've ever had!",
  "Elegance and brilliance — exactly what I hoped for.",
  "Can't stop looking at my new jewelry piece!",
];

export default function TestimonialSlider() {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 26,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  if (error) return <p>Failed to load testimonials</p>;
     if (!data) return (
       <div className=" min-h-96 flex justify-center items-center">
         <div className="spinner"></div>
         <p className="ml-3 text-lg">Loading...</p>{" "}
       </div>
     );
  
     const users = data.users.slice(0, 8);
     const totalSlides = users.length;

  return (
    <div className="relative w-full">
      <div ref={sliderRef} className="keen-slider">
        {users.map((user: any, idx: number) => (
          <div key={user.id} className="keen-slider__slide">
            <TestimonialCard
              image={user.image}
              name={`${user.firstName} ${user.lastName}`}
              position={user.company?.title || "Customer"}
              message={messages[idx % messages.length]}
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute w-[45px] h-[45px] flex justify-center items-center top-1/2 -left-5 transform -translate-y-1/2 bg-white border  border-[rgba(0,0,0,0.15)] rounded-full hover:border-black cursor-pointer"
      >
        <Image
          src="/icons/left-arrow.svg"
          alt="Left Arrow"
          width={10}
          height={10}
        />
        {/* &#8592; */}
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute w-[45px] h-[45px] flex justify-center items-center top-1/2 -right-5 transform -translate-y-1/2 bg-white border  border-[rgba(0,0,0,0.15)] rounded-full p-2 hover:border-black cursor-pointer"
      >
        <Image
          src="/icons/right-arrow.svg"
          alt="Right Arrow"
          width={10}
          height={10}
        />

        {/* &#8594; */}
      </button>

      {/* Pagination Dots */}
      {loaded && (
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(3)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-[8px] h-[8px] rounded-full cursor-pointer ${
                currentSlide === idx ? "bg-[#7A7A7A]" : "bg-[#E4E4E4]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
