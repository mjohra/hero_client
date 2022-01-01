import React from 'react';
import {Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link,useLocation,useNavigate } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg';

const UserLogin = () => {
    const{signInUsingGoogle,processLogin,handleEmailChange,handlePasswordChange, setIsLoading,setUser,setError,saveUser,user}=useAuth();
    const location=useLocation();
    const navigate=useNavigate();
    const redirect=location.state?.from ||'/rider_dash';
    const handleEmailSignIn=(e)=>{
        e.preventDefault();
        processLogin()
        .then((result) => {
          const user = result.user;
          navigate(redirect);
          console.log(user);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
      }
    return (
        <>
            <Container className="p-5 text center">
          <Row>
            <Col className="mt-5 text center" lg={6} md={6} sm={12}>
                <h3 className="text-center pb-4 icon-lock"><i class="fas fa-user-lock me-2"></i>Login</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control onBlur={handleEmailChange}  type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control  onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
  
                <Button onClick={handleEmailSignIn} className="my-3 px-5 btn-buy" variant="primary btn-submit" type="submit">
                  Login
                </Button>
                <p>New User? <Link to ="/register">Create Account</Link></p>
              </Form>
              <br />
              {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            </Col>
            <Col lg={6} md={6} sm={12}>
                 <img className="img-fluid" src={login} alt="" />
            </Col>
          </Row>
        </Container>
        </>
    );
};

export default UserLogin;