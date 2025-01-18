import React, { useState } from "react";
import { categoryData } from "../../constants/category";

const CategoryFilter = ({ onChange }) => {
  return (
    <div className="flex flex-col">
      <div>카테고리</div>
      <select
        className="p-2 bg-gray-100 text-gray-800 rounded"
        onChange={(event) => onChange(parseInt(event.target.value))}
      >
        <option value="0">{categoryData[0]}</option>
        <option value="1">{categoryData[1]}</option>
        <option value="2">{categoryData[2]}</option>
        <option value="3">{categoryData[3]}</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
