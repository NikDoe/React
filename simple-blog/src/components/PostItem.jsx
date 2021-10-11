import React from 'react';
import styles from './PostItem.module.css'
import MyButton from "./UI/Button/MyButton";

const PostItem = ({num, post, remove}) => {
    return (
        <div className={styles.post}>
            <div className="post__content">
                <strong>{num}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=> {remove(post)}}>удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;