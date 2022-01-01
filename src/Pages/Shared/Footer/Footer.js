import React from "react";
import "./Footer.css";
import logo from "../../../images/cards.webp";
import logo1 from "../../../images/app-image.png";
import footer from "../../../images/footer1.jpg";
const footerBanner = {
  background: `url(${footer})`,
};
const Footer = () => {
  return (
    <div className="footer container-fluid ps-5" style={footerBanner}>
      <div className="row text-left">
        <div className="col-md-4 col-12">
          <h4>Useful Links</h4>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Return Policy</p>
          <p>Discount Coupons</p>
          <img src={logo} class="img-fluid mt-2" alt="card"></img>
        </div>

        <div className="col-md-4 col-12">
          <h4>Follow Us</h4>
          <p>Let us be social</p>
          <div className="column pt-2">
            <i className="fab fa-facebook-f fa-2x pe-2"></i>
            <i className="fab fa-instagram fa-2x pe-2"></i>
            <i className="fab fa-twitter fa-2x pe-2"></i>
            <i className="fab fa-youtube fa-2x"></i>
          </div>
          <p className="pt-4">
            Copyright ©2021 All rights reserved |<br /> This template is made
            with by
            <span className="title-header fw-bold"> Mehjabin Johra</span>
          </p>
        </div>
        <div className="col-md-4 col-12">
          <h4>Newsletter</h4>
          <p>Stay Updated</p>
          <form className="form-inline">
            <div className="col pl-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-dark text-white"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Email"
                />
                <div className="btn-submit px-3">Submit</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
