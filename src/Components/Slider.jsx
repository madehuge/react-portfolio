import React from 'react';

export default function Slider() {
  return (
    <>
      <section className="home d-flex align-items-center" id="home">
        <div className="container">
          <div className="home-text text-center text-md-start">
            <p className="intro mx-auto mx-md-0">Hello</p>
            <p className="name">I'm <span>Tomas</span> Carter</p>
            <div className="head-text" id="home-text-changer">
              <h1 className="ah-headline">
                <span>I'm </span>
                <span className="ah-words-wrapper">
                  <b className="is-visible">Web Designer</b>
                  <b>Web Developer</b>
                  <b>Mobile Developer</b>
                </span>
              </h1>
            </div>
            <div className="home-social d-flex justify-content-center justify-content-md-start mt-3">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
