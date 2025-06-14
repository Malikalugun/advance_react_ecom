import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
export default class SubCategory extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const MyList = this.props.ProductData;
    const Category = this.props.Category;
    const subCategoryName = this.props.SubCategory;
    const MyView = MyList.map((ProductList, i) => {
      if (ProductList.special_price === "na") {
        return (
          <Col key={i} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Link
              to={"/productsdetails/" + ProductList.id}
              className="text-link"
            >
              <Card className="image-box card w-100">
                <img src={ProductList.image} alt="" className="center w-75" />
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.title}</p>
                  <p className="product-price-on-card">
                    Price: ₹{ProductList.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col key={i} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Link
              to={"/productsdetails/" + ProductList.id}
              className="text-link"
            >
              <Card className="image-box card w-100">
                <img src={ProductList.image} alt="" className="center w-75" />
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.title}</p>
                  <p className="product-price-on-card">
                    Price:{" "}
                    <strike className="text-secondary">
                      ₹{ProductList.price}
                    </strike>{" "}
                    ₹{ProductList.special_price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumbactive">
                <Link to={"/productcategory/" + Category}>{Category}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="breadcrumbactive">
                <Link
                  to={"/productsubcategory/" + Category + "/" + subCategoryName}
                >
                  {subCategoryName}
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="section-title text-center mb-55">
            <h2>
              {Category}/{subCategoryName}
            </h2>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}
