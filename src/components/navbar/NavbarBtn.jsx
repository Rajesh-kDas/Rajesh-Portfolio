import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/Resume11.pdf'; // Update the filename if your CV has a different name
    link.download = 'Resume11.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
      className="px-4 py-2 rounded-full text-xl fobt-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow"
      onClick={handleDownload}
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
}

export default NavbarBtn