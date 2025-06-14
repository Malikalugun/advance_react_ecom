import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
import ReactHtmlParser from "html-react-parser";
import axios from "axios";
import AppURL from "../../api/AppURL";
class FooterDesktop extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      android_app_link: "",
      ios_applink: "",
      facebook_link: "",
      twitter_link: "",
      instagram_link: "",
      copyright_text: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        let statusCode = response.status;

        if (statusCode == 200) {
          let jsonData = response.data[0];
          this.setState({
            address: jsonData["address"],
            android_app_link: jsonData["android_app_link"],
            ios_applink: jsonData["ios_applink"],
            facebook_link: jsonData["facebook_link"],
            twitter_link: jsonData["twitter_link"],
            instagram_link: jsonData["instagram_link"],
            copyright_text: jsonData["copyright_text"],
            loaderDiv: "d-none",
            mainDiv: "",
          });
        }
      })
      .catch((error) => {});
  }
  render() {
    return (
      <Fragment>
        <div className="footerback mt-5 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <div className={this.state.loaderDiv}>
                  <div class="ph-item">
                    <div class="ph-col-12">
                      <div class="ph-row">
                        <div class="ph-col-4"></div>
                        <div class="ph-col-8 empty"></div>
                        <div class="ph-col-6"></div>
                        <div class="ph-col-6 empty"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={this.state.mainDiv}>
                  <h5 className="footer-menu-title">Office Address</h5>
                  {ReactHtmlParser(this.state.address)}
                </div>
                <h5 className="footer-menu-title">Social Link</h5>
                <a href={this.state.facebook_link} target="_blank">
                  <i className="fab fa-facebook m-1"></i>
                </a>
                <a href={this.state.twitter_link} target="_blank">
                  <i className="fab fa-twitter m-1"></i>
                </a>
                <a href={this.state.instagram_link} target="_blank">
                  <i className="fab fa-instagram m-1"></i>
                </a>
                <a href={this.state.facebook_link} target="_blank">
                  <i className="fab fa-facebook m-1"></i>
                </a>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">The Company</h5>
                <Link to="/about" className="footer-link text-link">
                  About us
                </Link>
                <br></br>
                <Link to="/" className="footer-link text-link">
                  Company Profile
                </Link>
                <br></br>
                <Link to="/contact" className="footer-link text-link">
                  Contact Us us
                </Link>
                <br></br>
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">More Info</h5>
                <Link to="/purches" className="footer-link text-link">
                  How to purchase
                </Link>
                <br></br>
                <Link to="/privacy" className="footer-link text-link">
                  Privacy Policy
                </Link>
                <br></br>
                <Link to="/refund" className="footer-link text-link">
                  Refund Policy
                </Link>
                <br></br>
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">Download App</h5>
                <a href={this.state.android_app_link}>
                  <img src={Google} alt="gimg" />
                </a>
                <br></br>
                <a href={this.state.ios_applink}>
                  <img src={Apple} alt="aimg" className="mt-2" />
                </a>
                <br></br>
                Change Your Language <br></br>
                <div id="google_translate_element"></div>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Row>
              <h6 className="text-white">
                {ReactHtmlParser(this.state.copyright_text)}
              </h6>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;
