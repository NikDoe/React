import {useMemo, useState} from "react";
import PostsList from "./components/PostsList";
import styles from "./App.module.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({query: '', sort: ''})

    const sortedPosts = useMemo(
        ()=> {
            if(filter.sort){
                return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
            }
            return posts;
        },
        [filter.sort, posts]
    )

    const sortedAndSearchPosts = useMemo(
        ()=> {
            return sortedPosts.filter(
                post => post.title.toLowerCase().includes(filter.query.toLowerCase())
            );
        },
        [filter.query, sortedPosts]
    )

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
            <hr style={{margin: '30px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {
                sortedAndSearchPosts.length !== 0
                    ? <PostsList remove={removePost} posts={sortedAndSearchPosts} title='список постов 1'/>
                    : <h1>список постов пуст 👻</h1>
            }
        </div>
    );
}

export default App;
