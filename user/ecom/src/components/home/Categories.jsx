import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";
import CategoryLoading from "../common/Placeholder/CategoryLoading";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      MenuData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        this.setState({
          MenuData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
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
          xl={2}
          lg={2}
          md={3}
          sm={3}
          xs={6}
        >
          <Link
            to={"/productcategory/" + CatList.category_name}
            className="text-link"
          >
            <Card className="h-100 w-100 text-center">
              <Card.Body>
                <img src={CatList.category_image} alt="" className="center" />
                <h5 className="category-name">{CatList.category_name}</h5>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });
    return (
      <Fragment>
        <CategoryLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2> Category Products</h2>
              <p>Some of Our Exclusive Collection,You May Like</p>
            </div>
            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Categories;
