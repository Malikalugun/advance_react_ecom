import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link } from "react-router-dom";
import MegaMenuMobile from "../home/MegaMenuMobile";
class NavMenuMobile extends Component {
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
          <Container
            fluid={"true"}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Button className="btn">
                  <i
                    className="fa fa-bars"
                    onClick={this.MenuBarClickHandeler}
                  ></i>
                </Button>

                <Link to="/" className="text-link">
                  {" "}
                  <img className="nav-logo" src={Logo} />
                </Link>

                <Link to="/cart" className="cart-btn text-link">
                  <i className="fa fa-shopping-cart"></i> 3 Items
                </Link>
              </Col>
            </Row>
          </Container>

          <div className={this.state.SideNavState}>
            <MegaMenuMobile />
          </div>

          <div
            onClick={this.ContentOverlayClickHandler}
            className={this.state.ContentOverState}
          ></div>
        </div>
      </Fragment>
    );
  }
}

export default NavMenuMobile;
