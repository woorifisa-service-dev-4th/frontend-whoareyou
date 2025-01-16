import React, { useReducer } from "react";
import QuestionCard from "./QuestionCard";
import { useQnAContext } from "../contexts/QnAContexts";
// Reducer, Context 사용해야함 변경 요망
const questions = [
  {
    id: 1,
    title: "Spring Boot 파일 업로드 관련 질문 있습니다!!",
    content:
      "안녕하세요! Spring Boot와 JPA를 사용하여 파일 업로드 및 파일 정보를 데이터베이스에 저장하는 기능을 구현하고 있습니다. 현재는 파일 업로드 자체는 정상적으로 동작하지만, 업로드된 파일의 메타데이터(예: 파일명, 저장 경로, 업로드 날짜 등)를 데이터베이스에 저장하는 로직을 추가하려고 합니다. 현재 작성된 코드는 다음과 같습니다:",
    date: "2020. 08. 10",
    likes: 45,
    likeImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eeff8d30265d53cec74c11f4d0ce1d13b0b5be8a4f98f0e7f21cee9ccceef239?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d",
  },
  {
    id: 2,
    title: "Spring Boot 파일 업로드 관련 질문 있습니다!!",
    content:
      "안녕하세요! Spring Boot와 JPA를 사용하여 파일 업로드 및 파일 정보를 데이터베이스에 저장하는 기능을 구현하고 있습니다. 현재는 파일 업로드 자체는 정상적으로 동작하지만, 업로드된 파일의 메타데이터(예: 파일명, 저장 경로, 업로드 날짜 등)를 데이터베이스에 저장하는 로직을 추가하려고 합니다. 현재 작성된 코드는 다음과 같습니다:",
    date: "2020. 08. 10",
    likes: 45,
    likeImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eeff8d30265d53cec74c11f4d0ce1d13b0b5be8a4f98f0e7f21cee9ccceef239?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d",
  },
  {
    id: 3,
    title: "Spring Boot 파일 업로드 관련 질문 있습니다!!",
    content:
      "안녕하세요! Spring Boot와 JPA를 사용하여 파일 업로드 및 파일 정보를 데이터베이스에 저장하는 기능을 구현하고 있습니다. 현재는 파일 업로드 자체는 정상적으로 동작하지만, 업로드된 파일의 메타데이터(예: 파일명, 저장 경로, 업로드 날짜 등)를 데이터베이스에 저장하는 로직을 추가하려고 합니다. 현재 작성된 코드는 다음과 같습니다:",
    date: "2020. 08. 10",
    likes: 45,
    likeImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/057fca40b5cc8e1dd25aa16c0447ae59df52a7bde444ce9a4eb913ad9c7e8aa4?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d",
  },
  {
    id: 4,
    title: "Spring Boot 파일 업로드 관련 질문 있습니다!!",
    content:
      "안녕하세요! Spring Boot와 JPA를 사용하여 파일 업로드 및 파일 정보를 데이터베이스에 저장하는 기능을 구현하고 있습니다. 현재는 파일 업로드 자체는 정상적으로 동작하지만, 업로드된 파일의 메타데이터(예: 파일명, 저장 경로, 업로드 날짜 등)를 데이터베이스에 저장하는 로직을 추가하려고 합니다. 현재 작성된 코드는 다음과 같습니다:",
    date: "2020. 08. 10",
    likes: 45,
    likeImageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b68630368e6b13905bc00f2307248afcb6f27d75cc457d7d2ab8497306d20d4e?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d",
  },
];

const QuestionContent = () => {
  const state = useQnAContext();
  const postData = state.postData;
  console.log(postData);

  return (
    <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
      {postData.map((question) => (
        <QuestionCard key={question.id} {...question} />
      ))}
    </div>
  );
};

export default QuestionContent;
