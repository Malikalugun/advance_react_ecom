import React, { Component, Fragment } from "react";
import { Navbar, Container, Row, Col, Button, Card } from "react-bootstrap";
import Product1 from "../../assets/images/product/product1.png";
import axios from "axios";
import AppURL from "../../api/AppURL";
import cogoToast from "cogo-toast";
import { Redirect } from "react-router";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      inLoading: "",
      mainDiv: "d-none",
      PageRefreshStatus: "false,",
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.CartList(this.props.user.email))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }
  removeItem = (id) => {
    axios
      .get(AppURL.RemoveCartList(id))
      .then((response) => {
        // Check if response.data is exactly 1
        if (response.data === 1) {
          cogoToast.success("Product removed successfully", {
            position: "top-right",
          });
          this.setState({ PageRefreshStatus: true });
        } else {
          cogoToast.error(
            "Your request could not be completed. Please try again.",
            {
              position: "top-right",
            }
          );
        }
      })
      .catch((error) => {
        cogoToast.error("Something went wrong. Please try again.", {
          position: "top-right",
        });
      });
  };
  ItemPlus = (id, quantity, total_price) => {
    axios
      .get(AppURL.CartItemPlus(id, quantity, total_price))
      .then((response) => {
        if (response.data === 1) {
          cogoToast.success("Item Quantity Increase", {
            position: "top-right",
          });
          this.setState({ PageRefreshStatus: true });
        } else {
          cogoToast.error("Your Request is not done! Try it again", {
            position: "top-right",
          });
        }
      })
      .catch((error) => {
        cogoToast.error("Your Request is not done catch! Try it again", {
          position: "top-right",
        });
      });
  };
  ItemMinus = (id, quantity, total_price) => {
    axios
      .get(AppURL.CartItemMinus(id, quantity, total_price))
      .then((response) => {
        if (response.data === 1) {
          cogoToast.success("Item Quantity Decrease", {
            position: "top-right",
          });
          this.setState({ PageRefreshStatus: true });
        } else {
          cogoToast.error("Your Request is not done! Try it again", {
            position: "top-right",
          });
        }
      })
      .catch((error) => {
        cogoToast.error("Your Request is not done! Try it again", {
          position: "top-right",
        });
      });
  };
  PageRefresh = () => {
    if (this.state.PageRefreshStatus === true) {
      let URL = window.location;
      return <Redirect to={URL} />;
    }
  };
  render() {
    const CartList = this.state.ProductData;
    const MyView = CartList.map((productList, i) => {
      return (
        <div>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} lg={3} sm={6} xs={6}>
                  <img className="cart-product-img" src={productList.image} />
                </Col>
                <Col md={6} lg={6} sm={6} xs={6}>
                  <h5 className="product-name">{productList.product_name}</h5>
                  <h6> Quantity = {productList.quantity} </h6>
                  <p>
                    {productList.size} | {productList.color}
                  </p>
                  <h6>
                    Price = {productList.unit_price} x {productList.quantity} ={" "}
                    {productList.total_price}
                  </h6>
                </Col>
                <Col md={3} lg={3} sm={12} xs={12}>
                  <Button
                    className="btn mt-3 mx-1 btn-lg site-btn"
                    onClick={() => this.removeItem(productList.id)}
                  >
                    <i className="fa fa-trash-alt"></i>{" "}
                  </Button>
                  <Button
                    className="btn mt-3 mx-1 btn-lg site-btn"
                    onClick={() =>
                      this.ItemPlus(
                        productList.id,
                        productList.quantity,
                        productList.unit_price
                      )
                    }
                  >
                    <i className="fa fa-plus"></i>{" "}
                  </Button>
                  <Button
                    className="btn mt-3 mx-1 btn-lg site-btn"
                    onClick={() =>
                      this.ItemMinus(
                        productList.id,
                        productList.quantity,
                        productList.total_price
                      )
                    }
                  >
                    <i className="fa fa-minus"></i>{" "}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      );
    });
    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2>Product Cart List</h2>
          </div>
          <Row>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              {MyView}
            </Col>

            {/* <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={4} lg={4} sm={6} xs={6}>
                      <h5> Total Item = 05 </h5>
                      <h5>Total Price = 5000$</h5>
                      <Button className="btn btn-block w-100 mt-3  site-btn">
                        <i className="fa fa-shopping-cart"></i> CheckOut{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Container>
        {this.PageRefresh()}
      </Fragment>
    );
  }
}
export default Cart;
