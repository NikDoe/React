import {useMemo, useState} from "react";
import PostsList from "./components/PostsList";
import styles from "./App.module.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";

function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({query: '', sort: ''})
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(
        () => {
            if (filter.sort) {
                return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
            }
            return posts;
        },
        [filter.sort, posts]
    )

    const sortedAndSearchPosts = useMemo(
        () => {
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
        setModal(false);
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
            <MyButton
                onClick={() => setModal(true)}
                style={{margin: '30px 0px'}}
            >
                создать полльзователя
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '30px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostsList remove={removePost} posts={sortedAndSearchPosts} title='список постов 1'/>
        </div>
    );
}

export default App;
