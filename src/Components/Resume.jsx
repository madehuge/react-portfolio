import React from 'react';

export default function Resume() {
  return (
    <>
      <section className="resume section-padding" id="resume">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Resume</h2>
            <span>Qualifications</span>
          </div>
          <div className="resume-field mt-5 row">
            {/* Experience Section */}
            <div className="experience-box mb-3 mb-lg-0 col-12 col-lg-6">
              <div className="experience-content resume-content">
                <div className="wow bounceIn res-head mb-3 mb-sm-5 d-flex justify-content-sm-start justify-content-center align-items-center">
                  <i className="fas fa-laptop-code"></i>
                  <h3 className="mb-0">My Experiences</h3>
                </div>

                <div className="wow fadeInLeft res-text">
                  <span className="res-circle"></span>
                  <h4>Web Developer</h4>
                  <span className="date">2009 - 2013</span>
                  <p className="info">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                  </p>
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.2s">
                  <span className="res-circle"></span>
                  <h4>Mobile Developer</h4>
                  <span className="date">2014 - 2018</span>
                  <p className="info">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                  </p>
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.4s">
                  <span className="res-circle"></span>
                  <h4>IT Developer</h4>
                  <span className="date">2019 - 2021</span>
                  <p className="info">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="education-box col-12 col-lg-6">
              <div className="education-content resume-content">
                <div className="wow bounceIn res-head mb-3 mb-sm-5 d-flex justify-content-sm-start justify-content-center align-items-center">
                  <i className="fas fa-graduation-cap"></i>
                  <h3 className="mb-0">My Education</h3>
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.1s">
                  <span className="res-circle"></span>
                  <h4>Bachelor's degree in Computer Science</h4>
                  <span className="date">2008</span>
                  <p className="info">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                  </p>
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.3s">
                  <span className="res-circle"></span>
                  <h4>Mobile development online certificate</h4>
                  <span className="date">2013</span>
                  <p className="info">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                  </p>
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.5s">
                  <span className="res-circle"></span>
                  <h4>Cyber Security online certificate</h4>
                  <span className="date">2018</span>
                  <p className="info">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
