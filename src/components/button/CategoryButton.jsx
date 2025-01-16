import React from "react";
import { useQnAContext, useQnADispatch } from "../../contexts/QnAContexts";

const CategoryButton = () => {
  const ddd = useQnAContext();
  console.log(ddd.selectedCategory);
  console.log(ddd.selectedSection);
  const dispatch = useQnADispatch();
  const filterTodos = (event) => {
    dispatch({
      type: "FILTER",
      selectedCategory: event.target.value,
      selectedSection: ddd.selectedSection,
    });
  };

  return (
    <select
      onChange={filterTodos}
      className="flex gap-3.5 items-center text-sky-600 bg-white"
      //   data-cy="todo-filter"
    >
      <option value="ALL">카테고리</option>
      <option value="0"> 프로젝트 개발</option>
      <option value="1"> 이론</option>
      <option value="2">알고리즘</option>
      <option value="3"> 기타</option>
    </select>
  );
};

export default CategoryButton;
