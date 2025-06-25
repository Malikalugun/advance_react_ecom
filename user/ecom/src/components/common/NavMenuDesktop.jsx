import React, { Component, Fragment } from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import Menu from "../../assets/images/menu.png";
import { Link } from "react-router-dom";
// import MegaMenuMobile from "../home/MegaMenuMobile";
import MegaMenuAll from "../home/MegaMenuAll";
import { Navigate } from "react-router";
class NavMenuDesktop extends Component {
  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
      searchkey: "",
      searchredirectstatus: false,
    };
    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.SearchOnClick = this.SearchOnClick.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
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
  SearchOnChange(event) {
    let SearchKey = event.target.value;
    // alert(SearchKey);
    this.setState({ searchkey: SearchKey });
  }
  SearchOnClick() {
    if (this.state.searchkey.length >= 2) {
      this.setState({ searchredirectstatus: true });
    } else {
    }
  }
  searchRedirect() {
    if (this.state.searchredirectstatus === true) {
      return <Navigate to={"/productbysearch/" + this.state.searchkey} />;
    }
  }
  logout = () => {
    localStorage.clear();
  };

  render() {
    let buttons;
    if (localStorage.getItem("token")) {
      buttons = (
        <div>
          <Link to="/favourite" className="btn text-link">
            <i className="fa h4 fa-heart">
              <sup>
                <span className="badge text-white bg-danger">3</span>
              </sup>
            </i>
          </Link>
          <Link to="/notification-page" className="btn text-link">
            <i className="fa h4 fa-bell">
              <sup>
                <span className="badge text-white bg-danger">5</span>
              </sup>
            </i>
          </Link>
          <Link to="/profile" className="h4 btn text-link">
            Profile
          </Link>
          <Link to="/" onClick={this.logout} className="h4 btn text-link">
            Logout
          </Link>

          <Link to="/cart" className="cart-btn text-link">
            <i className="fa fa-shopping-cart"></i>3 Items
          </Link>
        </div>
      );
    } else {
      buttons = (
        <div>
          <Link to="/favourite" className="btn text-link">
            <i className="fa h4 fa-heart">
              <sup>
                <span className="badge text-white bg-danger">3</span>
              </sup>
            </i>
          </Link>
          <Link to="/notification-page" className="btn text-link">
            <i className="fa h4 fa-bell">
              <sup>
                <span className="badge text-white bg-danger">5</span>
              </sup>
            </i>
          </Link>
          <Link to="/login" className="h4 btn text-link">
            Login
          </Link>
          <Link to="/register" className="h4 btn text-link">
            Register
          </Link>

          <Link to="/cart" className="cart-btn text-link">
            <i className="fa fa-shopping-cart"></i>3 Items
          </Link>
        </div>
      );
    }
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed="top" bg="light" className="navbar">
            <Container fluid className="shadow-sm bg-white p-2 mb-0">
              <Row className="w-100 align-items-center">
                <Col lg={4} md={4} sm={12} xs={12}>
                  <img
                    src={Menu}
                    alt="bar menu"
                    className="bar-img"
                    onClick={this.MenuBarClickHandeler}
                  />
                  <Link to="/" className="text-link">
                    <img src={Logo} alt="logo image" className="nav-logo" />
                  </Link>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input
                      onChange={this.SearchOnChange}
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <Button
                      onClick={this.SearchOnClick}
                      type="button"
                      className="btn site-btn"
                      aria-label="Search button"
                    >
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  {buttons}
                </Col>
              </Row>
              {this.searchRedirect()}
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
