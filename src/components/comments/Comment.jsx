import { useState } from 'react'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection'
import { useQnAContext } from '../../contexts/QnAContexts';
import sortActiveComments from '../utils/SortedComment';

const Comment = ({id}) => {
  const allCommentsData = useQnAContext().commentData;
  const comments = allCommentsData.filter(comment => Number(comment.body.post_id) === Number(id));
  const [isPostReComment, setIsPostReComment] = useState('-1');
  const sortedComments = sortActiveComments(comments);
  return (
    <>
      <CommentForm isPostReComment={isPostReComment} setIsPostReComment={setIsPostReComment} length={comments.length}/>
      {sortedComments.map((comment, index) => (
            comment.body.comment_id === undefined 
                ? <CommentSection key={index} comment={comment} recommentState={false} setIsPostReComment={setIsPostReComment}/>
                : <CommentSection key={index} comment={comment} recommentState={true} setIsPostReComment={setIsPostReComment}/>
      ))}
    </>
  )
}

export default Comment
