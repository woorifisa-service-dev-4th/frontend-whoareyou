import React from 'react';
import { useQnAContext } from '../../contexts/QnAContexts';

const PostDetail = ({postId}) => {
    const postData = useQnAContext().postData[postId].body;

    return (
        <article className="flex flex-col px-20 py-8 w-full text-xl rounded-3xl bg-neutral-100 max-w-[1200px] max-md:px-5 max-md:max-w-full">
            <div className="mt-8 text-2xl leading-9 text-zinc-800 max-md:max-w-full">
                {postData.content}
            </div>
        </article>
    );
};

export default PostDetail;