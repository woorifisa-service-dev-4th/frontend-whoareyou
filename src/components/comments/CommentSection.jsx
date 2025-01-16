import React, { useState } from 'react'
import ToastEditor from '../ToastEditor';
import { useQnADispatch } from '../../contexts/QnAContexts';
import { DataStatus } from '../../constants/status';

const CommentSection = ({comment, recommentState, setIsPostReComment}) => {
  const [openTextArea, setOpenTextArea] = useState(false);
  const [body, setBody] = useState('');

  const dispatch = useQnADispatch();

  const postReCommentHandler = () => {
    setIsPostReComment(comment.id);
  }

  const deleteComment = ({recommentState}) => {
    const deletedComment = {
        ...comment,
        status: DataStatus[1],
    }
    if(recommentState) dispatch({ type: 'DELETE_RECOMMENT', deletedComment });
    else dispatch({ type: 'DELETE_COMMENT', deletedComment });
  }

  const updateComment = ({recommentState}) => {
    const {id, commnetBody, status} = comment;
    const updatedComment = {
        ...comment,
        body: {
            ...commnetBody,
            content: body,
        }
    }
    if(recommentState) dispatch({ type: 'UPDATE_RECOMMENT', updatedComment });
    else dispatch({ type: 'UPDATE_COMMENT', updatedComment });
    setOpenTextArea(false);
  }

  return (
        <section className={`flex flex-row-reverse w-full bg-white max-md:max-w-full"`}>
            <form className={`flex flex-col px-20 pt-5 mt-8 ${recommentState ? 'w-3/4' : 'w-full'} text-sm leading-snug whitespace-nowrap rounded-3xl bg-neutral-100 text-zinc-800 max-md:px-5 max-md:max-w-full ${openTextArea ? 'min-h-[500px]' : 'min-h-[150px]'}`}>
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="flex justify-between gap-10 items-start w-full min-h-[40px] max-md:max-w-full">
                            {recommentState ? <div className="flex text-lg font-medium">대댓글</div> : <div></div>}
                            {openTextArea ?  
                            <div className="flex gap-4">
                                <button onClick={(e) => { e.preventDefault(); updateComment(recommentState); }} type="button" className="py-2.5 bg-cyan-400 rounded-xl w-[106px]">
                                  완료
                                </button> 
                                <button onClick={(e) => { e.preventDefault(); setOpenTextArea(false); }} type="button" className="py-2.5 bg-cyan-400 rounded-xl w-[106px]">
                                  취소
                                </button>                            
                            </div> :
                            <div className="flex gap-4">
                                {recommentState ? 
                                    <div></div> :
                                    <button onClick={(e) => { e.preventDefault(); postReCommentHandler(); }} type="button" className="py-2.5 bg-cyan-400 rounded-xl w-[106px]">
                                    대댓글 작성
                                    </button>
                                }
                                <button onClick={(e) => { e.preventDefault(); setOpenTextArea(true); }} type="button" className="py-2.5 bg-cyan-400 rounded-xl w-[106px]">
                                  수정
                                </button>
                                <button onClick={(e) => { e.preventDefault(); deleteComment(recommentState); }} type="button" className="py-2.5 bg-cyan-400 rounded-xl w-[106px]">
                                  삭제
                                </button>
                            </div>
                            }
                        </div>
                        <div className={`flex flex-col px-10 pt-1 mt-4 w-full text-sm leading-snug whitespace-nowrap rounded-2xl bg-neutral-100 text-zinc-800 max-md:px-5 max-md:max-w-full min-h-[50px]}`}>
                            {comment.body.content}
                        </div>
                        { openTextArea && <ToastEditor setBody={setBody} /> }
                    </div>
                </div>
            </form>
        </section>
  )
}

export default CommentSection
