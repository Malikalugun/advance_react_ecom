import React, { Component } from "react";
import { Container } from "react-bootstrap";
export class FeaturedLoading extends Component {
  render() {
    let isLoading = this.props.isLoading;
    return (
      <div className={isLoading}>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Featured Products</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <div className="card image-box h-100 w-100">
                <div class="ph-picture"></div>
                <div class="ph-row">
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <div className="card image-box h-100 w-100">
                <div class="ph-picture"></div>
                <div class="ph-row">
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <div className="card image-box h-100 w-100">
                <div class="ph-picture"></div>
                <div class="ph-row">
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                  <div class="ph-col-12 small"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <div className="card image-box h-100 w-100">
                <div class="ph-picture"></div>
                <div class="ph-row">
                  <div class="ph-col-12 small"></div>
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

export default FeaturedLoading;
