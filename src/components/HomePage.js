import React, { Component } from 'react'
import '../sass/main.scss'

class HomePage extends Component {
  render(){
    return(
      <div>
          <header className="header">
            <div className="header__logo-box">
              <img src="/donovan_logo.png" alt="donovan-logo" className="header__logo"/>
            </div>

            <div className="header__text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Start your search</span>
              </h1>
              <form className="search-form">
                <input type="text" name="location" placeholder="Jersey City, NJ" className="location"/>
                <select value="Rent Range" className="price-range">
                  <option>$500</option>
                  <option>$700</option>
                  <option>$900</option>
                  <option>$1,100</option>
                  <option>$1,300</option>
                  <option>$1,500</option>
                </select>
                <select className="bed-bath">
                  <option>1 Bath</option>
                  <option>2 Bath</option>
                  <option>1 Bed</option>
                  <option>2 Bed</option>
                </select>
                <button type="submit" value="Submit" className="search-btn">Search</button>
              </form>
            </div>

          </header>

          <section class="section-tours" id="section-tours">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
          Most popular tours
        </h2>
      </div>

      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">
                &nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">The Sea Explorer</span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$297</p>
                </div>
                <a href="#popup" class="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>


        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--2">
                &nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--2">The Forest Hiker</span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>7 day tours</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>

            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$497</p>
                </div>
                <a href="#popup" class="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>


        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">
                &nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--3">The Snow Adventurer</span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>

            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$897</p>
                </div>
                <a href="#popup" class="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="u-center-text u-margin-top-huge">
        <a href="#" class="btn btn--green">Discover all tours</a>
      </div>
    </section>
      </div>
    )
  }
}

export default HomePage;
