import { Routes, Route, Navigate} from "react-router-dom";
// import { PostList } from "./PostList";
import { PostForm } from "./PostForm";
import { PostDetails } from "./PostDetails";
// import { UserPosts } from "./UserPosts";
import { useState, useEffect } from "react";
import { PostList } from "./PostList";
import { Homepage } from "./Homepage";

const ApplicationViews = () => {

   const [currentUser, setCurrentUser] = useState({})

   useEffect(() => {
     const localUser = localStorage.getItem("userProfile")
     const userObject = JSON.parse(localUser)
 
     setCurrentUser(userObject)
   }, [])

return (
     <Routes>
     
        <Route path="/" element={<Homepage />} />

         <Route path="/posts" element={<PostList currentUser={currentUser}/>} />
        
        <Route path="/posts/add" element={<PostForm currentUser={currentUser}/>} />
        
        <Route path="/posts/:id" element={<PostDetails currentUser={currentUser}/>} />
     
     </Routes>
    
    )
  

};

export default ApplicationViews;