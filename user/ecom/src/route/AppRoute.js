import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import AppURL from "../api/AppURL";
import HomePage from "../pages/HomePage";
import UserLogin from "../pages/UserLogin";
import ContactPage from "../pages/ContactPage";
import PurchesPage from "../pages/PurchesPage";
import RefundPage from "../pages/RefundPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductDetails from "../pages/ProductDetails";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import ProductSubCategoryPage from "../pages/ProductSubCategory";
import SearchPage from "../pages/SearchPage";
import RegisterPage from "../pages/RegisterPage";
import ForgetPage from "../pages/ForgetPage";
import ResetpasswordPage from "../pages/ResetpasswordPage";
import ProfilePage from "../pages/ProfilePage";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
class AppRoute extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.UserData)
      .then((response) => {
        this.setUser(response.data);
      })
      .catch((error) => {});
  }
  setUser = (user) => {
    this.setState({
      user: user,
    });
  };
  render() {
    return (
      <Fragment>
        <NavMenuDesktop user={this.state.user} setUser={this.setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <UserLogin user={this.state.user} setUser={this.setUser} />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/purches" element={<PurchesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route
            path="/productsdetails/:code"
            user={this.state.user}
            element={<ProductDetails />}
          />
          <Route path="/notification-page" element={<NotificationPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/productcategory/:category"
            element={<ProductCategoryPage />}
          />

          <Route
            path="/productsubcategory/:category/:subcategory"
            element={<ProductSubCategoryPage />}
          />
          <Route path="/productbysearch/:searchKey" element={<SearchPage />} />
          <Route
            path="/register"
            element={
              <RegisterPage user={this.state.user} setUser={this.setUser} />
            }
          />
          <Route path="/forget" element={<ForgetPage />} />
          <Route path="/reset/:id" element={<ResetpasswordPage />} />
          <Route
            path="/profile"
            element={
              <ProfilePage user={this.state.user} setUser={this.setUser} />
            }
          />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
