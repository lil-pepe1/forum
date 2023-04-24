function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header__title">
          <a className="header__title-link" href="/">
            Forum
          </a>
        </div>
        <ul className="list header__list">
          <li className="item header__item">
            <a className="header__link" href="/">
              Sign in
            </a>
          </li>
          <li className="item header__item">
            <a className="header__link" href="/">
              Sign up
            </a>
          </li>
        </ul>
        <div className="header__burger">
          <img
            className="header__img header__img-open"
            src="images/burger.png"
            alt="Open menu"
          ></img>
        </div>
        <div data-visible="false" className="header__burger-menu">
          <div className="header__burger">
            <img
              className="header__img header__img-close"
              src="images/burger-close.png"
              alt="Close menu"
            ></img>
          </div>
          <ul className="header__burger-list">
            <li className="header__item">
              <a className="header__burger-links" href="#trending">
                Trending
              </a>
            </li>
            <li className="header__item">
              <a className="header__burger-links" href="#computer_and_it">
                Computer and IT
              </a>
            </li>
            <li className="header__item">
              <a className="header__burger-links" href="#cars">
                Cars
              </a>
            </li>
            <li className="header__item">
              <a className="header__burger-links" href="#politics">
                Politics
              </a>
            </li>
            <li className="header__item">
              <a className="header__burger-links" href="/">
                Other
              </a>
            </li>
          </ul>
        </div>
      </header>
      <nav className="nav">
        <ul className="list nav__list">
          <li id="search" className="item nav__item nav__item--first">
            <a className="nav__link" href="#">
              Search
            </a>
          </li>
          <li className="item nav__item nav__item--mobile-only">
            <a className="nav__link" href="">
              Sign in
            </a>
          </li>
          <li className="item nav__item nav__item--mobile-only">
            <a className="nav__link" href="">
              Sign up
            </a>
          </li>
          <li className="item nav__item nav__item--desktop-only">
            <a className="nav__link" href="#trending">
              Trending
            </a>
          </li>
          <li className="item nav__item nav__item--desktop-only">
            <a className="nav__link" href="#computer_and_it">
              Computer and IT
            </a>
          </li>
          <li className="item nav__item nav__item--desktop-only">
            <a className="nav__link" href="#economy">
              Economy
            </a>
          </li>
          <li className="item nav__item nav__item--desktop-only">
            <a className="nav__link" href="#cars">
              Cars
            </a>
          </li>
          <li className="item nav__item nav__item--desktop-only">
            <a className="nav__link" href="#politics">
              Politics
            </a>
          </li>
          <li className="item nav__item nav__item--desktop-only">
            <a className="nav__link" href="">
              Other
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
