import {useState} from "react";
import PostsList from "./components/PostsList";

function App() {

    const [posts, setPosts] = useState([
        {id: new Date().getTime(), num: 1, title: 'Javascript', body: 'description'}
    ]);

    return(
        <PostsList posts={posts} title='список постов 1'/>
    );
}

export default App;
