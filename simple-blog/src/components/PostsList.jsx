import React from 'react';
import PostItem from "./PostItem";

const PostsList = ({posts, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map(
                (post, index) => <PostItem key={post.id} num={index + 1} post={post}/>
            )}
        </div>
    );
};

export default PostsList;