import React, { Component, Fragment } from "react";
import { Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";
import NewArrivelLoading from "../common/Placeholder/NewArrivelLoading";

class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark("New"))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }
  render() {
    const NewList = this.state.ProductData;
    const MyView = NewList.map((newlist, i) => {
      if (newlist.special_price === "na") {
        return (
          <div>
            <Link to={"/productsdetails/" + newlist.id} className="text-link">
              <Card className="image-box card">
                <img src={newlist.image} alt="" className="center" />
                <Card.Body>
                  <p className="product-name-on-card">{newlist.title}</p>
                  <p className="product-price-on-card">
                    Price: ₹{newlist.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      } else {
        return (
          <div>
            <Link to={"/productsdetails/" + newlist.id} className="text-link">
              <Card className="image-box card">
                <img src={newlist.image} alt="" className="center" />
                <Card.Body>
                  <p className="product-name-on-card">{newlist.title}</p>
                  <p className="product-price-on-card">
                    Price: ₹{newlist.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      }
    });
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <NewArrivelLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center">
            <div className="section-title text-center" fluid={true}>
              <h2>
                New Arrivel &nbsp;
                <Link
                  className="btn btn-sm ml-2 site-btn text-link"
                  onClick={this.previous}
                >
                  <i className="fa fa-angle-left"></i>
                </Link>
                &nbsp;
                <Link
                  className="btn btn-sm ml-2 site-btn text-link"
                  onClick={this.next}
                >
                  <i className="fa fa-angle-right"></i>
                </Link>
              </h2>
              <p>ome of OurExclusive New Arrivel,You May Like </p>
            </div>
            <Row>
              <div className="slider-container">
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                  {MyView}
                </Slider>
              </div>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default NewArrival;
