import { Component } from "react";
import "./Navigation.css";
import Logo from "../assets/logo.png";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <a href="#" class="navbar-logo">
          <img src={Logo} alt="logo" width="50" />
        </a>
        <div class="navbar-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="#">Product</a>
          <a href="#">Curriculum</a>
        </div>
      </nav>
    );
  }
}

export default Navigation;
