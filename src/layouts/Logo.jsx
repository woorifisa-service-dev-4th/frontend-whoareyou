import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-1 gap-1.5 text-3xl font-bold text-sky-600">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd22706289f3175776c482fcf29cfe317a5ff9562349439f62e5c661e4cdc41?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
        className="object-contain shrink-0 w-12 aspect-square"
        alt="Woori FISA Logo"
      />
      <div className="my-auto basis-auto">Woori FISA</div>
    </div>
  );
};

export default Logo;
