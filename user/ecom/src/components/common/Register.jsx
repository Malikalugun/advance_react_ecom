import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Navigate } from "react-router-dom";
export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
      loggedIn: false,
    };
  }
  // Register Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };
    axios
      .post(AppURL.UserRegister, data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.setState({ loggedIn: true });
        this.props.setUser(response.data.user);
      })
      .catch((error) => {});
  };
  render() {
    // after register redirect to
    if (this.state.loggedIn) {
      return <Navigate to={"/profile"} />;
    }
    if (!localStorage.getItem("token")) {
      return <Navigate to={"/profile"} />;
    }
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
                      <h4 className="section-title-login">User Signup</h4>
                      <input
                        onChange={(e) => {
                          this.setState({ name: e.target.value });
                        }}
                        type="text"
                        className="form-control m-2"
                        placeholder="Enter Your Name"
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
                        placeholder="Enter Your Password"
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
                        Sign Up
                      </Button>
                      <br></br>
                      <br></br>
                      <hr />
                      <p>
                        <b>
                          {" "}
                          Forget my password?{" "}
                          <Link to="/forget">Forget Password</Link>
                        </b>
                      </p>
                      <p>
                        <b>
                          Already have an account ?{" "}
                          <Link to="/login">Login</Link>
                        </b>
                      </p>
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
        </Fragment>
      </div>
    );
  }
}

export default Register;
