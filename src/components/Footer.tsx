"use client"
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";


const footerLinks = [
  {
    title: "CONTACT US",
    links: [
      "Book Appointment",
      "Visit Our Stores",
      "Email Us",
      "Contact Us",
      "Schedule a consultation",
    ],
  },
  {
    title: "THE ART OF GIFTING",
    links: [
      "Luxury Gift Wrapping",
      "Gift Cards",
      "Private & White-Glove Delivery",
    ],
  },
  {
    title: "BESPOKE & SERVICES",
    links: [
      "Custom Jewelry Design",
      "Private Jewelry Consultations",
      "Jewelry Restoration & Care",
    ],
  },
];

const paymentIcons = [
  "/icons/visa.svg",
  "/icons/master.svg",
  "/icons/amex.svg",
  "/icons/applepay.svg",
  "/icons/teddy.svg",
];

export default function Footer() {
     const [email, setEmail] = useState("");

     const validateEmail = (email: string) => {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     };

     const handleSubscribe = () => {
       if (!validateEmail(email)) {
         toast.error("Invalid email address. Please try again.");
         return;
       }

       toast.success(
         `Subscribed successfully! Email sent to ${
           process.env.NEXT_PUBLIC_EMAIL_ADDRESS
         }`
       );
       console.log(
         `Subscribed email: ${email} sent to ${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`
       );
       setEmail("");
     };

  return (
    <footer className=" pt-14 pb-6 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Link Sections */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className=" text-[16px] font-medium mb-[9px]">
              {section.title}
            </h4>
            <ul className="space-y-[10px] text-[14px]">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscription */}
        <div>
          <h4 className="font-semibold mb-4">Let’s Keep In Touch</h4>
          <div className="flex mb-[10px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-[#EBE7E4] hover:border-[#A4A4A4] duration-300 transition-all text-sm outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#0D4269] p-4 group cursor-pointer duration-300 transition-all"
            >
              <Image
                src="/icons/send.svg"
                alt="Send"
                width={18}
                height={18}
                className="group-hover:scale-125"
              />
            </button>
          </div>

          <h4 className="font-semibold mb-3">Payment Methods</h4>
          <div className="flex space-x-3">
            {paymentIcons.map((icon, i) => (
              <button
                key={i}
                //  className="border-2 border-[#EBE7E4] w-[52px] h-[35px] rounded bg-white px-2 py-1"
              >
                <Image
                  src={icon}
                  alt="Payment Icon"
                  width={50}
                  height={20}
                  className=" text-black"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 mt-[60px] pt-[20px] flex flex-col lg:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <p>© 2025, All Rights Reserved – MyJewel</p>
        <div className="flex space-x-[30px] text-[12px]">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Site Map</a>
          <Image src="/icons/facebook.svg" alt="FB" width={18} height={18} />
          <Image src="/icons/instagram.svg" alt="IG" width={22} height={18} />
        </div>
      </div>
    </footer>
  );
}
