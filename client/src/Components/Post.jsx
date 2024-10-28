import { Card, CardImg, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../services/PostService";
import { editPost } from "../services/PostService";
import './Post.css';
import { useLocation } from "react-router-dom";

export const Post = ({ post }) => {

    const userProfileId = JSON.parse(localStorage.getItem("userProfile")).id;
    let navigate = useNavigate();
  return (
    
    <Card className="m-4">
        {console.log(userProfileId)}
            <Link to={`/Users/${post.userProfileId}`} className="navbar-brand">
            Posted by: {post.userProfile?.name}</Link>
            <strong className="gray-title">{post.title}</strong>
            

<CardBody>
  <div className="caption">
    <CardImg 
      src={post.imageUrl} 
      alt={post.title} 
      className="small-image"
    />
    <div className="caption-text">
      <p>{post.caption}</p>
    </div>
  </div>
  {post.userProfileId == userProfileId ? (
    <>
      <button onClick={() => {navigate(`/posts/edit/${post.id}`)}}>Edit</button>
      <button onClick={() => {deletePost(post.id).then(() => {navigate("/posts")})}}>Delete</button>
    </>
  ) : null}
</CardBody>

    </Card>
  );
};