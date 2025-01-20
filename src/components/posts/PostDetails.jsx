import React from "react";
import { useQnAContext } from "../../contexts/QnAContexts";
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";
import PostEditor from "./PostEditor";

const PostDetails = ({ id }) => {
  const [openModal, open] = React.useState(false);

  const state = useQnAContext();
  const post = state.postData.find((e) => e.id === parseInt(id));
  /*
   if(post === undefined){
     에러처리 로직
   }
     */

  const { title, content, like, createdAt } = post.body;

  return (
    <article className="flex flex-col px-20 py-8 w-full text-xl rounded-3xl bg-neutral-100 max-w-[1200px] max-md:px-5 max-md:max-w-full">
      <h2 className="gap-2.5 self-stretch py-7 h-full text-3xl leading-snug text-center min-w-[240px] max-md:max-w-full text-customBlue font-bold">
        {title}
      </h2>
      <div className="flex justify-end gap-10 w-full text-center min-h-[80px] max-md:max-w-full">
        <div className="flex flex-end gap-5 h-full leading-7 whitespace-nowrap text-zinc-400">
          <button className="w-[35px]" onClick={() => open(true)}>
            수정
          </button>
          <button className="w-[35px]">삭제</button>
        </div>
      </div>
      <div className="mt-8 text-left text-2xl leading-9 text-zinc-800 max-md:max-w-full">
        <p>{content}</p>
      </div>
      <div className="flex flex-wrap gap-10 justify-between mt-8 w-full min-h-[50px] text-zinc-400 max-md:max-w-full">
        <div className="leading-7 text-center  text-zinc-800 w-[129px]">
          {createdAt.toLocaleString().slice(0, -10)}
        </div>
        <div className="flex gap-2 items-center px-5 py-2.5 h-full leading-snug whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeff8d30265d53cec74c11f4d0ce1d13b0b5be8a4f98f0e7f21cee9ccceef239?placeholderIfAbsent=true&apiKey=342eb70ec9c347beb3127fd33e54f28d"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.21] w-[29px]"
          />
          <div className="self-stretch my-auto">{like}</div>
        </div>
      </div>

      {openModal &&
        createPortal(
          <Modal>
            <PostEditor />
            <PostEditor onClose={() => open(false)} />
          </Modal>,
          document.body
        )}
    </article>
  );
};

export default PostDetails;
