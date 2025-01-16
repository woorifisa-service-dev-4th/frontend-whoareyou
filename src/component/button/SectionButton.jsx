import React from "react";

const SectionButton = () => {
  return (
    <select
      //   onChange={changeHandler}
      //   value={category}
      className="flex gap-3.5 items-center text-sky-600 bg-white"
      //   data-cy="todo-filter"
    >
      <option value="ALL">수강반</option>
      <option value="TODO"> To do</option>
      <option value="PROGRESS">On progress</option>
      <option value="DONE"> Done</option>
    </select>
  );
};

export default SectionButton;
