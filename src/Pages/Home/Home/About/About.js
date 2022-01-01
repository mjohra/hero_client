import React from "react";
import "./About.css";
import bg1 from "../../../../images/bg1.jpeg";
import bg2 from "../../../../images/bg2.jpeg";
import bg3 from "../../../../images/bg3.jpeg";
import { Carousel } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <div className="container text-center mt-5 mb-5">
        <h1 className="p-5 text-center main-title mt-5">About Us</h1>
        <div className="row g-0">
          <div className="col-md-6 col-12 cover">
            <Carousel fade controls={false}>
              <Carousel.Item>
                <img className="d-block w-100" src={bg1} alt="First slide" />
                <Carousel.Caption>
                  <h2 className="p-3">Hero Rider</h2>

                  <p>
                    ‘Hero Rider’ is a ride sharing startup. A driver who has
                    his/her own or rented car can give rides to other people.
                    They also provide driving lessons services.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={bg3} alt="Second slide" />

                <Carousel.Caption>
                  <h2 className="p-3">FOLLOW US</h2>
                  <div>
                    <i className="me-2 fab fa-facebook-f fa-2x"></i>
                    <i className="me-2 fab fa-twitter fa-2x"></i>
                    <i className="fab fa-instagram fa-2x"></i>
                    <h4 className="p-2">
                      <i className="fas fa-phone-alt "></i> +880173452922
                    </h4>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6 col-12">
            <img className="w-100" src={bg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
