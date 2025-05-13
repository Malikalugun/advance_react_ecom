import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeSlide from "./HomeSlide";
class HomeTopMobile extends Component {
  render() {
    return (
      <Fragment>
        <Container className="m-0 overflow-hidden" fluid={true}>
          <Row className="p-0 m-0 overflow-hidden">
            <Col lg={12} md={12} sm={12}>
              <HomeSlide />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HomeTopMobile;
