import React, { useReducer } from "react";
import QuestionCard from "./QuestionCard";
import { useQnAContext } from "../contexts/QnAContexts";

const QuestionContent = () => {
  const state = useQnAContext();
  const postData = state.postData;

  return (
    <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
      {postData.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionContent;
