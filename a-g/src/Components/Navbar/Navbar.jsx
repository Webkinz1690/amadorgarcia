import React, { Component } from "react";
import { MenuItems } from "./MenuItem";
import "./Navbar.css";
import { Button } from "../Button";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ on: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Amador Garcia
          <i className="fi-xnluxl-warning" />
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked
                ? "fi-cnsuxl-times-solid"
                : "fi-xnsuxl-three-bars-solid"
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign In</Button>
      </nav>
    );
  }
}

export default Navbar;
