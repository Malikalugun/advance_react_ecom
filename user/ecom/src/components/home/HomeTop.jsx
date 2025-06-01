import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlide from "./HomeSlide";
import axios from "axios";
import AppURL from "../../api/AppURL";

class HomeTop extends Component {
  constructor() {
    super();
    this.state = {
      MenuData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        this.setState({ MenuData: response.data });
      })
      .catch((error) => {});
  }
  render() {
    return (
      <Fragment>
        <Container className="m-0 overflow-hidden" fluid={true}>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data={this.state.MenuData} />
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
