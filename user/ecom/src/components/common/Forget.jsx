import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Forget extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
    };
  }
  // forget password form
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };

    axios
      .post(AppURL.UserForgetPassword, data)
      .then((response) => {
        const message = response.data.message;
        this.setState({ message });
        toast.success(message, {
          position: "top-right",
        });
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
                    <Form className="onboardForm" onSubmit={this.formSubmit}>
                      <h4 className="section-title-login">Foget Password</h4>
                      <input
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                        type="email"
                        className="form-control m-2"
                        placeholder="Enter Your Email"
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

export default Forget;
