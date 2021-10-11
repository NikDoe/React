import React from 'react';
import styles from "../App.module.css";
import PostItem from "./PostItem";

const PostsList = ({posts, title}) => {
    return (
        <div className={styles.App}>
            <h1>{title}</h1>
            {posts.map(
                post => <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostsList;