import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import SuggestedProducts from "./SuggestedProducts";
import ReviewList from "./ReviewList";
export class ProductsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: "0",
      isSize: null,
      isColor: null,
      color: "",
      size: "",
      quantity: "",
      product_code: "",
    };
    this.imgOnClick = this.imgOnClick.bind(this);
  }
  addToCart = () => {};
  colorOnChange = (event) => {
    const color = event.target.value;

    this.setState({ color: color });
  };
  sizeOnChange = (event) => {
    let size = event.target.value;
    this.setState({ size: size });
  };
  quantityOnChange = (event) => {
    let quantity = event.target.value;
    this.setState({ quantity: quantity });
  };
  componentDidMount() {
    const { productDetails } = this.props.data;
    if (productDetails && productDetails.length > 0) {
      this.setState({ previewImage: productDetails[0].image_one });
    }
  }

  imgOnClick = (event) => {
    const imgSrc = event.target.getAttribute("src");
    this.setState({ previewImage: imgSrc });
  };
  PriceOption = (price, special_price) => {
    if (special_price === "na") {
      return <p className="product-price-on-card">Price: {price}₹</p>;
    } else {
      return (
        <p className="product-price-on-card">
          Price: <strike className="text-secondary">{price}₹</strike>{" "}
          {special_price}₹
        </p>
      );
    }
  };

  render() {
    let ProductAllData = this.props.data;
    let title = ProductAllData["prductList"][0]["title"];
    let brand = ProductAllData["prductList"][0]["brand"];
    let category = ProductAllData["prductList"][0]["category"];
    let subcategory = ProductAllData["prductList"][0]["subcategory"];
    let image = ProductAllData["prductList"][0]["image"];

    if (this.state.previewImage === "0") {
      this.setState({ previewImage: image });
    }

    let product_code = ProductAllData["prductList"][0]["product_code"];
    let remark = ProductAllData["prductList"][0]["remark"];
    let special_price = ProductAllData["prductList"][0]["special_price"];
    let price = ProductAllData["prductList"][0]["price"];
    let star = ProductAllData["prductList"][0]["star"];

    let image_one = ProductAllData["productDetails"][0]["image_one"];
    let image_two = ProductAllData["productDetails"][0]["image_two"];
    let image_three = ProductAllData["productDetails"][0]["image_three"];
    let image_four = ProductAllData["productDetails"][0]["image_four"];
    let color = ProductAllData["productDetails"][0]["color"];
    let size = ProductAllData["productDetails"][0]["size"];
    let product_id = ProductAllData["productDetails"][0]["product_id"];
    let shortdescription =
      ProductAllData["productDetails"][0]["short_description"];
    let long_description =
      ProductAllData["productDetails"][0]["long_description"];
    var ColorDiv = "d-none";
    if (color != "na") {
      let ColorArray = color.split(",");
      var ColorOption = ColorArray.map((ColorList, i) => {
        return <option value={ColorList}>{ColorList}</option>;
      });
      ColorDiv = "";
    } else {
      ColorDiv = "d-none";
    }
    var SizeDiv = "d-none";
    if (size != "na") {
      let SizeArray = size.split(",");
      var SizeOption = SizeArray.map((SizeList, i) => {
        return <option value={SizeList}>{SizeList}</option>;
      });
      SizeDiv = "";
    } else {
      SizeDiv = "d-none";
    }
    // color,size avilable or not
    if (this.state.isSize === null) {
      if (size != "na") {
        this.setState({ isSize: "yes" });
      } else {
        this.setState({ isSize: "No" });
      }
    }
    if (this.state.isColor === null) {
      if (color != "na") {
        this.setState({ isColor: "yes" });
      } else {
        this.setState({ isColor: "No" });
      }
    }
    if (this.state.product_code === null) {
      this.setState({ product_code: product_code });
    }
    // end
    return (
      <Fragment>
        <Container className="BetweenTwoSection" fluid={true}>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumbactive">
                <Link to={"/productcategory/" + category}>{category}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumbactive">
                <Link
                  to={"/productsubcategory/" + category + "/" + subcategory}
                >
                  {subcategory}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="breadcrumbactive">
                <Link
                  to={
                    "/productsdetails/" +
                    category +
                    "/" +
                    subcategory +
                    "/" +
                    product_id
                  }
                >
                  {title}
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <div className="bigimage">
                    {/* <img src={this.state.previewImage} id="previewImage" /> */}
                    <div className="bigimage">
                      <InnerImageZoom
                        zoomScale={1.8}
                        zoomType={"hover"}
                        src={this.state.previewImage}
                        zoomSrc={this.state.previewImage}
                      />
                    </div>
                  </div>
                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <div className="smallimg">
                          <img
                            src={image_one}
                            className="product-sm-img"
                            onClick={this.imgOnClick}
                          />
                        </div>
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <div className="smallimg">
                          <img
                            src={image_two}
                            className="product-sm-img"
                            onClick={this.imgOnClick}
                          />
                        </div>
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <div className="smallimg">
                          <img
                            src={image_three}
                            className="product-sm-img"
                            onClick={this.imgOnClick}
                          />
                        </div>
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <div className="smallimg">
                          <img
                            src={image_four}
                            className="product-sm-img"
                            onClick={this.imgOnClick}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{title}</h5>
                  <h6 className="section-sub-title">{shortdescription}</h6>
                  {this.PriceOption(price, special_price)}
                  <h6 className="mt-2">
                    Category : <b>{category}</b>
                  </h6>
                  <h6 className="mt-2">
                    SubCategory : <b>{subcategory}</b>
                  </h6>
                  <h6 className="mt-2">
                    Brand : <b>{brand}</b>
                  </h6>
                  <h6 className="mt-2">
                    Product Code : <b>{product_code}</b>
                  </h6>
                  {/* <h6 className="mt-2">Choose Color</h6>
                  <div className="input-group">
                    <div className="form-check mx-1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Black
                      </label>
                    </div>
                    <div className="form-check mx-1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Green
                      </label>
                    </div>
                    <div className="form-check mx-1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Red
                      </label>
                    </div>
                  </div> */}
                  <div className={ColorDiv}>
                    <h6 className="mt-2">Choose Color</h6>
                    <select
                      name=""
                      id=""
                      className="form-control form-select"
                      onChange={this.colorOnChange}
                    >
                      <option value="">Choose Color</option>
                      {ColorOption}
                    </select>
                  </div>
                  {/* <h6 className="mt-2">Choose Size</h6>
                  <div className="input-group">
                    <div className="form-check mx-1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        X
                      </label>
                    </div>
                    <div className="form-check mx-1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        XX
                      </label>
                    </div>
                    <div className="form-check mx-1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        XXXX
                      </label>
                    </div>
                  </div> */}
                  <div className={SizeDiv}>
                    <h6 className="mt-2">Choose Size</h6>
                    <select
                      name=""
                      id=""
                      className="form-control form-select"
                      onChange={this.sizeOnChange}
                    >
                      <option value="">Choose Size</option>
                      {SizeOption}
                    </select>
                  </div>

                  {/* <h6 className="mt-2">Quantity</h6>
                  <input
                    className="form-control text-center w-50"
                    type="number"
                  /> */}
                  <div className="">
                    <h6 className="mt-2">Choose Quantity</h6>
                    <select
                      name=""
                      id=""
                      className="form-control form-select"
                      onChange={this.quantityOnChange}
                    >
                      <option value="">Choose Quantity</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div className="input-group mt-3">
                    <button className="btn site-btn m-1 ">
                      {" "}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-heart"></i> Favourite
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p>{long_description}</p>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <ReviewList code={product_id} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <SuggestedProducts subcategory={subcategory} />
      </Fragment>
    );
  }
}

export default ProductsDetails;
