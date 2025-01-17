import { useState } from "react";

function SortingTabs() {
  const [activeOption, setActiveOption] = useState("최신순"); // 기본값 설정

  const options = ["최신순", "오랜된순", "좋아요순"];

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
            console.log(option);
            setActiveOption(option);
          }}
        >
          {option}
        </span>
      ))}
    </div>
  );
}

export default SortingTabs;
