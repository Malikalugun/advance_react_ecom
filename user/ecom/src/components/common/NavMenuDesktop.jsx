import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import Menu from "../../assets/images/menu.png"
import { Link } from "react-router-dom";
// import MegaMenuMobile from "../home/MegaMenuMobile";
import MegaMenuAll from "../home/MegaMenuAll";
class NavMenuDesktop extends Component {
  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
    };
  }
  MenuBarClickHandeler = () => {
    this.SideNavOpenClose();
  };
  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  };
  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;
    if (SideNavState === "sideNavOpen") {
      this.setState({
        SideNavState: "sideNavClose",
        ContentOverState: "ContentOverlayClose",
      });
    } else {
      this.setState({
        SideNavState: "sideNavOpen",
        ContentOverState: "ContentOverlayOpen",
      });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed="top" bg="light" className="navbar">
            <Container fluid className="shadow-sm bg-white p-2 mb-0">
              <Row className="w-100 align-items-center">
                <Col lg={4} md={4} sm={12} xs={12}>

                  <img src={Menu} alt="bar menu" className="bar-img" onClick={this.MenuBarClickHandeler}/>
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
                  <Link to="/favourite" className="btn ">
                    <i className="fa h4 fa-heart">
                      <sup>
                        <span className="badge text-white bg-danger">3</span>
                      </sup>
                    </i>
                  </Link>
                  <Link to="/notification-page" className="btn ">
                    <i className="fa h4 fa-bell">
                      <sup>
                        <span className="badge text-white bg-danger">5</span>
                      </sup>
                    </i>
                  </Link>
                  <a href="#" className="btn">
                    <i className="fa fa-mobile-alt"></i>
                  </a>

                  <Link to="/login" className="h4 btn">
                    Login
                  </Link>
                  <Link to="/cart" className="cart-btn">
                    <i className="fa fa-shopping-cart"></i>3 Items
                  </Link>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
        <div className={this.state.SideNavState}>
          <MegaMenuAll />
        </div>

        <div
          onClick={this.ContentOverlayClickHandler}
          className={this.state.ContentOverState}
        ></div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
