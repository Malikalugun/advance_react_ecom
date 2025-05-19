import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import validation from "../../validation/validation";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  nameOnChange = (event) => {
    let name = event.target.value;
    this.setState({ name: name });
  };
  emailOnChange = (event) => {
    let email = event.target.value;
    this.setState({ email: email });
  };
  messageOnChange = (event) => {
    let message = event.target.value;
    this.setState({ message: message });
  };
  onFormSubmit = (event) => {
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let sentBtn = document.getElementById("sentBtn");
    let contactForm = document.getElementById("contactForm");
    if (message.length == 0) {
      toast.error("please write your message");
    } else if (name.length == 0) {
      toast.error("Please write down your name");
    } else if (email.length == 0) {
      toast.error("Please write your email");
    } else if (!validation.NameRegx.test(name)) {
      toast.error("Invalid name");
    } else {
      sentBtn.innerHTML = "Sending...";
      let MyFormData = new FormData();
      MyFormData.append("name", name);
      MyFormData.append("email", email);
      MyFormData.append("message", message);
      axios
        .post(AppURL.PostContact, MyFormData)
        .then(function (response) {
          if (response.status == 200 && response.data == 1) {
            toast.success("Message send successfully");
            sentBtn.innerHTML = "Send";
            contactForm.reset();
          } else {
            toast.error("error");
            sentBtn.innerHTML = "Send";
          }
        })
        .catch(function (error) {
          toast.error(error);
          sentBtn.innerHTML = "Send";
        });
    }
    event.preventDefault();
  };
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
                  <Form
                    className="onboardForm"
                    onSubmit={this.onFormSubmit}
                    id="contactForm"
                  >
                    <h4 className="section-title-login">Contact With Us</h4>
                    <h6 className="section-sub-title">
                      Please Contact With us
                    </h6>
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Enter Name."
                      onChange={this.nameOnChange}
                    />
                    <input
                      type="email"
                      className="form-control m-2"
                      placeholder="Enter Email"
                      onChange={this.emailOnChange}
                    />
                    <Form.Control
                      className="form-control m-2"
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                      onChange={this.messageOnChange}
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                      id="sentBtn"
                    >
                      Submit
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
                    styles=" border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Contact;
