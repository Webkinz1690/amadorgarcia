import React from "react";
import Logo from "../../Assets/invertedLogo.png";
import "./Nav.css";
import { MenuItems } from "./MenuItem";
import { Nav } from "react-bootstrap";

const Nav1 = () => {
  return (
    <nav class="navbar navbar-expand-xl navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            alt="logo"
            src={Logo}
            width="60"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          <span className="brand-text">Amador Garcia</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            {MenuItems.map((item, index) => {
              return (
                <Nav.Item key={index}>
                  <Nav.Link cName={item.cName} href={item.url}>
                    {item.title}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav1;
