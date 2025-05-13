import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlide from "./HomeSlide";

class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className="m-0 overflow-hidden" fluid={true}>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu />
            </Col>
            <Col lg={9} md={9} sm={12}>
              <HomeSlide />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HomeTop;
