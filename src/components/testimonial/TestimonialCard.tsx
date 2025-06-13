import Image from "next/image";

// components/TestimonialCard.tsx
type Props = {
  image: string;
  name: string;
  position: string;
  message: string;
};

export default function TestimonialCard({
  image,
  name,
  position,
  message,
}: Props) {
  return (
    <div className="px-[25px] py-[46px] h-[326px] border border-[rgba(0,0,0,0.15)] text-center bg-white flex flex-col items-center">
      
            <Image src={image} alt={name} width={120} height={120} />
      <div className=" mt-[17px]">
        <h4 className="text-[14px] font-bold">{name}</h4>
        <p className=" mt-[5px] text-[12px] text-[#505050]">{position}</p>
        <p className="mt-[16.8px] text-[14px]">"{message}"</p>
      </div>
    </div>
  );
}
