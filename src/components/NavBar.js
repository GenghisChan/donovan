import React, { Component } from "react";
import '../stylesheets/NavBar.css'
import '../stylesheets/styles.css'

class NavBar extends Component {
  render() {
    return (
        <nav>
          <div className="logo-box">
            <img src="/logo.png" alt="DONOVAN logo" className="logo"/>
          </div>
          <ul className="main-nav">
            <li>Home</li>
            <li>About Us</li>
            <li>Neighborhoods</li>
            <li>Availabilities</li>
            <li>Contact Us</li>
          </ul>
        </nav>
    );
  }
}

export default NavBar;
