import React, { useState } from "react";
import ToastEditor from "../ToastEditor";
import CustomButton from "../button/CustomButton";
import CategoryFilter from "./CategoryFilter";
import CourseFilter from "./CourseFilter";

const PostEditor = ({ onClose }) => {

    const [category, setCategory] = useState('PROJECT');
    const [course, setCourse] = useState('ENGINEERING');

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    return (
        <div className=" w-full h-full flex flex-col items-center px-20 py-4 bg-white rounded-3xl max-md:px-5 overflow-y-scroll">
            <h1 className="text-3xl font-bold leading-snug text-center text-cyan-400">
                게시물 수정
            </h1>

            <div className="flex flex-col mt-4 max-w-full w-[900px] max-md:mt-10">
                <div className="flex flex-col w-full leading-snug max-w-[900px] text-zinc-800 max-md:max-w-full">
                    <div className="flex gap-5 items-start mt-2.5 w-full text-base max-md:max-w-full">
                        <CategoryFilter onChange={setCategory} />
                        <CourseFilter onChange={setCourse} />
                    </div>
                </div>

                <div className="flex flex-col mt-4 w-full leading-snug max-w-[900px] text-zinc-800 max-md:max-w-full">
                    <label htmlFor="title" className="text-sm font-bold">제목</label>
                    <input
                        type="text"
                        id="title"
                        className="overflow-hidden gap-2.5 self-stretch px-2 py-2 mt-2.5 w-full text-base rounded-xl bg-neutral-100 max-md:max-w-full mb-2.5"
                        value={title}
                        onChange={event => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>

                <ToastEditor setBody={setContent} />

            </div>

            <div className="flex gap-2.5 justify-center items-center mt-6 text-base leading-snug text-center whitespace-nowrap text-zinc-800 max-md:mt-10">
                {/* <button
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
                </button> */}
                <CustomButton bgColor={'bg-neutral'} onClick={onClose}>취소하기</CustomButton>
                <CustomButton bgColor={'bg-cyan'} onClick={() => console.log(category, course, title, content)}>등록하기</CustomButton>
            </div>
        </div>
    );
}

export default PostEditor;