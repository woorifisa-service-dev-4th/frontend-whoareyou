import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PostDetails from './PostDetails';


const PostForm = () => {

    const { id } = useParams();

    return (
        <main className="flex overflow-hiddesn flex-col bg-white">
            <div className="flex flex-col self-center mt-24 max-w-full w-[1200px] max-md:mt-10">
                <PostDetails id={id} />
            </div>
        </main>
    );
};

export default PostForm;