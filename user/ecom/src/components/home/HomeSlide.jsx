import React, { Component } from "react";
import Slider from "react-slick";
class HomeSlide extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
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
    const SliderData = this.props.data;
    const MyView = SliderData.map((SliderList, i) => {
      return (
        <div key={i.toString()}>
          <img src={SliderList.slider_image} className="slider-img" />
        </div>
      );
    });

    return (
      <div>
        <Slider {...settings}>{MyView}</Slider>
      </div>
    );
  }
}

export default HomeSlide;
