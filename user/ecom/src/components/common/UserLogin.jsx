import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Navigate } from "react-router-dom";

export class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      loggedIn: false,
    };
  }
  // login form method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(AppURL.UserLogin, data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.setState({ loggedIn: true });
        this.props.setUser(response.data.user);
      })
      .catch((error) => {});
  };

  render() {
    // after login redirect to profile page
    if (this.state.loggedIn) {
      return <Navigate to={"/profile"} />;
    }
    if (!localStorage.getItem("token")) {
      return <Navigate to={"/profile"} />;
    }
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
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login">User Signin</h4>
                    <input
                      type="email"
                      className="form-control m-2"
                      placeholder="Enter Your Email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <input
                      type="password"
                      className="form-control m-2"
                      placeholder="Enter Your Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
                      Login
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
                        Don't have an account ?{" "}
                        <Link to="/register">Register</Link>
                      </b>
                    </p>
                  </Form>
                </Col>
                <Col md={6} lg={6} sm={12} xs={12} className="p-0 m-0 Desktop">
                  <img src={Login} alt="" className="onboardBanner" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default UserLogin;
