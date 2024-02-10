// import { createContext, useContext, useEffect, useState } from "react";
// import { getProduct } from "../../api/shopApi/postsApi";
// import ShopLayout from "../../layouts/ShopLayout";

import { createContext, useContext, useEffect, useState } from "react";
import { GetAllBlogs } from "../api/blogApi";

const BlogContext = createContext();
export const BlogData = () => useContext(BlogContext);

export const useBlogData = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useBlogData must be used within a PostsWrapper");
    }
    return context;
};

export const PostsWrapper = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts when the component mounts
        GetAllBlogs()
            .then((response) => {
              // console.log(response);
              console.log(response.data);
              setPosts(response.data);
                console.log("what", posts);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []); // Empty dependency array ensures it only runs once on mount

    return (
        <BlogContext.Provider value={{ posts }}>
            {children}
        </BlogContext.Provider>
    );
};
