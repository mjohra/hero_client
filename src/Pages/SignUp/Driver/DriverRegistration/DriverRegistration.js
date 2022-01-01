import React from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import register from "../../../../images/registration.jpg";
import Header from "../../../Shared/Header/Header";
import "./DriverRegistration.css";

const DriverRegistration = () => {
  const {
    handleRegistration,
    handleAreaChange,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    error,
    handleAgeChange,
    handleAddressChange,
    handlePhoneChange,
    handleLicensePhotoChange,
    handleNidChange,
    handleProfileChange,
    handleCarInfoChange,
    user,
  } = useAuth();
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = (data) => {
    
//     registerNewUser(data.email, data.password, data.name,data.age,data.address,data.phone,data.licencePhoto,data.nid,data.profile,data.carInfo);
//     reset();
//   };
  
  
  return (
    <>
     <Header></Header>
      <Container className="text-center">
        <Row>
          <Col className="text center" lg={4} md={6} sm={12}>
            <h3 className="text-center pb-4 icon-reg">
              <i class="fas fa-user-plus icon-color"></i> Rider Registration
            </h3>
            <Form onSubmit={handleRegistration}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  onBlur={handleNameChange}
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onBlur={handleEmailChange}
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Control
                  type="number"
                  onBlur={handleAgeChange}
                  placeholder="Enter Age"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicArea">
                <Form.Control
                  type="text"
                  onBlur={handleAreaChange}
                  placeholder="Enter Area"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Control
                  type="text"
                  onBlur={handleAddressChange}
                  placeholder="Enter Address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control
                  type="text"
                  onBlur={handlePhoneChange}
                  placeholder="Enter Phone"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFile">
                <Form.Control
                  type="text"
                  onBlur={handleLicensePhotoChange}
                  placeholder="Enter Licence Photo URL"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFile">
                <Form.Control
                  type="text"
                  onBlur={handleNidChange}
                  placeholder="Enter Nid Photo"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFile">
                <Form.Control
                  type="text"
                  onBlur={handleProfileChange}
                  placeholder="Enter Profile picture"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCar">
              <Form.Control as="textarea" rows={3} 
              onBlur={handleCarInfoChange}
              placeholder="Enter name, model, name palate"
              />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  onBlur={handlePasswordChange}
                  placeholder="Password"
                />
              </Form.Group>
              <div className="row mb-3 text-danger">{error}</div>
              <Button
                className="btn-submit my-3 px-5 "
                variant="btn-block"
                type="submit"
              >
                Register
              </Button>
              <p>
              Join as a Driving Lesson Learner<Link to="/learner_register"> learner Registration</Link>
              </p>
              <p>
              Already Registered? <Link to="/user_login">Login</Link>
              </p>
            </Form>
            <br />
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img className="img-fluid" src={register} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
    }

export default DriverRegistration;
