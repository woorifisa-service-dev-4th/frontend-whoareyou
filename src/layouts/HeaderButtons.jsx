import React from "react";

const HeaderButtons = ({ children }) => {
  return (
    <div className="flex justify-end flex-1 gap-2.5 items-start text-base whitespace-nowrap text-zinc-800">
      {children}
    </div>
  );
};

export default HeaderButtons;
