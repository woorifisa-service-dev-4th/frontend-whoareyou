import React from 'react';
import PostDetails from './PostDeails';
import { CommentSection } from '../ui/CommentSection';


const postData = {
    id: 0,
    post: {
        title: "Test Data 0",
        content: "This is the first test data"
    },
    status: 'active'
};

const comments = [
    {
        id: 0,
        comment: {
            post_id: 0,
            comment_id: 0,
            content: "This is the first comment"
        },
        status: 'active'
    },
    {
        id: 1,
        comment: (
            {
                post_id: 0,
                comment_id: 1,
                content: "This is the firt comment's comment"
            }
        ),
        status: 'active'
    },
    {
        id: 2,
        comment: (
            {
                post_id: 0,
                comment_id: 2,
                content: "This is the second comment's comment"
            }
        ),
        status: 'active'
    }
];


const ForumPost = () => {
    return (
        <main className="flex overflow-hidden flex-col bg-white">
            <div className="flex flex-col self-center mt-24 max-w-full w-[1200px] max-md:mt-10">
                <PostDetails postData={postData.post} />
                <CommentSection />
                {comments.map((comment, index) => (
                    <PostDetails key={index} postData={comment.comment} />
                ))}
            </div>
        </main>
    );
};

export default ForumPost;