import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import cogoToast from "cogo-toast";
import { Redirect } from "react-router";

class Favourite extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.FavouriteList(this.props.user.email))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: " ",
          PageRefreshStatus: false,
        });
      })
      .catch((error) => {});
  }
  removeItem = (event) => {
    let product_code = event.target.getAttribute("data-code");
    let email = this.props.user.email;
    axios
      .get(AppURL.FavouriteRemove(product_code, email))
      .then((response) => {
        cogoToast.success("Product is remove from favourites List", {
          position: "top-right",
        });
        this.setState({ PageRefreshStatus: true });
      })
      .catch((error) => {
        cogoToast.error("Your request is not done ! try it again!", {
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
    const FavList = this.state.ProductData;
    const MyView = FavList.map((ProductList, i) => {
      return (
        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
            <img className="center w-75" src={ProductList.image} />
            <Card.Body>
              <p className="product-name-on-card">{ProductList.title}</p>

              <Button
                data-code={ProductList.product_code}
                onClick={this.removeItem}
                className="btn btn-sm"
              >
                {" "}
                <i className="fa fa-trash-alt"></i> Remove{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> MY FAVOURITE ITEMS</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>{MyView}</Row>
        </Container>
        {this.PageRefresh}
      </Fragment>
    );
  }
}

export default Favourite;
