import React, { Component, Fragment } from "react";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

export class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      show: false,
      NotificationData: [],
      isLoading: "",
      mainDiv: "d-none",
      Notificationmsg: "",
      Notificationtitle: "",
      Notificationdate: "",
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

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (event) => {
    this.setState({ show: true });
    let Nmsg = event.target.getAttribute("data-message");
    let Ntitle = event.target.getAttribute("data-title");
    let Ndate = event.target.getAttribute("data-date");
    this.setState({
      Notificationmsg: Nmsg,
      Notificationtitle: Ntitle,
      Notificationdate: Ndate,
    });
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
            <Button className="btn btn-danger" onClick={this.handleShow}>
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
            <h2>Product Order History</h2>
          </div>
          <Row>{MyView}</Row>
        </Container>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Post Your Review
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>Review</h6>
            <p>review</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default OrderList;
