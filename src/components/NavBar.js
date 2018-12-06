import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

class NavBar extends Component {

  state = {
    showMenu: false
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.ShowMenu
    })
  }


  render() {
    return(
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item"><Link to="/" class="navigation__link"><span>01</span>Home</Link></li>
            <li class="navigation__item" onClick={this.toggleMenu}><Link to="/neighborhoods" class="navigation__link"><span>02</span>About Us</Link></li>
            <li class="navigation__item" onClick={this.toggleMenu}><a href="#" class="navigation__link"><span>03</span>Neighborhoods</a></li>
            <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Availabilities</a></li>
            <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
