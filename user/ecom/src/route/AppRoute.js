import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

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
class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/purches" element={<PurchesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/productsdetails/:code" element={<ProductDetails />} />
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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget" element={<ForgetPage />} />
          <Route path="/reset/:id" element={<ResetpasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
