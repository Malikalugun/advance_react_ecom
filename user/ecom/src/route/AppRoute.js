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
          <Route path="/productsdetails" element={<ProductDetails />} />
          <Route path="/notification-page" element={<NotificationPage />} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
