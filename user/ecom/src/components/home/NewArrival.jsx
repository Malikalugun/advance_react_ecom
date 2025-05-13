import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
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
        <Container className="text-center">
          <div className="section-title text-center" fluid={true}>
            <h2>
              New Arrivel &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left"></i>
              </a>
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </a>
            </h2>
            <p>ome of OurExclusive New Arrivel,You May Like </p>
          </div>
          <Row>
            <div className="slider-container">
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                <div>
                  <Card className="image-box card">
                    <img
                      src="https://m.media-amazon.com/images/I/51ru8kBdYHL._SX300_SY300_QL70_FMwebp_.jpg"
                      alt=""
                      className="center"
                    />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Fire-Boltt Ninja Call Pro Max Smart Watch 2.01
                      </p>
                      <p className="product-price-on-card">Price: ₹9599</p>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="image-box card">
                    <img
                      src="https://m.media-amazon.com/images/I/71lT0+GeRxL._SX679_.jpg"
                      alt=""
                      className="center"
                    />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Fire-Boltt Ninja Call Pro Max Smart Watch 2.01
                      </p>
                      <p className="product-price-on-card">Price: ₹9599</p>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="image-box card">
                    <img
                      src="https://m.media-amazon.com/images/I/41iRj4+m8oL._SY300_SX300_.jpg"
                      alt=""
                      className="center"
                    />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Fire-Boltt Ninja Call Pro Max Smart Watch 2.01
                      </p>
                      <p className="product-price-on-card">Price: ₹9599</p>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="image-box card">
                    <img
                      src="https://m.media-amazon.com/images/I/41H7B5bi4NL._SX300_SY300_QL70_FMwebp_.jpg"
                      alt=""
                      className="center"
                    />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Fire-Boltt Ninja Call Pro Max Smart Watch 2.01
                      </p>
                      <p className="product-price-on-card">Price: ₹9599</p>
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
