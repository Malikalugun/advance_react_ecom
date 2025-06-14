import axios from "axios";
import React, { Component } from "react";
import AppURL from "../../api/AppURL";
import { Link } from "react-router-dom";
class MegaMenuAll extends Component {
  constructor() {
    super();
    this.state = {
      MenuData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        this.setState({ MenuData: response.data });
      })
      .catch((error) => {});
  }
  MegaMenuItemClick = (event) => {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  render() {
    const CatList = this.state.MenuData;
    const MyView = CatList.map((CatList, i) => {
      return (
        <div key={i.toString()}>
          <button className="accordionAll" onClick={this.MegaMenuItemClick}>
            <img
              className="accordionMenuIconAll"
              src={CatList.category_image}
              alt=""
            />
            &nbsp; {CatList.category_name}
          </button>
          <div className="panelAll">
            <ul>
              {CatList.subcategory_name.map((SubList, i) => {
                return (
                  <li>
                    <Link
                      to={
                        "/productsubcategory/" +
                        CatList.category_name +
                        "/" +
                        SubList.subcategory_name
                      }
                      className="accordionItem text-link"
                    >
                      {SubList.subcategory_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">{MyView}</div>
      </div>
    );
  }
}

export default MegaMenuAll;
