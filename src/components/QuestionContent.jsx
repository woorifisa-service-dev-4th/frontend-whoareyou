import React, { useReducer } from "react";
import QuestionCard from "./QuestionCard";
import { useQnAContext } from "../contexts/QnAContexts";
import { classData } from "../constants/class";
import { categoryData } from "../constants/category";

const QuestionContent = () => {
  const state = useQnAContext();

  // 먼저 데이터 정렬 (최신순, 오래된순, 좋아요순)
  const sortData = (state, selectedSort) => {
    if (selectedSort === "최신순")
      return state.postData.sort(
        (a, b) => b.body.createdAt.getTime() - a.body.createdAt.getTime()
      );

    if (selectedSort === "오랜된순")
      return state.postData.sort(
        (a, b) => a.body.createdAt.getTime() - b.body.createdAt.getTime()
      );

    return state.postData.sort((a, b) => b.body.like - a.body.like);
  };
  const sortedData = sortData(state, state.selectedSort);

  // filtering logic
  const filterCategory = (aaa, selectedCategory, selectedSection) => {
    return selectFunc(aaa, selectedCategory, selectedSection);
  };
  const selectFunc = (aaa, selectedCategory, selectedSection) => {
    if (selectedCategory === "ALL" && selectedSection === "ALL") return aaa;
    if (selectedCategory === "ALL" && selectedSection !== "ALL")
      return aaa.filter((a) => a.body.classNum === classData[selectedSection]);
    if (selectedCategory !== "ALL" && selectedSection === "ALL")
      return aaa.filter(
        (a) => a.body.category === categoryData[selectedCategory]
      );
    return aaa.filter(
      (a) =>
        a.body.category === categoryData[selectedCategory] &&
        a.body.classNum === classData[selectedSection]
    );
  };

  // 최종 정렬,필터링 된 데이터
  const proxyPostData = filterCategory(
    sortedData,
    state.selectedCategory,
    state.selectedSection
  );

  return (
    <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
      {proxyPostData.map((postData) => (
        <QuestionCard key={postData.id} bodyData={postData} />
      ))}
    </div>
  );
};

export default QuestionContent;
