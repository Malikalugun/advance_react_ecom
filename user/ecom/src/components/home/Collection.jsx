import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark("Collection"))
      .then((response) => {
        this.setState({ ProductData: response.data });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }
  render() {
    const CollectionList = this.state.ProductData;
    const MyView = CollectionList.map((collection, i) => {
      if (collection.special_price === "na") {
        return (
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img src={collection.image} alt="" className="center w-75" />
              <Card.Body>
                <p className="product-name-on-card">{collection.title}</p>
                <p className="product-price-on-card">
                  Price: ₹{collection.price}
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      } else {
        return (
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
              <img src={collection.image} alt="" className="center w-75" />
              <Card.Body>
                <p className="product-name-on-card">{collection.title}</p>
                <p className="product-price-on-card">
                  Price:{" "}
                  <strike className="text-secondary">
                    ₹{collection.price}
                  </strike>{" "}
                  ₹{collection.special_price}
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      }
    });
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>product Collection</h2>
            <p>Some of Our Exclusive Collection,You May like</p>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Collection;
