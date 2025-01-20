import { useEffect, useState } from "react";
import { useQnAContext, useQnADispatch } from "../contexts/QnAContexts";
import QuestionContent from "./QuestionContent";

function SortingTabs() {
  const [activeOption, setActiveOption] = useState("최신순"); // 기본값 설정
  const state = useQnAContext();
  const dispatch = useQnADispatch();
  const options = ["최신순", "오랜된순", "좋아요순"];

  //글쓰기 이후 최신순으로 초기화 함수
  useEffect(() => {
    if (state.selectedSort != activeOption) {
      setActiveOption("최신순");
      dispatch({});
    }
  }, [state.selectedSort]);

  const sortData = (option) => {
    dispatch({
      type: "SORT",
      selectedSort: option,
    });
  };

  return (
    <div
      className="flex flex-wrap items-start self-center text-2xl font-medium leading-snug whitespace-nowrap min-h-[45px] text-zinc-400 max-md:max-w-full"
      role="tablist"
    >
      {options.map((option) => (
        <span
          key={option}
          className={`${
            activeOption === option
              ? "gap-2.5 px-5 py-2.5 text-sky-700 border-b border-solid border-b-sky-700 min-h-[40px] min-w-[240px] w-[300px]"
              : "gap-2.5 px-5 py-2.5 min-h-[40px] min-w-[240px] w-[300px]"
          }`}
          onClick={() => {
            setActiveOption(option);
            sortData(option);
          }}
        >
          {option}
        </span>
      ))}
    </div>
  );
}

export default SortingTabs;
