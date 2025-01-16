import React from "react";

const CategoryButton = () => {
  return (
    // <div className="flex gap-3.5 items-center text-sky-600 bg-white">
    //   <div className="self-stretch my-auto">카테고리</div>
    //   <img
    //     loading="lazy"
    //     src="https://cdn.builder.io/api/v1/image/assets/TEMP/a340849a508c58971ecb7c3b6583a47b0502e3eb9b0cda67a6f8580cbb202c38?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
    //     className="object-contain shrink-0 self-stretch my-auto aspect-[1.67] w-[25px]"
    //     alt=""
    //   />
    // </div>
    <select
      //   onChange={changeHandler}
      //   value={category}
      className="flex gap-3.5 items-center text-sky-600 bg-white"
      //   data-cy="todo-filter"
    >
      <option value="ALL">카테고리</option>
      <option value="TODO"> To do</option>
      <option value="PROGRESS">On progress</option>
      <option value="DONE"> Done</option>
    </select>
  );
};

export default CategoryButton;
