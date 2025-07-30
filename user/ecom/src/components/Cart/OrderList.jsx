import React, { Component, Fragment } from "react";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import cogoToast from "cogo-toast";
export class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      show: false,
      NotificationData: [],
      isLoading: "",
      mainDiv: "d-none",

      name: "",
      rating: "",
      comment: "",
      product_name: "",
      product_code: "",
      ReviewModel: false,
    };
  }

  componentDidMount() {
    const email = this.props.user.email;
    axios
      .get(AppURL.OrderListByUser(email))
      .then((response) => {
        this.setState({ ProductData: response.data });
      })
      .catch((error) => {
        console.error("Order fetch error:", error);
      });
  }

  ReviewModelOpen = (product_code, product_name) => {
    this.setState({
      ReviewModel: true,
      product_code: product_code,
      product_name: product_name,
    });
  };
  ReviewModelClose = () => {
    this.setState({ ReviewModel: false });
  };

  nameOnChnage = (e) => {
    let name = e.target.value;
    this.setState({ name: name });
  };
  ratingOnChange = (e) => {
    let rating = e.target.value;
    this.setState({ rating: rating });
  };
  commentOnChnage = (e) => {
    let comment = e.target.value;
    this.setState({ comment: comment });
  };
  PostReview = (e) => {
    let product_code = this.state.product_code;
    let product_name = this.state.product_name;
    let name = this.state.name;
    let rating = this.state.rating;
    let comment = this.state.comment;
    if (name.length === 0) {
      cogoToast.error("Name is Required", { position: "top-right" });
    } else if (comment.length === 0) {
      cogoToast.error("Comment is Required", { position: "top-right" });
    } else if (rating.length === 0) {
      cogoToast.error("Rating id Required", { position: "top-right" });
    } else if (comment.length > 150) {
      cogoToast.error("Comment can't more than 150 character", {
        position: "top-right",
      });
    } else {
      let MyFormData = new FormData();
      MyFormData.append("product_code", product_code);
      MyFormData.append("product_name", product_name);
      MyFormData.append("reviewer_name", name);
      MyFormData.append("reviewer_photo", "");
      MyFormData.append("reviewer_rating", rating);
      MyFormData.append("reviewer_comment", comment);
      MyFormData.append("delivery_charge", "00");
      axios
        .post(AppURL.PostReview, MyFormData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success("Review Submitted", { position: "top-right" });
            this.ReviewModelClose();
          } else {
            cogoToast.error("Your Request is not don ! Try Again", {
              position: "top-right",
            });
          }
        })
        .catch((error) => {
          cogoToast.error("Your Request is not done ! Try Again", {
            position: "top-right",
          });
        });
    }
  };
  render() {
    const MyList = this.state.ProductData;

    const MyView = MyList.map((productList, i) => (
      <Col md={6} lg={4} sm={12} xs={12} key={i} className="mb-3">
        <Card>
          <Card.Body>
            <h5 className="product-name">{productList.product_name}</h5>
            <h6>Quantity: {productList.quantity}</h6>
            <p>
              Size: {productList.size} | Color: {productList.color}
            </p>
            <h6>
              Price: {productList.unit_price} x {productList.quantity} ={" "}
              {productList.total_price}$
            </h6>
            <h6>Status = {productList.order_status}</h6>

            <Button
              className="btn btn-danger"
              onClick={this.ReviewModelOpen.bind(
                this,

                productList.product_code,
                productList.product_name
              )}
            >
              Post Review
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));

    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-4">
            <h2>Product Order History By ({this.props.user.name})</h2>
          </div>
          <Row>{MyView}</Row>
        </Container>
        <Modal show={this.state.ReviewModel} onHide={this.ReviewModelClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Post Your Review
            </h6>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                <label className="form-label">Your Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder={this.props.user.name}
                  onChange={this.nameOnChnage}
                />
              </div>
              <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                <label className="form-label">Select Product Rating</label>
                <select className="form-control" onChange={this.ratingOnChange}>
                  <option value="">Choose</option>
                  <option value="1">1</option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                <label className="form-label">Your Comment</label>
                <textarea
                  row={2}
                  className="form-control"
                  type="text"
                  placeholder="Your message"
                  onChange={this.commentOnChnage}
                ></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.PostReview}>
              Post
            </Button>
            <Button variant="secondary" onClick={this.ReviewModelClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default OrderList;
