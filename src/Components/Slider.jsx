import React from 'react';

export default function Slider() {
  return (
    <>
      <section className="home d-flex align-items-center" id="home">
        <div className="container">
          <div className="home-text text-center text-md-start">
            <p className="intro mx-auto mx-md-0">Hello</p>
            <p className="name">I'm <span>Manish Kumar</span> Jangir</p>
            <div className="head-text" id="home-text-changer">
              <h1 className="ah-headline">
                <span>I'm  </span>
                <span className="ah-words-wrapper">
                  <b className="is-visible"> Sr. Web Developer</b>
                  <b>Cloud Architect - (AWS/Azure)</b>
                  <b>Team Leader</b>
                </span>
              </h1>
            </div>
            <div className="home-social d-flex justify-content-center justify-content-md-start mt-3">
              <a href="https://www.facebook.com/manish.jangir.127/"><i className="fab fa-facebook-f"></i></a>
              {/* <a href="#"><i className="fab fa-twitter"></i></a> */}
              <a href="https://www.instagram.com/its_me_manish027/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/iammanishjangir/"><i className="fab fa-linkedin-in"></i></a>
              <a href="malto:manishjagir027@gmail.com"><i className="fab fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
