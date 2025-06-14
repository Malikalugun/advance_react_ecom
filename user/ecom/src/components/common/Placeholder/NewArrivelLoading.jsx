import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export class NewArrivelLoading extends Component {
  render() {
    let isLoading = this.props.isLoading;
    return (
      <div className={isLoading}>
        <Container className="text-center">
          <div className="section-title text-center" fluid={true}>
            <h2>
              New Arrivel &nbsp;
              <Link
                className="btn btn-sm ml-2 site-btn text-link"
                onClick={this.previous}
              >
                <i className="fa fa-angle-left"></i>
              </Link>
              &nbsp;
              <Link
                className="btn btn-sm ml-2 site-btn text-link"
                onClick={this.next}
              >
                <i className="fa fa-angle-right"></i>
              </Link>
            </h2>
            <p>ome of OurExclusive New Arrivel,You May Like </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-6 p-1">
              <div className="card image-box h-100 w-100">
                <div class="ph-picture"></div>
                <div class="ph-row">
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-6 p-1">
              <div className="card image-box h-100 w-100">
                <div class="ph-picture"></div>
                <div class="ph-row">
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-6 p-1">
              <div className="card image-box h-100 w-100">
                <div class="ph-picture"></div>
                <div class="ph-row">
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-6 p-1">
              <div className="card image-box h-100 w-100">
                <div class="ph-picture"></div>
                <div class="ph-row">
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default NewArrivelLoading;
