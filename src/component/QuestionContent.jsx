import React from "react";
import QuestionCard from "./QuestionCard";
import { postDummyData2, useQnAContext } from "../contexts/QnAContexts";
import { categoryData } from "../constants/category";
import { classData } from "../constants/class";
// Reducer, Context 사용해야함 변경 요망
// const postDummyData = [
//   {
//     id: 0,
//     body: {
//       title: "Test Data 0",
//       content: "This is the first test data",
//       like: 2,
//       createdAt: new Date(),
//       classNum: classData[0],
//       category: categoryData[0],
//     },
//     status: DataStatus[0],
//   },
//   {
//     id: 1,
//     body: {
//       title: "Test Data 1",
//       content: "This is the second test data",
//       like: 2,
//       createdAt: new Date(),
//       classNum: classData[1],
//       category: categoryData[1],
//     },
//     status: DataStatus[0],
//   },
// ];

const QuestionContent = () => {
  const state = useQnAContext();
  console.log(state);

  // const postData = state.postData;    실제로 이거 넣으면됌됌

  // 먼저 데이터 정렬
  const sortData = (state, selectedSort) => {
    if (selectedSort === "최신순")
      return state.postData.sort(
        (a, b) => a.body.createdAt.getTime() - b.body.createdAt.getTime()
      );

    if (selectedSort === "오랜된순")
      return state.postData.sort(
        (a, b) => b.body.createdAt.getTime() - a.body.createdAt.getTime()
      );

    return state.postData.sort((a, b) => b.body.like - a.body.like);
  };
  sortData(state, state.selectedSort);

  // filtering logic
  const filterCategory = (aaa, selectedCategory, selectedSection) => {
    return selectFunc(aaa, selectedCategory, selectedSection);
  };
  const selectFunc = (aaa, selectedCategory, selectedSection) => {
    if (selectedCategory === "ALL" && selectedSection === "ALL")
      return aaa.postData;
    if (selectedCategory === "ALL" && selectedSection !== "ALL")
      return aaa.postData.filter(
        (a) => a.body.classNum === classData[selectedSection]
      );
    if (selectedCategory !== "ALL" && selectedSection === "ALL")
      return aaa.postData.filter(
        (a) => a.body.category === categoryData[selectedCategory]
      );
    return aaa.postData.filter(
      (a) =>
        a.body.category === categoryData[selectedCategory] &&
        a.body.classNum === classData[selectedSection]
    );
  };

  // 최종 filtering   지금은 이거 넣음음
  const proxyPostData = filterCategory(
    state,
    state.selectedSection,
    state.selectedCategory
  );

  // const two = filterSection(one, )

  // const filteredTodosss = filterSection(
  //   filterCategory(state, state.selectedCategory),
  //   state.selectedSection
  // );
  // console.log(filteredTodosss);

  return (
    <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
      {/* //proxyPostData 대신 postData 쓰면됌됌; */}
      {proxyPostData.map((question) => (
        <QuestionCard key={question.id} postDatas={question} />
      ))}
      {/* postData={question} */}
    </div>
  );
};

export default QuestionContent;
