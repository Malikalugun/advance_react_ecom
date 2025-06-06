import React, { Component } from "react";

class MegaMenuMobile extends Component {
  constructor() {
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }
  componentDidMount() {
    this.MegaMenu();
  }
  MegaMenu() {
    var acc = document.getElementsByClassName("accordionMobile");
    var accNum = acc.length;
    var i;
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
  render() {
    return (
      <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">
          <button className="accordionMobile">
            <img
              className="accordionMenuIconMobile"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MegaMenuMobile;
