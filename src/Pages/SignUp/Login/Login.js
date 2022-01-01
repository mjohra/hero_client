import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import './Login.css'

const Login = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  let redirect = location.state?.from || "/";
  console.log(redirect);
  const { adminLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <Container className="p-5 text center login">
        <Row>
          <Col className="mt-5 text center" lg={12} md={10} sm={12}>
            <h1 className="text-center pb-4 icon-lock mt-5">
              <i class="fas fa-user-lock me-3"></i>Login
            </h1>
            <form className="form-details">
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                className="field"
                placeholder="Your Email"
              />
              <input
                onBlur={handlePassword}
                type="password"
                name="password"
                className="field"
                placeholder="Password"
              />
              <input
                type="button"
                value="Login"
                className="btn-sub"
                onClick={() => adminLogin(email, password, redirect)}
              />
            </form>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Login;
