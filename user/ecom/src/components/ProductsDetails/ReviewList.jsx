import React, { Component } from "react";
import AppURL from "../../api/AppURL";
import axios from "axios";

export class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      ReviewData: [],
    };
  }
  componentDidMount() {
    let code = this.props.code;
    axios
      .get(AppURL.ReviewList(code))
      .then((response) => {
        this.setState({ ReviewData: response.data });
      })
      .catch((error) => {});
  }
  render() {
    const Mylist = this.state.ReviewData;
    if (Mylist.length > 0) {
      const MyView = Mylist.map((ReviewList, i) => {
        if (ReviewList.reviewer_rating === "1") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i>
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        } else if (ReviewList.reviewer_rating === "2") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        } else if (ReviewList.reviewer_rating === "3") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        } else if (ReviewList.reviewer_rating === "4") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        } else if (ReviewList.reviewer_rating === "5") {
          return (
            <div>
              <p className=" p-0 m-0">
                <span className="Review-Title">{ReviewList.reviewer_name}</span>{" "}
                <span className="text-success">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>{" "}
              </p>
              <p>{ReviewList.reviewer_comment}</p>
            </div>
          );
        }
        // end else if
      });
      // end map
      return (
        <div>
          <h6 className="mt-2">REVIEWS</h6>
          {MyView}
        </div>
      );
    } else {
      return (
        <div>
          <h6 className="mt-2">REVIEWS</h6>
          <p>There have no review yet</p>
        </div>
      );
    }
  }
}

export default ReviewList;
