import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, Link } from "react-router-dom";
import { login } from "./services/UserService";
import "./login.css";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const loginSubmit = (e) => {
    e.preventDefault();
    login({ email })
      .then(r => {
        if (r) {
          setIsLoggedIn(true);
          navigate('/');
        } else {
          alert("Invalid email");
        }
      });
  };

  return (
    
    <div className="login-container">
      <h1>CreativeU</h1>
      <h3>the hobby app</h3>
      <div className="login-box">
        <Form onSubmit={loginSubmit}>
          <fieldset>
            <FormGroup>
              <Label for="email">⋞Email⋟</Label>
              <Input
                id="email"
                type="text"
                className="auth-form-input"
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Button className="auth-button">Login</Button>
            </FormGroup>
            <em className="register-link">
              Not registered? <Link to="/register">Register</Link>
            </em>
          </fieldset>
        </Form>
      </div>
    </div>
  );
}
