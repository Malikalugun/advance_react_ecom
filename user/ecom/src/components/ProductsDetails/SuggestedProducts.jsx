import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export class SuggestedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>You May Like</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  src="https://m.media-amazon.com/images/I/41Qk2Ca0TEL._SX300_SY300_QL70_FMwebp_.jpg"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Redmi 13 5G, Orchid Pink, 6GB+128GB1111
                  </p>
                  <p className="product-price-on-card">Price: ₹4599</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productsdetails">
                <Card className="image-box card">
                  <img
                    src="https://m.media-amazon.com/images/I/41QioujvLVL._SX300_SY300_QL70_FMwebp_.jpg"
                    alt=""
                    className="center"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Redmi 13 5G, Orchid Pink, 6GB+128GB
                    </p>
                    <p className="product-price-on-card">Price: ₹4599</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  src="https://m.media-amazon.com/images/I/41Wp0A8YaHL._SY300_SX300_.jpg"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Redmi 13 5G, Orchid Pink, 6GB+128GB
                  </p>
                  <p className="product-price-on-card">Price: ₹4599</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  src="https://m.media-amazon.com/images/I/417Vg7bMHXL._SX300_SY300_QL70_FMwebp_.jpg"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Redmi 13 5G, Orchid Pink, 6GB+128GB
                  </p>
                  <p className="product-price-on-card">Price: ₹4599</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  src="https://m.media-amazon.com/images/I/41X9qNxoJKL._SX300_SY300_QL70_FMwebp_.jpg"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Redmi 13 5G, Orchid Pink, 6GB+128GB
                  </p>
                  <p className="product-price-on-card">Price: ₹4599</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  src="https://m.media-amazon.com/images/I/4179exet8fL._SX300_SY300_QL70_FMwebp_.jpg"
                  alt=""
                  className="center"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Redmi 13 5G, Orchid Pink, 6GB+128GB
                  </p>
                  <p className="product-price-on-card">Price: ₹4599</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SuggestedProducts;
