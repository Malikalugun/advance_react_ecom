import React, { Component } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

class MegaMenu extends Component {
  constructor(props) {
    super();
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
    const CatList = this.props.data;
    const MyView = CatList.map((CatList, i) => {
      return (
        <div key={i.toString()}>
          <button className="accordion" onClick={this.MegaMenuItemClick}>
            <img
              className="accordionMenuIcon"
              src={CatList.category_image}
              alt=""
            />
            &nbsp; {CatList.category_name}
          </button>
          <div className="panel">
            <ul>
              {CatList.subcategory_name.map((SubList, i) => {
                return (
                  <li>
                    <a href="#" className="accordionItem">
                      {SubList.subcategory_name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">{MyView}</div>
      </div>
    );
  }
}

export default MegaMenu;
