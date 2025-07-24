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
      PageRefreshStatus: "false",
      confirmBtn: "Confirm Order",
      city: "",
      payment: "",
      name: "",
      address: "",
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
  cityOnChange = (event) => {
    let city = event.target.value;
    this.setState({ city: city });
  };
  paymentOnChange = (event) => {
    let payment = event.target.value;
    this.setState({
      payment: payment,
    });
  };
  nameOnChange = (event) => {
    let name = event.target.value;
    this.setState({ name: name });
  };
  addressOnChange = (event) => {
    let address = event.target.value;
    this.setState({ address: address });
  };
  confirmOnClick = () => {
    let city = this.state.city;
    let payement = this.state.payment;
    let name = this.state.name;
    let address = this.state.address;
    let email = this.props.user.email;
    if (city.length === 0) {
      cogoToast.error("Please select City ", { position: "top-right" });
    } else if (payement.length === 0) {
      cogoToast.error("Please select Payment ", { position: "top-right" });
    } else if (name.length === 0) {
      cogoToast.error("Please enter your Name ", { position: "top-right" });
    } else if (address.length === 0) {
      cogoToast.error("Please enter your Address ", { position: "top-right" });
    }
  };
  render() {
    const CartList = this.state.ProductData;
    let totalPriceSum = 0;
    const MyView = CartList.map((productList, i) => {
      totalPriceSum = totalPriceSum + parseInt(productList.total_price);
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
        <Container fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Product Cart List</h2>
          </div>
          <Row>
            <Col className="p-1" lg={7} md={7} sm={12} xs={12}>
              {MyView}
            </Col>
            <Col className="p-1" lg={5} md={5} sm={12} xs={12}>
              <div className="card p-2">
                <div className="card-body">
                  <div className="container-fluid ">
                    <div className="row">
                      <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                        <h5 className="Product-Name text-danger">
                          Total Due: {totalPriceSum} $
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Choose City</label>
                        <select
                          className="form-control"
                          onChange={this.cityOnChange}
                        >
                          <option value="">Choose</option>
                          <option value="Dhaka">Assam</option>
                          <option value="Dhaka">Bihar </option>
                          <option value="Dhaka">Goa </option>
                          <option value="Dhaka">Gujarat </option>
                          <option value="Dhaka">Himachal Pradesh </option>
                          <option value="Dhaka">Punjab </option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">
                          Choose Payment Method
                        </label>
                        <select
                          className="form-control"
                          onChange={this.paymentOnChange}
                        >
                          <option value="">Choose</option>
                          <option value="Cash On Delivery">
                            Cash On Delivery
                          </option>
                          <option value="Cash On Delivery">Stripe</option>
                        </select>
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Your Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                          onChange={this.nameOnChange}
                        />
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <label className="form-label">Delivery Address</label>
                        <textarea
                          rows={2}
                          className="form-control"
                          type="text"
                          placeholder=""
                          onChange={this.addressOnChange}
                        />
                      </div>
                      <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                        <button
                          className="btn  site-btn"
                          onClick={this.confirmOnClick}
                        >
                          {this.state.confirmBtn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {this.PageRefresh()}
      </Fragment>
    );
  }
}
export default Cart;
