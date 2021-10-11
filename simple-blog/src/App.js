import {useState} from "react";
import PostsList from "./components/PostsList";
import styles from "./App.module.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'аа', body: 'бб'},
        {id: 2, title: 'гг 2', body: 'аа'},
        {id: 3, title: 'вв 3', body: 'яя'},
    ]);

    const [selectedSort, setSelectedSort] = useState('');


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

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts(
            [...posts].sort(
                (a, b) => a[sort].localeCompare(b[sort])
            )
        )
    }

    return (
        <div className={styles.App}>
            <PostForm create={createPost}/>
            <hr style={{margin: '30px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    defaultValue='сортировка'
                    options={
                        [
                            {value: 'title', name: 'по названию'},
                            {value: 'body', name: 'по описанию'}
                        ]
                    }
                    onChange={sortPosts}

                />
            </div>
            {
                posts.length !== 0
                    ? <PostsList remove={removePost} posts={posts} title='список постов 1'/>
                    : <h1>список постов пуст 👻</h1>
            }
        </div>
    );
}

export default App;
