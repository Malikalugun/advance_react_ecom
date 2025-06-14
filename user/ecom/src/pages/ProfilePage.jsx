import React, { Component, useEffect } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import { Fragment } from "react";
import Profile from "../components/common/Profile";
function ProfilePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <Profile />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    </div>
  );
}

export default ProfilePage;
