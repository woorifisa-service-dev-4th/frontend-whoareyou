import React from "react";

const BodyButtons = ({ children }) => {
  return (
    <div>
      <nav className="flex justify-end gap-10 px-6 py-2.5 text-lg whitespace-nowrap max-md:px-5">
        {children}
      </nav>
    </div>
  );
};

export default BodyButtons;
