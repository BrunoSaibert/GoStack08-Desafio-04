import React, { Component } from "react";

import "./Header.css";

import logo from "../img/facebook-1.png";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <a href="#">Meu Perfil</a>
      </header>
    );
  }
}
