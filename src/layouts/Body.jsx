import React, { useContext, useReducer } from "react";

const Body = ({ children }) => {
  return (
    <main className="flex flex-col self-center mt-20 max-w-full w-[1200px] max-md:mt-10">
      {children}
    </main>
  );
};

export default Body;
