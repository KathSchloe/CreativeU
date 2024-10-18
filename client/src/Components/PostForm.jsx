import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Card,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { addPost } from "../services/PostService";
import './AddPost.css';  // Import your CSS file here

export const PostForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  const navigate = useNavigate();
  const userProfileId = JSON.parse(localStorage.getItem("userProfile")).id;

  const submit = (e) => {
    const post = {
      imageUrl,
      title,
      caption,
      userProfileId: +userProfileId,
    };

    addPost(post).then((p) => {
      navigate("/posts");
    });
  };

  return (
    
    <div className="container pt-4">
      <div className="row justify-content-center">
        <Card className="shadow-lg rounded">
          <CardBody className="d-flex align-items-start">
            <div className="left-section">
              <Form>
                <FormGroup>
                  <Label for="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="input mb-3"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    className="input mb-3"
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="right-section ms-4">
              <FormGroup>
                <Label for="caption">Description</Label>
                <Input
                  id="caption"
                  onChange={(e) => setCaption(e.target.value)}
                  className="input mb-3"
                />
              </FormGroup>
              <Button color="green" onClick={submit} className="btn-lg">
                SUBMIT
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
