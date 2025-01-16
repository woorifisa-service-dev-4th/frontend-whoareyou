import { useQnAContext } from "../contexts/QnAContexts";
import {useNavigate} from 'react-router-dom';

const QuestionCard = ({ likeImageSrc }) => {

  const state = useQnAContext();
  const navigate = useNavigate();
  const postData = state.postData.find((q) => q.id === parseInt(id));
  const { title, content, like, createdAt } = postData;
  
  const handleClick = () => {
    navigate("/post-detail/0");
  }

  return (
    <article onClick={handleClick} className="flex flex-col px-20 py-8 mt-10 w-full rounded-3xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap self-start font-bold text-sky-700 min-h-[90px] max-md:max-w-full">
        <div className="text-5xl leading-[70px] w-[65px] max-md:text-4xl max-md:leading-[62px]">
          Q
        </div>
        <h2 className="gap-2.5 self-stretch py-7 h-full text-3xl leading-snug text-center min-w-[240px] max-md:max-w-full">
          {title}
        </h2>
      </div>
      <p className="mt-8 text-2xl leading-9 text-zinc-800 max-md:max-w-full">
        {content}
      </p>
      <div className="flex flex-wrap gap-10 justify-between mt-8 w-full text-xl min-h-[50px] text-zinc-400 max-md:max-w-full">
        <time className="leading-7 text-center w-[129px]">{createdAt[0]}</time>
        <div className="flex gap-2 items-center px-5 py-2.5 h-full leading-snug whitespace-nowrap">
          <img
            loading="lazy"
            src={likeImageSrc}
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.21] w-[29px]"
            alt=""
          />
          <span className="self-stretch my-auto">{like}</span>
        </div>
      </div>
    </article>
  );
}
export default QuestionCard;