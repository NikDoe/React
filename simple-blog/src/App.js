import {useState} from "react";
import PostsList from "./components/PostsList";
import MyInput from "./components/UI/Input/MyInput";
import MyButton from "./components/UI/Button/MyButton";
import styles from "./App.module.css";

function App() {

    const [posts, setPosts] = useState([
        {id: new Date().getTime(), num: 1, title: 'Javascript', body: 'description'}
    ]);

    return (
        <div className={styles.App}>
            <form>
                <MyInput type="text" placeholder='заголовок'/>
                <MyInput type="text" placeholder='описание поста'/>
                <MyButton>добавить пост</MyButton>
            </form>
            <PostsList posts={posts} title='список постов 1'/>
        </div>
    );
}

export default App;
