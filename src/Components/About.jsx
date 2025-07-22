import React from 'react';
import aboutImg from '../assets/images/about_light.jpg'; // adjust path as per your structure

export default function About() {
  return (
    <>
      <section className="about section-padding" id="about">
        <div className="container d-flex flex-column flex-md-row">
          <div className="image wow fadeInLeft">
            <img
              className="img-fluid w-100"
              src={aboutImg}
              alt="about"
            />
            <div className="movable-border">
              <span></span>
            </div>
          </div>
          <div className="about-content wow fadeInRight">
            <div className="main-heading about-main-heading mx-auto mx-md-0">
              <h2>About me</h2>
              <span>I'm Manish Kumar Jangir</span>
            </div>
            <p className="about-text">
              I am a seasoned Full Stack Web Developer and Cloud Engineer with over 11.5 years of professional experience, including 8 years in PHP/WordPress and 3.5 years in the MERN stack (React 18/19, Node.js, Express, and MongoDB). Alongside my development expertise, I specialize in AWS Cloud Services, working with EC2, ALB, Lambda, S3, and RDS to build scalable, secure, and high-performance applications.</p>
            
            <p className="about-text">
              Having worked extensively in MNC environments, I bring a well-rounded approach to building end-to-end solutions with clean architecture and DevOps integration. My focus on user-centric development, cloud-native design, and continuous innovation makes me a valuable asset to any modern tech team.
            </p>
            <div className="about-info">
              <ul>
                <li><span>Name:</span> Manish Kumar Jangir</li>
                <li><span>Age:</span> 35 years old</li>
                <li><span>Email:</span> manishjangir027@gmail.com</li>
                <li><span>Address:</span> Sikar Road, Jaipur</li>
              </ul>
            </div>
            <div className="cv-button">
              <a className="main-btn" href="/Manish_Jangir_CV_PHP.pdf" download>
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
