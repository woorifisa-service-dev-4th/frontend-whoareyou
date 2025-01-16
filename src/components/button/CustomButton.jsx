import React from "react";

const CustomButton = ({children, bgColor}) => {
  return (
    <button className={`overflow-hidden gap-2.5 self-stretch px-7 py-3.5 rounded-xl ${bgColor}-100 min-h-[48px] max-md:px-5`}>
      {children}
    </button>
  );
};

export default CustomButton;
