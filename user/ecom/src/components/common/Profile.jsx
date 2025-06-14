import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <Fragment>
        <Container>
          <h2>User Profile Page</h2>
          <ul className="list-group">
            <li className="list-group-item">Name: Name</li>
            <li className="list-group-item">Email: Email</li>
          </ul>
        </Container>
      </Fragment>
    </div>
  );
}

export default Profile;
