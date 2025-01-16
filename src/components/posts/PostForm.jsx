import React from 'react';
import PostDetail from './PostDeail';
import Comment from '../comments/Comment';
import { useParams } from 'react-router-dom';

const PostForm = () => {
  
    const {id} = useParams();
  
    return (
        <main className="flex overflow-hiddesn flex-col bg-white">
            <div className="flex flex-col self-center mt-24 max-w-full w-[1200px] max-md:mt-10">
                <PostDetail postId={id} />
                <Comment postId={id} />
            </div>
        </main>
    );
};

export default PostForm;