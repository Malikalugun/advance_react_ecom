import axios from "axios";
import React, { Component, Fragment } from "react";
import AppURL from "../../api/AppURL";
import { Container, Navbar, Row, Col, Form, Button } from "react-bootstrap";
import ReactHtmlParser from "html-react-parser";
import Breadcrumb from "react-bootstrap/Breadcrumb";
class Privacy extends Component {
  constructor() {
    super();
    this.state = {
      privacy: "",
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
          let jsonData = response.data[0]["privacy"];
          this.setState({
            privacy: jsonData,
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
        <Container>
          <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active className="breadcrumbactive">
                Privacy Policy
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
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
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>
                <div class="ph-item">
                  <div class="ph-col-12">
                    <div class="ph-row">
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>{" "}
                <div class="ph-item">
                  <div class="ph-col-12">
                    <div class="ph-row">
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Form className="onboardForm"> */}
              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">Privacy Page</h4>

                <p className="section-title-contact">
                  {ReactHtmlParser(this.state.privacy)}
                </p>
              </div>
              {/* </Form> */}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Privacy;
