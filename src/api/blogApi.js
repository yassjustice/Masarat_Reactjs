import axios from "axios";

const api = axios.create({
    baseURL: "https://yassjustice.github.io/jsonPostsHoseted/postDb.json",
    // baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        "Content-Type": "application/json",
    },
});

export function GetAllBlogs() {
    return api.get("");
}

export function GetOneBlog(id) {
    return api.get(`/${id}`);
}

export default api;
