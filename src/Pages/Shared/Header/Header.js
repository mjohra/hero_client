import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut,logOutAdmin } = useAuth();
  const loggedIn = localStorage.getItem("login");
  return (
<div>
    <h1>header</h1>
      <Navbar expand="lg" variant="dark" fixed="top" className="details">
        <Container fluid className="nav-detail text-white">
          <Navbar.Brand href="#home">
              PH
          </Navbar.Brand>
          <Navbar.Toggle className="tog" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">
                Admin Login
              </Nav.Link>
            {
              (loggedIn)&& (
                <Nav.Link as={Link} to="/rider">
                  Rider
                </Nav.Link>
              )
            }
            {
              (loggedIn)&& (
                <Nav.Link as={Link} to="/learner">
                  Learner
                </Nav.Link>
              )
            }
            {
              (loggedIn)&& (
                <Button className="me-2 btn-buy" onClick={logOutAdmin}>
                Logout
              </Button>
              )
            }
            {user?.email ? (
              <Button className="me-2 btn-buy" onClick={logOut}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/register">User Registration</Nav.Link>
            )}
            <Navbar.Text>
              <h5 className="text-gray">
                {user?.displayName}
              </h5>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
