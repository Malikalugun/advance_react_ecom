import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";
export class Purches extends Component {
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
              <Form className="onboardForm">
                <h4 className="section-title-login">Purches Page</h4>

                <p className="section-title-contact">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iure, quae nisi! Cum ratione quaerat molestiae similique
                  cupiditate ullam, beatae quos. <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iure, quae nisi! Cum ratione quaerat molestiae similique
                  cupiditate ullam, beatae quos. <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iure, quae nisi! Cum ratione quaerat molestiae similique
                  cupiditate ullam, beatae quos.
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Purches;
