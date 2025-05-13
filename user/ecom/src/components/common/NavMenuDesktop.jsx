import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link } from "react-router-dom";
class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed="top" bg="light" className="navbar">
            <Container fluid className="shadow-sm bg-white p-2 mb-0">
              <Row className="w-100 align-items-center">
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to="/">
                    <img src={Logo} alt="logo image" className="nav-logo" />
                  </Link>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <Button
                      type="button"
                      className="btn site-btn"
                      aria-label="Search button"
                    >
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <Link to="#" className="btn ">
                    <i className="fa h4 fa-bell">
                      <sup>
                        <span className="badge text-white bg-danger">5</span>
                      </sup>
                    </i>
                  </Link>
                  <a href="#" className="btn">
                    <i className="fa fa-mobile-alt"></i>
                  </a>

                  <Link to="#" className="h4 btn">
                    Login
                  </Link>
                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"></i>3 Items
                  </Button>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
