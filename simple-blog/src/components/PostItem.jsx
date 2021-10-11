import React from 'react';
import styles from './PostItem.module.css'

const PostItem = (props) => {
    return (
        <div className={styles.post}>
            <div className="post__content">
                <strong>{props.post.num}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;