import axios from "axios";

export default class PostsService {
    static async getAll() {
        try {
            const {data} = await axios.get('http://jsonplaceholder.typicode.com/posts');
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}