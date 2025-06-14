import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";
import FeaturedLoading from "../common/Placeholder/FeaturedLoading";
class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark("Featured"))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  render() {
    const FeaturedList = this.state.ProductData;
    const MyView = FeaturedList.map((product, i) => {
      if (product.special_price === "na") {
        return (
          <Col className="p-1" key={i} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link className="text-link" to={"/productsdetails/" + product.id}>
              <Card className="image-box card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">
                    Price: ₹{product.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-1" key={i} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link className="text-link" to={"/productsdetails/" + product.id}>
              <Card className="image-box card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">
                    Price:{" "}
                    <strike className="text-secondary">₹{product.price}</strike>{" "}
                    ₹{product.special_price}
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
        <FeaturedLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>Featured Products</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
