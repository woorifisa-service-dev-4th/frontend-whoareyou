import React from "react";

const Header = ({ children }) => {
  return (
    <header className="flex overflow-hidden flex-col justify-center items-center px-16 py-4 w-full leading-snug text-center bg-white border-b border-solid border-b-zinc-400 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 max-w-full w-[1300px]">
        {children}
      </div>
    </header>
  );
};

export default Header;
