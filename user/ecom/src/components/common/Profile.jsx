import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router";

function Profile({ user }) {
  const name = user?.name || "N/A";
  const email = user?.email || "N/A";
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <Fragment>
        <Container>
          <h2>User Profile Page</h2>
          <ul className="list-group">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Email: {email}</li>
          </ul>
        </Container>
      </Fragment>
    </div>
  );
}

export default Profile;
