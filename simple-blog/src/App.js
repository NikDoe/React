import {useState} from "react";
import PostsList from "./components/PostsList";
import styles from "./App.module.css";
import PostForm from "./components/PostForm";

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

    const removePost = post => {
        setPosts(
            posts.filter(
                p => p.id !== post.id
            )
        )
    }

    return (
        <div className={styles.App}>
            <PostForm create={createPost}/>
            {
                posts.length !== 0
                    ? <PostsList remove={removePost} posts={posts} title='список постов 1'/>
                    : <h1>список постов пуст 👻</h1>
            }
        </div>
    );
}

export default App;
