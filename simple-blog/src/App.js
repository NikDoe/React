import styles from './App.module.css'
import PostItem from "./components/PostItem";
import {useState} from "react";

function App() {

    const [posts, setPosts] = useState([
        {id: new Date().getTime(), num: 1, title: 'Javascript', body: 'description'}
    ]);

    return(
        <div className={styles.App}>
            <h1>
                список постов
            </h1>
            {posts.map(
                post => <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
}

export default App;
