import React, { Component } from 'react'
// import '../sass/main.scss'

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
          Latest Apartments
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
                <span class="card__heading-span card__heading-span--1">434 East 84th Street</span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>1 Bedroom</li>
                  <li>1 Bathroom</li>
                  <li>Transit</li>
                  <li>Culture</li>
                  <li>Shopping</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$2,200</p>
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
                <span class="card__heading-span card__heading-span--2">Grove Street</span>
              </h4>
              <div class="card__details">
                <ul>
                    <li>1 Bedroom</li>
                    <li>1 Bathroom</li>
                    <li>Transit</li>
                    <li>Culture</li>
                    <li>Shopping</li>
                </ul>
              </div>

            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Price</p>
                  <p class="card__price-value">$2,200</p>
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
                <span class="card__heading-span card__heading-span--3">Jersey City, NJ</span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>1 Bedroom</li>
                  <li>1 Bathroom</li>
                  <li>Transit</li>
                  <li>Culture</li>
                  <li>Shopping</li>
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
        <a href="#" class="btn btn--green">Availabilities</a>
      </div>
    </section>
    <section class="section-book">
  <div class="row">
    <div class="book">
      <div class="book__form">
        <form action="#" class="form">
          <div class="u-margin-bottom-medium">
            <h2 class="heading-secondary">
              Start booking now
            </h2>
          </div>

          <div class="form__group">
            <input type="text" class="form__input" placeholder="Full name" id="name" required/>
            <label for="name" class="form__label">Full name</label>
          </div>

          <div class="form__group">
            <input type="email" class="form__input" placeholder="Email address" id="email" required/>
            <label for="email" class="form__label">Email address</label>
          </div>

          <div class="form__group u-margin-bottom-medium">
            <div class="form__radio-group">
              <input type="radio" class="form__radio-input" id="small" name="size"/>
              <label for="small" class="form__radio-label">
                <span class="form__radio-button"></span>
                Small tour group
              </label>
            </div>

            <div class="form__radio-group">
              <input type="radio" class="form__radio-input" id="large" name="size"/>
              <label for="large" class="form__radio-label">
                <span class="form__radio-button"></span>
                Large tour group
              </label>
            </div>
          </div>

          <div class="form__group">
            <button class="btn btn--green">Next step &rarr;</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
      </div>
    )
  }
}

export default HomePage;
