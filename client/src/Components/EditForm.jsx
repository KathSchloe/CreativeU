import { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Card,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, editPost } from "../services/PostService";
import './AddPost.css';  // Import your CSS file here

export const EditForm = () => {
  
    const { postId } = useParams();

    const [post, setPost] = useState({
        title: "",
        caption: "",
        imageUrl: ""
    });

    const navigate = useNavigate();
    const userProfileId = JSON.parse(localStorage.getItem("userProfile")).id;

    useEffect(() => {
        getPost(postId).then((existingPost) => {
            console.log(existingPost);
            setPost({
                title: existingPost.title,
                caption: existingPost.caption,
                imageUrl: existingPost.imageUrl
            });
        });
    }, [postId]);

    const submit = (e) => {
        e.preventDefault();
        const updatedPost = {
            id: +postId,
            title: post.title,
            caption: post.caption,
            imageUrl: post.imageUrl,
            userProfileId: +userProfileId
        };

        console.log("updated post: ", updatedPost);
        editPost(updatedPost).then(() => {
            navigate(`/posts/${postId}`);
        });
    }

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
            <Card style={{ width: '500px', backgroundColor: 'white' }} className="col-sm-12 col-lg-6">

                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="imageUrl">Image URL</Label>
                                <Input
                                    id="imageUrl"
                                    value={post.imageUrl}
                                    onChange={(e) => {
                                        const postCopy = { ...post };
                                        postCopy.imageUrl = e.target.value;
                                        setPost(postCopy);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input
                                    id="title"
                                    value={post.title}
                                    onChange={(e) => {
                                        const postCopy = { ...post };
                                        postCopy.title = e.target.value;
                                        setPost(postCopy);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="caption">Description</Label>
                                <Input
                                    id="caption"
                                    value={post.caption}
                                    onChange={(e) => {
                                        const postCopy = { ...post };
                                        postCopy.caption = e.target.value;
                                        setPost(postCopy);
                                    }}
                                />
                            </FormGroup>
                        </Form>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            <Button color="green" onClick={() => navigate('/posts')}>
                                BACK
                            </Button>
                            <Button color="green" onClick={submit}>
                                SUBMIT
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};
