import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
class FooterMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback mt-5 pt-3 shadow-sm">
          <Container className="text-center">
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">Office Address</h5>
                <p>
                  1637 Franklin street montgomery 809090 <br></br>
                  Email:anna@gmail.com
                </p>
                <h5 className="footer-menu-title">Social Link</h5>
                <a href="#">
                  <i className="fab fa-facebook m-1"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter m-1"></i>
                </a>
                <a href="#">
                  <i className="fab fa-insstagram m-1"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook m-1"></i>
                </a>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">The Company</h5>
                <Link to="/about" className="footer-link">
                  About us
                </Link>
                <br></br>
                <Link to="/" className="footer-link">
                  Company Profile
                </Link>
                <br></br>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
                <br></br>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Row>
              <h6 className="text-white">
                @copyright 2025 by easy learning,All Right Reserved
              </h6>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterMobile;
