import React from "react";

const CustomButton = ({ children, bgColor, onClick }) => {
  return (
    <button
      className={`overflow-hidden gap-2.5 self-stretch px-7 py-3.5 rounded-xl ${bgColor}-100 min-h-[48px] max-md:px-5`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
