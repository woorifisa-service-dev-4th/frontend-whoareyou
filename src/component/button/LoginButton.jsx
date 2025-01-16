import React from "react";

export const LoginButton = () => {
  return (
    <button
      onClick={() => alert("아직 로그인 기능이 완성되지 않았습니다 ㅎㅎ!")}
      className="overflow-hidden gap-2.5 self-stretch px-7 py-3.5 bg-cyan-400 rounded-xl min-h-[48px] max-md:px-5"
    >
      로그인
    </button>
  );
};
