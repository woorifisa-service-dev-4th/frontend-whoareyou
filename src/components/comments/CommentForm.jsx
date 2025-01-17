import { useState, useEffect } from "react";
import ToastEditor  from "../ToastEditor";
import { useQnAContext, useQnADispatch } from "../../contexts/QnAContexts";
import { DataStatus } from "../../constants/status";

const CommentForm = ({length, isPostReComment, setIsPostReComment}) => {
    const [body, setBody] = useState('');
    const [openTextArea, setOpenTextArea] = useState(false);
    const { commentData } = useQnAContext();
    const dispatch = useQnADispatch();;
    
    const isCommentTagged = ( isPostReComment === '-1' )? false : true;

    let tagData = '';
    if(isCommentTagged) tagData = commentData[isPostReComment].body;

    useEffect(() => {
        if(isPostReComment !== '-1') {
            setOpenTextArea(true);
        }
    }, [isPostReComment, setIsPostReComment]);

    const addComment = () => {
        if(isPostReComment === '-1') {
            const newComment = {
                id: commentData.length + 1,
                body: {
                    post_id: commentData[isPostReComment].body.post_id,
                    comment_id: undefined,
                    content: body,
                    createdAt: new Date(),
                },
                status: DataStatus[0],
            }
            dispatch({ type: 'COMMENT_POST', newComment });
        } else {
            const newReComment = {
                id: commentData.length + 1,
                body: {
                    post_id: commentData[isPostReComment].body.post_id,
                    comment_id: isPostReComment,
                    content: body,
                    createdAt: new Date(),
                },
                status: DataStatus[0],
            }
            dispatch({ type: 'RECOMMENT_POST', newReComment });
        }
        setOpenTextArea(false);
    }

    const openTextAreaHandler = () => {
        setOpenTextArea(true);
    }
    const closeTextAreaHandler = () => {
        if(isPostReComment !== '-1') {
            setIsPostReComment('-1');
        }
        setOpenTextArea(false);
    }

    return (
        <section className="flex flex-col mt-10 w-full bg-white max-md:max-w-full">
            <div className="flex flex-wrap gap-8 justify-between items-start w-full leading-snug min-h-[42px] text-zinc-800 max-md:max-w-full">
                <div className="flex gap-4 items-start">
                    <h2 className="text-3xl font-bold">댓글</h2>
                    <div className="text-base">{length}개</div>
                </div>
            </div>
            <form className={`flex flex-col px-20 pt-5 mt-8 w-full text-sm leading-snug whitespace-nowrap rounded-3xl bg-neutral-100 text-zinc-800 max-md:px-5 max-md:max-w-full ${openTextArea ? 'min-h-[500px]' : 'min-h-[100px]'}`}>
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        {isCommentTagged && 
                            <div className={`flex flex-col px-20 pt-5 mt-8 w-full text-sm leading-snug whitespace-nowrap rounded-3xl bg-white text-zinc-800 max-md:px-5 max-md:max-w-full ${isCommentTagged ? 'min-h-[50px]' : 'min-h-[0px]'}`}>
                                {tagData.content}
                            </div>
                        }
                        <div className="flex flex-row-reverse gap-10 items-start w-full min-h-[40px] max-md:max-w-full">
                            {openTextArea ? 
                            <div className="flex gap-4">
                                <button onClick={(e) => { e.preventDefault(); addComment(); }} type="button" className="py-2.5 bg-cyan-400 rounded-xl w-[106px]">
                                등록
                                </button>
                                <button onClick={(e) => { e.preventDefault(); closeTextAreaHandler(); }} type="button" className="py-2.5 bg-cyan-400 rounded-xl w-[106px]">
                                취소
                                </button>
                            </div> : 
                            <button onClick={(e) => { e.preventDefault(); openTextAreaHandler(); }} type="button" className="py-2.5 bg-cyan-400 rounded-xl w-[106px]">
                                댓글 작성
                            </button>
                            }
                        </div>
                        { openTextArea && <ToastEditor setBody={setBody} /> } 
                    </div>
                </div>
            </form>
        </section>
    );
}

export default CommentForm;