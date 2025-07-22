import React from 'react';

export default function Services() {
  return (
    <>
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Services</h2>
            <span>What I Offer</span>
          </div>
          <div className="services-field mt-4 row">
            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-sitemap"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">Web Development</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium quo quasi. Sit, saepe impedit!
                </p>
              </div>
            </div>

            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">UI / UX design</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium quo quasi. Sit, saepe impedit!
                </p>
              </div>
            </div>

            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">Mobile Apps</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium quo quasi. Sit, saepe impedit!
                </p>
              </div>
            </div>

            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">Cyber Security</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium quo quasi. Sit, saepe impedit!
                </p>
              </div>
            </div>

            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">Database Analysis</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium quo quasi. Sit, saepe impedit!
                </p>
              </div>
            </div>

            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-mail-bulk"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">Marketing</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium quo quasi. Sit, saepe impedit!
                </p>
              </div>
            </div>
          </div>

          <div className="more-services text-center mt-4 pt-2">
            <a href="#" className="main-btn">
              More Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
