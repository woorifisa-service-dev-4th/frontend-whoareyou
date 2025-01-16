import * as React from "react";
import Header from "./Header";
import QuestionCard from "./QuestionCard";
import SortingTabs from "./SortingTable";

const questions = [
    {
        id: 1,
        title: "Spring Boot 파일 업로드 관련 질문 있습니다!!",
        content: "안녕하세요! Spring Boot와 JPA를 사용하여 파일 업로드 및 파일 정보를 데이터베이스에 저장하는 기능을 구현하고 있습니다. 현재는 파일 업로드 자체는 정상적으로 동작하지만, 업로드된 파일의 메타데이터(예: 파일명, 저장 경로, 업로드 날짜 등)를 데이터베이스에 저장하는 로직을 추가하려고 합니다. 현재 작성된 코드는 다음과 같습니다:",
        date: "2020. 08. 10",
        likes: 45,
        likeImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eeff8d30265d53cec74c11f4d0ce1d13b0b5be8a4f98f0e7f21cee9ccceef239?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
    },
    {
        id: 2,
        title: "Spring Boot 파일 업로드 관련 질문 있습니다!!",
        content: "안녕하세요! Spring Boot와 JPA를 사용하여 파일 업로드 및 파일 정보를 데이터베이스에 저장하는 기능을 구현하고 있습니다. 현재는 파일 업로드 자체는 정상적으로 동작하지만, 업로드된 파일의 메타데이터(예: 파일명, 저장 경로, 업로드 날짜 등)를 데이터베이스에 저장하는 로직을 추가하려고 합니다. 현재 작성된 코드는 다음과 같습니다:",
        date: "2020. 08. 10",
        likes: 45,
        likeImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eeff8d30265d53cec74c11f4d0ce1d13b0b5be8a4f98f0e7f21cee9ccceef239?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
    },
    {
        id: 3,
        title: "Spring Boot 파일 업로드 관련 질문 있습니다!!",
        content: "안녕하세요! Spring Boot와 JPA를 사용하여 파일 업로드 및 파일 정보를 데이터베이스에 저장하는 기능을 구현하고 있습니다. 현재는 파일 업로드 자체는 정상적으로 동작하지만, 업로드된 파일의 메타데이터(예: 파일명, 저장 경로, 업로드 날짜 등)를 데이터베이스에 저장하는 로직을 추가하려고 합니다. 현재 작성된 코드는 다음과 같습니다:",
        date: "2020. 08. 10",
        likes: 45,
        likeImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/057fca40b5cc8e1dd25aa16c0447ae59df52a7bde444ce9a4eb913ad9c7e8aa4?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
    },
    {
        id: 4,
        title: "Spring Boot 파일 업로드 관련 질문 있습니다!!",
        content: "안녕하세요! Spring Boot와 JPA를 사용하여 파일 업로드 및 파일 정보를 데이터베이스에 저장하는 기능을 구현하고 있습니다. 현재는 파일 업로드 자체는 정상적으로 동작하지만, 업로드된 파일의 메타데이터(예: 파일명, 저장 경로, 업로드 날짜 등)를 데이터베이스에 저장하는 로직을 추가하려고 합니다. 현재 작성된 코드는 다음과 같습니다:",
        date: "2020. 08. 10",
        likes: 45,
        likeImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b68630368e6b13905bc00f2307248afcb6f27d75cc457d7d2ab8497306d20d4e?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
    }
];

function QuestionBoard() {
    return (
        <div className="flex overflow-hidden flex-col bg-white">
            <Header />
            <main className="flex flex-col self-center mt-20 max-w-full w-[1200px] max-md:mt-10">
                <nav className="flex gap-10 items-start self-end px-6 py-2.5 text-lg whitespace-nowrap max-md:px-5">
                    <div className="flex gap-3.5 items-center text-sky-600 bg-white">
                        <div className="self-stretch my-auto">카테고리</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a340849a508c58971ecb7c3b6583a47b0502e3eb9b0cda67a6f8580cbb202c38?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
                            className="object-contain shrink-0 self-stretch my-auto aspect-[1.67] w-[25px]"
                            alt=""
                        />
                    </div>
                    <div className="flex gap-3.5 items-center text-sky-700">
                        <div className="self-stretch my-auto">수강반</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/163f8244042c881a34dfdb9c611e56b27250291aee5d0e294f1e5c647ddd4f45?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
                            className="object-contain shrink-0 self-stretch my-auto aspect-[1.67] fill-sky-700 w-[25px]"
                            alt=""
                        />
                    </div>
                </nav>
                <section className="flex flex-col pb-24 mt-12 w-full max-md:mt-10 max-md:max-w-full">
                    <SortingTabs />
                    <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
                        {questions.map(question => (
                            <QuestionCard key={question.id} {...question} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default QuestionBoard;