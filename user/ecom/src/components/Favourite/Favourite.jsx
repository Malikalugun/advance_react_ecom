// import { Button } from "bootstrap";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export class Favourite extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>My Favourite Item</h2>
            <p>Some of Our Exclusive Collection,You May like</p>
          </div>
          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  src="https://m.media-amazon.com/images/I/71XNV9ghatL._SX569_.jpg"
                  alt=""
                  className="center w-75"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Symbol Premium Men's Wrinkle-Resistant
                  </p>
                  <p className="product-price-on-card">Price: ₹599</p>
                  <Button className="btn btn-sm">
                    <i className="fa fa-trash-alt"> </i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  src="https://m.media-amazon.com/images/I/81Be4hgx1gL._SY879_.jpg"
                  alt=""
                  className="center w-75"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Symbol Premium Men's Wrinkle-Resistant
                  </p>
                  <p className="product-price-on-card">Price: ₹599</p>
                  <Button className="btn btn-sm">
                    <i className="fa fa-trash-alt"> </i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  src="https://m.media-amazon.com/images/I/61mwNI+EUhL._SY879_.jpg"
                  alt=""
                  className="center w-75"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Symbol Premium Men's Wrinkle-Resistant
                  </p>
                  <p className="product-price-on-card">Price: ₹599</p>
                  <Button className="btn btn-sm">
                    <i className="fa fa-trash-alt"> </i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  src="https://m.media-amazon.com/images/I/61aZMa-pTrL._SX569_.jpg"
                  alt=""
                  className="center w-75"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Symbol Premium Men's Wrinkle-Resistant
                  </p>
                  <p className="product-price-on-card">Price: ₹599</p>
                  <Button className="btn btn-sm">
                    <i className="fa fa-trash-alt"> </i> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Favourite;
