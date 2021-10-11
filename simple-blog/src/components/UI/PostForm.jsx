import React, {useState} from 'react';
import MyInput from "./Input/MyInput";
import MyButton from "./Button/MyButton";

const PostForm = ({create}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }

        create(newPost);

        setTitle('');
        setBody('');
    }

    return (
        <form>
            <MyInput
                type="text"
                placeholder='заголовок'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <MyInput
                type="text"
                placeholder='описание поста'
                value={body}
                onChange={e => setBody(e.target.value)}
            />
            <MyButton onClick={addNewPost}>добавить пост</MyButton>
        </form>
    );
};

export default PostForm;