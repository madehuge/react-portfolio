import React from 'react';

export default function Header() {
  return (
    <>
      <header className="header-sliding">
        <nav className="navbar w-100 navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand logo p-0" href="/">
              Mr. Jangir
            </a>
            <button
              className="navbar-toggler menu-toggle-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="header-nav-icon"></span>
              <span className="header-nav-icon"></span>
              <span className="header-nav-icon"></span>
            </button>
            <div
              className="ul-cont collapse navbar-collapse ms-0 ms-lg-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav navbar-right ms-0 ms-lg-auto mb-2 mb-lg-0">
                <li className="nav-item mx-1">
                  <a className="nav-link active" data-scroll="home" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-link" href="#about" data-scroll="about">
                    About
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-link" href="#services" data-scroll="services">
                    Services
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-link" href="#resume" data-scroll="resume">
                    Resume
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-link" href="#portfolio" data-scroll="portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-link" href="#reviews" data-scroll="reviews">
                    Reviews
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-link" href="#blog" data-scroll="blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a className="nav-link" href="#contact" data-scroll="contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
