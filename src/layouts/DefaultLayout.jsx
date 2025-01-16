import React from "react";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex overflow-hidden flex-col bg-white">{children}</div>
    
    </>
  );
};

export default DefaultLayout;
