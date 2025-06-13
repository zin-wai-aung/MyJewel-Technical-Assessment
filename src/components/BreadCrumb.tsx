import React from "react";

const Breadcrumb = () => {
  return (
    <nav className="text-[14px] text-[#7A7A7A]" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>/</li>
        <li>
          <span className="text-[#434343]">Custom Jewelry</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
