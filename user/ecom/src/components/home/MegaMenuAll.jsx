import React, { Component } from "react";

class MegaMenuAll extends Component {
  constructor() {
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }
  componentDidMount() {
    this.MegaMenu();
  }
  // MegaMenu() {
  //   var acc = document.getElementsByClassName("accordionAll");
  //   var accNum = acc.length;
  //   var i;
  //   for (i = 0; i < accNum; i++) {
  //     acc[i].addEventListener("click", function () {
  //       this.classList.toggle("active");
  //       var panel = this.nextElementSibling;
  //       if (panel.style.maxHeight) {
  //         panel.style.maxHeight = null;
  //       } else {
  //         panel.style.maxHeight = panel.scrollHeight + "px";
  //       }
  //     });
  //   }
  // }
  MegaMenu() {
    setTimeout(() => {
      const acc = document.getElementsByClassName("accordionAll");
      const accNum = acc.length;
      for (let i = 0; i < accNum; i++) {
        acc[i].onclick = function () {
          this.classList.toggle("active");
          const panel = this.nextElementSibling;

          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        };
      }
    }, 100);
  }
  render() {
    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
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

export default MegaMenuAll;
