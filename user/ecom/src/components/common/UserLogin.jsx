import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png";
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
                    <h6 className="section-sub-title">
                      Please Enyter Your Mobile
                    </h6>
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Enter Moble No."
                    />
                    <Button className="btn btn-block m-2 site-btn-login">
                      Next
                    </Button>
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
