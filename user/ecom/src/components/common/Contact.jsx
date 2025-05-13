import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";
export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form className="onboardForm">
                    <h4 className="section-title-login">Contact With Us</h4>
                    <h6 className="section-sub-title">
                      Please Contact With us
                    </h6>
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Enter Moble No."
                    />
                    <input
                      type="email"
                      className="form-control m-2"
                      placeholder="Enter Email"
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Enter Your Message"
                    />
                    <Button className="btn btn-block m-2 site-btn-login">
                      Next
                    </Button>
                  </Form>
                </Col>
                <Col md={6} lg={6} sm={12} xs={12} className="p-0 m-0 Desktop">
                  <br></br>
                  <br></br>
                  <p className="section-title-contact">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsum, rem blanditiis. Aperiam dolore vero modi corporis
                    officia alias labore molestiae repudiandae voluptatum.
                    Architecto recusandae repudiandae vitae quisquam cum soluta
                    placeat.
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0767083608!2d-74.30915277037441!3d40.6966726870191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1747099557560!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
