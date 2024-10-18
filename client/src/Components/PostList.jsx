import { useState, useEffect } from "react";
import { getAllPosts } from "../services/PostService";
import { Post } from "./Post";
import './PostForm.css';  // Import your CSS file here
import { NavBar } from "../Components/nav bar/NavBar.jsx";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPosts().then(allPosts => setPosts(allPosts)); 
  };

  useEffect(() => {
    getPosts();
  }, []); 

  return (
    <>
      <NavBar /> {/* Add the NavBar here */}
      <div className="postform"> {/* Apply the postform class here */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="cards-column">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
