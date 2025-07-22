import React from 'react';

export default function About() {
  return (
    <>
      <section className="about section-padding" id="about">
        <div className="container d-flex flex-column flex-md-row">
          <div className="image wow fadeInLeft">
            <img
              className="img-fluid w-100"
              src="images/about_light.jpg"
              alt="about"
            />
            <div className="movable-border">
              <span></span>
            </div>
          </div>
          <div className="about-content wow fadeInRight">
            <div className="main-heading about-main-heading mx-auto mx-md-0">
              <h2>About me</h2>
              <span>I'm Tomas</span>
            </div>
            <p className="about-text">
              I am a programmer and designer of websites and mobile applications with more than five years of experience, as I possess the skill, creativity and innovation in my field of work, and this is what makes me distinguished from others and people love to deal with me
            </p>
            <div className="about-info">
              <ul>
                <li><span>Name:</span> Tomas Carter</li>
                <li><span>Age:</span> 35 years old</li>
                <li><span>Email:</span> tona@example.com</li>
                <li><span>Address:</span> 1902 Jones Avenue</li>
              </ul>
            </div>
            <div className="cv-button">
              <a className="main-btn" href="#">
                <i className="fas fa-inbox"></i>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
