import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center bg-[#F0F0F0] border-b border-[rgba(0,0,0,0.05)]">
      <div className="w-[1440px] h-[420px] relative flex items-center justify-between px-8">
        {/* Left Image */}
        <Image
          src="/images/diamonds.png"
          alt="Diamonds"
          width={530}
          height={380}
          className=" z-10 mt-20 -ml-8"
        />
        {/* Left Arrow Line */}
        <Image
          src="/images/line-left.png"
          alt="Left Lines"
          width={500}
          height={420}
          className=" absolute left-3"
        />

        {/* Center Text */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center tracking-[0.01em] text-center">
          <h1 className="text-[48px] mb-[30px]">
            Custom Jewelry
          </h1>
          <p>
            {" "}
            Create Your Masterpiece: Bespoke Jewelry Crafted for You
          </p>
        </div>

        {/* Top Image */}
        <Image
          src="/images/diamond.png"
          alt="Diamond"
          width={260}
          height={300}
          className=" z-10 absolute top-0 right-0"
        />

        {/* Right Image */}
        <Image
          src="/images/ring.png"
          alt="Ring"
          width={540}
          height={540}
          className=" z-10 absolute bottom-0 right-10"
        />

        {/* Right Arrow Line */}
        <Image
          src="/images/line-right.png"
          alt="Right Lines"
          width={500}
          height={420}
          className=" absolute right-3"
        />
      </div>
    </section>
  );
};

export default HeroSection;
