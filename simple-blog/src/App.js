import {useState} from "react";
import PostsList from "./components/PostsList";
import styles from "./App.module.css";
import PostForm from "./components/UI/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: Date.now(), title: 'Javascript', body: 'description'}
    ]);

    const createPost = (newPost) => {
        setPosts(
            prevPosts => {
                return [...prevPosts, newPost]
            }
        )
    }

    return (
        <div className={styles.App}>
            <PostForm create={createPost}/>
            <PostsList posts={posts} title='список постов 1'/>
        </div>
    );
}

export default App;
