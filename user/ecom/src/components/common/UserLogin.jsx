import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png";
import { Link } from "react-router-dom";
export class UserLogin extends Component {
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
                    <h4 className="section-title-login">User Signin</h4>
                    <input
                      type="email"
                      className="form-control m-2"
                      placeholder="Enter Your Email"
                    />
                    <input
                      type="password"
                      className="form-control m-2"
                      placeholder="Enter Your Password"
                    />
                    <Button className="btn btn-block m-2 site-btn-login">
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
