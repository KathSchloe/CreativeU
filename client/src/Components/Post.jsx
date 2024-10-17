import { Card, CardImg, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";


export const Post = ({ post }) => {

    const userProfileId = JSON.parse(localStorage.getItem("userProfile")).id;

  return (
    
    <Card className="m-4">
        {console.log(userProfileId)}
            <Link to={`/Users/${post.userProfileId}`} className="navbar-brand">
            Posted by: {post.userProfile?.displayName}</Link>
      <CardImg top src={post.imageLocation} alt={post.title} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
          </Link>
        </p>
        <p>{post.content}</p>
        {post.userProfileId == userProfileId ? <><button>Edit</button> <button>Delete</button></> : ""}
    </CardBody>
    </Card>
  );
};