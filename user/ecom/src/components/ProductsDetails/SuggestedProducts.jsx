import axios from "axios";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";

export class SuggestedProducts extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
    };
  }

  componentDidMount() {
    const subcategory = this.props.subcategory;
    axios
      .get(AppURL.SimilarProduct(subcategory))
      .then((response) => {
        this.setState({ ProductData: response.data });
      })
      .catch((error) => {
        console.error("Failed to fetch suggested products", error);
      });
  }

  render() {
    const MyList = this.state.ProductData;

    const MyView = MyList.map((ProductList, i) => (
      <Col className="p-1" key={i} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link className="text-link" to={`/productsdetails/${ProductList.id}`}>
          <Card className="image-box card">
            <img
              src={ProductList.image}
              alt={ProductList.title}
              className="center"
            />
            <Card.Body>
              <p className="product-name-on-card">{ProductList.title}</p>
              {ProductList.special_price === "na" ? (
                <p className="product-price-on-card">
                  Price: ₹{ProductList.price}
                </p>
              ) : (
                <p className="product-price-on-card">
                  Price: <strike>₹{ProductList.price}</strike> ₹
                  {ProductList.special_price}
                </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    ));

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>You May Like</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          {MyList.length > 0 ? (
            <Row>{MyView}</Row>
          ) : (
            <p>There have no similar products</p>
          )}
        </Container>
      </Fragment>
    );
  }
}

export default SuggestedProducts;
