import React from 'react';
import styles from './PostItem.module.css'
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
    return (
        <div className={styles.post}>
            <div className="post__content">
                <strong>{props.post.num}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton disabled>удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;