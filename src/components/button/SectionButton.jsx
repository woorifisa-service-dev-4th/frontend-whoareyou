import React from "react";
import { useQnAContext, useQnADispatch } from "../../contexts/QnAContexts";

const SectionButton = () => {
  const postData = useQnAContext();
  const dispatch = useQnADispatch();
  const filterTodos = (event) => {
    dispatch({
      type: "FILTER",
      selectedSection: event.target.value,
      selectedCategory: postData.selectedCategory,
    });
  };

  return (
    <select
      value={postData.selectedSection}
      onChange={filterTodos}
      className="flex gap-3.5 items-center text-sky-600 bg-white"
      //   data-cy="todo-filter"
    >
      <option value="ALL">수강반</option>
      <option value="0"> 클라우드 서비스 개발</option>
      <option value="1">클라우드 엔지니어링</option>
      <option value="2"> AI 엔지니어링</option>
    </select>
  );
};

export default SectionButton;
