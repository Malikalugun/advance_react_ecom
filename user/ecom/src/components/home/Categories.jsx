import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";

class Categories extends Component {
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
    const CatList = this.state.MenuData;
    const MyView = CatList.map((CatList, i) => {
      return (
        <Col
          key={i.toString()}
          className="p-0"
          xl={3}
          lg={3}
          md={6}
          sm={6}
          xs={6}
        >
          <Card className="h-100 w-100 text-center">
            <Card.Body>
              <img src={CatList.category_image} alt="" className="center" />
              <h5 className="category-name">{CatList.category_name}</h5>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> Category Products</h2>
            <p>Some of Our Exclusive Collection,You May Like</p>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
