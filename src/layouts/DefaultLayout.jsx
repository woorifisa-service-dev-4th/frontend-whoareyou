import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">{children}</div>
  );
};

export default DefaultLayout;
