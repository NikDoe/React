import {useMemo, useState} from "react";
import PostsList from "./components/PostsList";
import styles from "./App.module.css";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Input/MyInput";

function App() {

    const [posts, setPosts] = useState([]);

    const [selectedSort, setSelectedSort] = useState('');

    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(
        ()=> {
            if(selectedSort){
                console.log('посты были отсортированы по : ', selectedSort)
                return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
            }
            if(posts.length > 0) {
                console.log('добавлен новый пост')
            }
            return posts;
        },
        [selectedSort, posts]
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

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className={styles.App}>
            <PostForm create={createPost}/>
            <hr style={{margin: '30px 0'}}/>
            <div>
                <MyInput
                    placeholder='поиск...'
                    value={searchQuery}
                    onChange={e => {
                        setSearchQuery(e.target.value)
                    }}
                />
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
                    ? <PostsList remove={removePost} posts={sortedPosts} title='список постов 1'/>
                    : <h1>список постов пуст 👻</h1>
            }
        </div>
    );
}

export default App;
