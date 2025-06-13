import Image from "next/image";

const WhyChooseMyJewel = () => {
  const features = [
    {
      iconUrl: (
       "/icons/personal.svg"
      ),
      title: "Personal Design Consultation",
      description: "Work with our designers to create your perfect piece.",
    },
    {
      iconUrl: (
      "/icons/craft.svg"
      ),
      title: "Crafted with Luxury Materials",
      description:
        "Only the finest diamonds, gemstones, and precious metals used.",
    },
    {
      iconUrl: (
        "/icons/lifetime.svg"
               ),
      title: "Lifetime Warranty",
      description:
        "Lifetime warranty on every piece, ensuring quality and lasting beauty.",
    },
  ];

  return (
    <section className="mt-32 py-24 relative">
      <div className="container mx-auto text-center">
        {/* Main section title */}
        <h1 className="text-[36px] text-[#101010] mb-[40px]">
          Why Choose MyJewel?
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-[20px] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center border border-[rgba(0,0,0,0.05)]"
            >
              {/* Feature Icon */}
              <div className="mb-[20px]">
                <Image
                  src={feature.iconUrl}
                  alt={feature.title}
                  width={36}
                  height={36}
                />
              </div>
              {/* Feature Title */}
              <h3>{feature.title}</h3>
              {/* Feature Description */}
              <p className="text-[#7A7A7A] text-[16px] w-[280px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background */}
      <Image src='/images/choose-bg.png' alt="Background" width={650} height={585} className=" absolute -z-10 right-0 bottom-0"/>
    </section>
  );
};

export default WhyChooseMyJewel;
