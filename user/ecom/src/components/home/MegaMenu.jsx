import React, { Component } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

class MegaMenu extends Component {
  constructor() {
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }
  componentDidMount() {
    this.MegaMenu();
  }
  // MegaMenu() {
  //   var acc = document.getElementsByClassName("accordion");
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
      const acc = document.getElementsByClassName("accordion");
      const accNum = acc.length;

      for (let i = 0; i < accNum; i++) {
        // Avoid duplicate event listeners
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
    }, 100); // Wait for DOM to be ready
  }

  render() {
    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordion">
            <img
              className="accordionMenuIcon"
              src="https://cdn-icons-png.flaticon.com/128/3342/3342137.png"
              alt=""
            />
            &nbsp; Man's Clothing
          </button>
          <div className="panel">
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Man's Tshirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItem">
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

export default MegaMenu;
