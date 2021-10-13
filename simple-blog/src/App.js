import {useEffect, useState} from "react";
import PostsList from "./components/PostsList";
import styles from "./App.module.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostsService from "./API/PostsService";

function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({query: '', sort: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(
        () => {
            fetchPosts();
        },
        []
    )

    async function fetchPosts() {
        const posts = await PostsService.getAll();
        setPosts(posts);
    }

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
                создать пост
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
