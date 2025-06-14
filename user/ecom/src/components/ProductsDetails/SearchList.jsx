// components/ProductsDetails/SearchList.jsx
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export class SearchList extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const ProductData = Array.isArray(this.props.ProductData)
      ? this.props.ProductData
      : [];

    const SearchKey = this.props.SearchKey;

    const MyView = ProductData.map((ProductList, i) => {
      const isSpecial = ProductList.special_price !== "na";
      return (
        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} key={i}>
          <Link to={`/productsdetails/${ProductList.id}`} className="text-link">
            <Card className="image-box card w-100">
              <img src={ProductList.image} alt="" className="center w-75" />
              <Card.Body>
                <p className="product-name-on-card">{ProductList.title}</p>
                <p className="product-price-on-card">
                  Price:{" "}
                  {isSpecial ? (
                    <>
                      <strike className="text-secondary">
                        ₹{ProductList.price}
                      </strike>{" "}
                      ₹{ProductList.special_price}
                    </>
                  ) : (
                    <>₹{ProductList.price}</>
                  )}
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="breadcrumbactive">
                <Link to={`/productbysearch/${SearchKey}`}>
                  Search For: {SearchKey}
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="section-title text-center mb-55">
            <h2>{SearchKey}</h2>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SearchList;
