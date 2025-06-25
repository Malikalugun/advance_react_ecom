import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
    };
  }
  // resetpassword form start
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };
    axios
      .post(AppURL.UserResetPassword, data)
      .then((response) => {
        const message = response.data.message;
        this.setState({ message });
        toast.success(message, {
          position: "top-right",
        });
        document.getElementById("formreset").reset();
      })

      .catch((error) => {
        const message = error.response?.data?.message || "Something went wrong";
        this.setState({ message });
        toast.error(message, {
          position: "top-right",
        });
      });
  };
  render() {
    return (
      <div>
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
                      onSubmit={this.formSubmit}
                      id="formreset"
                    >
                      <h4 className="section-title-login">User Signup</h4>
                      <input
                        onChange={(e) => {
                          this.setState({ token: e.target.value });
                        }}
                        type="text"
                        className="form-control m-2"
                        placeholder="Enter Your Pin Code"
                      />
                      <input
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                        type="email"
                        className="form-control m-2"
                        placeholder="Enter Your Email"
                      />
                      <input
                        onChange={(e) => {
                          this.setState({ password: e.target.value });
                        }}
                        type="password"
                        className="form-control m-2"
                        placeholder="Enter Your New Password"
                      />
                      <input
                        type="password"
                        onChange={(e) => {
                          this.setState({
                            password_confirmation: e.target.value,
                          });
                        }}
                        className="form-control m-2"
                        placeholder="Enter Your Confirm Password"
                      />
                      <Button
                        type="submit"
                        className="btn btn-block m-2 site-btn-login"
                      >
                        Reset Password
                      </Button>
                    </Form>
                  </Col>
                  <Col
                    md={6}
                    lg={6}
                    sm={12}
                    xs={12}
                    className="p-0 m-0 Desktop"
                  >
                    <img src={Login} alt="" className="onboardBanner" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <ToastContainer />
        </Fragment>
      </div>
    );
  }
}

export default ResetPassword;
