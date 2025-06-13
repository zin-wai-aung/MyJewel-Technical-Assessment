// app/components/CustomJewelry.tsx
import React from "react";
import Breadcrumb from "./BreadCrumb";

const CustomJewelry = () => {
  const processSteps = [
    {
      id: "01",
      title: "CONSULTATION",
      description:
        "We discuss your vision and preferences to craft a unique design.",
    },
    {
      id: "02",
      title: "SELECTING MATERIALS",
      description:
        "Choose from exquisite diamonds, precious metals, and gemstones.",
    },
    {
      id: "03",
      title: "CREATING A 3D MODEL",
      description:
        "Visualize your design with a precise 3D model before production.",
    },
    {
      id: "04",
      title: "MANUFACTURING",
      description:
        "Expert artisans bring your piece to life with precision and care.",
    },
    {
      id: "05",
      title: "QUALITY ASSURANCE",
      description:
        "Ensuring every detail meets our rigorous standards of perfection.",
    },
    {
      id: "06",
      title: "Delivery",
      description:
        "Your custom jewelry is elegantly packaged and delivered to you.",
    },
  ];

  return (
    <section className="container mx-auto pt-[20px]">
      <Breadcrumb />
      <div className=" pt-[57px] flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Text and Images */}
        <div className="w-full md:w-[45%]">
          {/* Main heading for Custom Jewelry */}
          <h1 className="text-[36px] mb-[20px]">Custom Jewelry</h1>
          <p className="w-[382px]">
            Create Your Masterpiece: Bespoke Jewelry Crafted for You
          </p>

          {/* Image container */}
          <div className="relative flex flex-col mt-[30px]">
            <img
              src="/images/custom-ring-1.jpg"
              alt="Custom Ring 1"
              width={380}
              height={474}
              className="object-cover"
            />
            <img
              src="/images/custom-ring-2.jpg"
              alt="Custom Ring 2"
              width={250}
              height={318}
              className="absolute -bottom-40 right-28 object-cover border-8 border-white"
            />
          </div>
        </div>

        {/* Description and Process Steps */}
        <div className="w-full md:w-[55%] pl-0 md:pl-10">
          <small className="text-[16px] tracking-[0.03em]">
            Exquisite design, flawless craftsmanship, and timeless elegance—your
            vision, perfectly crafted.
          </small>

          {/* Process Steps List - Rendered dynamically from the array */}
          <div className="space-y-[30px] mt-[40px]">
            {processSteps.map((step, index) => (
              <div key={index}>
                <h2 className="flex items-center">
                  <span className="text-[20px] font-normal text-[#7A7A7A] mr-[22px]">
                    {step.id}
                  </span>{" "}
                  {step.title}
                </h2>
                <p className="text-base font-dm-sans text-[#5A5A5A] leading-relaxed">
                  {step.description}
                </p>
                <hr className="border border-[#7A7A7A] opacity-15 mt-[30px] mr-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomJewelry;
