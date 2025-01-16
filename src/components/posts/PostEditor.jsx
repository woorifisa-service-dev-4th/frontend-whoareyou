import * as React from "react";
import RichTextEditor from "./RichTextEditor";
import CategoryCourseSelector from "./CategoryCourseSelector";

const PostEditor = () => {
    return (
        <div className=" w-full h-full flex flex-col items-center px-24 py-12 bg-white rounded-3xl max-md:px-5 overflow-y-scroll">
            <h1 className="text-3xl font-bold leading-snug text-center text-cyan-400">
                게시물 수정
            </h1>

            <div className="flex flex-col mt-12 max-w-full w-[900px] max-md:mt-10">
                <div className="flex flex-col w-full leading-snug max-w-[900px] text-zinc-800 max-md:max-w-full">
                    <CategoryCourseSelector />
                </div>

                <div className="flex flex-col mt-8 w-full leading-snug max-w-[900px] text-zinc-800 max-md:max-w-full">
                    <label htmlFor="title" className="text-sm font-bold">제목</label>
                    <input
                        type="text"
                        id="title"
                        className="overflow-hidden gap-2.5 self-stretch px-5 py-5 mt-2.5 w-full text-base rounded-xl bg-neutral-100 max-md:max-w-full"
                        defaultValue="Spring, JPA, Jenkins"
                        aria-label="Post title"
                    />
                </div>

                <RichTextEditor />
            </div>

            <div className="flex gap-2.5 justify-center items-center mt-12 text-base leading-snug text-center whitespace-nowrap text-zinc-800 max-md:mt-10">
                <button
                    className="self-stretch px-7 py-3.5 my-auto rounded-xl bg-neutral-100 min-h-[48px] w-[200px] max-md:px-5"
                    aria-label="Cancel editing"
                >
                    취소하기
                </button>
                <button
                    className="self-stretch px-7 py-3.5 my-auto bg-cyan-400 rounded-xl min-h-[48px] w-[200px] max-md:px-5"
                    aria-label="Submit post"
                >
                    등록하기
                </button>
            </div>
        </div>
    );
}

export default PostEditor;