// app/components/ExploreMore.tsx
import Image from "next/image";
import React from "react";

const ExploreMore = () => {
  const guides = [
    {
      title: "How to Select the Ideal Wedding Band",
    },
    {
      title: "Lab Grown Diamond Guide",
    },
    {
      title: "How to Choose the Engagement Ring",
    },
    {
      title: "Ring Size Guide",
    },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Text and Guides */}
        <div className="w-full md:w-[55%] pr-0 md:pr-[20px] mb-10 md:mb-0 pl-[80px]">
          {/* Main heading */}
          <h1 className="text-[32px] mb-[15px]">

            Explore More
          </h1>
          {/* Description */}
          <p className="text-[14px] text-[#7A7A7A] mb-[30px] w-[430px]">
            Looking for more diamond guides, buying tips or details about the
            4Cs? Explore more of our diamond education pages.
          </p>

          {/* Guides List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10">
            {guides.map((guide, index) => (
              <div key={index} className="flex items-center group cursor-pointer">
                <a
                  className="text-[14px] text-[#434343] hover:underline flex-grow mr-[30px]"
                >
                  {guide.title}
                </a>
                <div
                  className="flex items-center justify-center w-[50px] h-[50px] rounded-full border border-[#D1D1D1] group-hover:bg-[#F0F0F0] transition-all duration-200"
                      >
                           <Image src="/icons/explore.svg" alt="Explore" width={20} height={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Large Image */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
          <img
            src="/images/explore.jpg" 
            alt="Woman wearing jewelry"
            width={600}
            height={420} 
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
