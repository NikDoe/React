import React from 'react';
import PostItem from "./PostItem";

const PostsList = ({posts, title, remove}) => {

    if(!posts.length) {
        return <h1>список постов пуст 👻</h1>
    }

    return (
        <div>
            <h1>{title}</h1>
            {posts.map(
                (post, index) => <PostItem key={post.id} num={index + 1} post={post} remove={remove}/>
            )}
        </div>
    );
};

export default PostsList;