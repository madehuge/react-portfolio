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
                  <h4>Sr. WordPress Developer / Sr. Software Engineer </h4>
                  <span className="date">AgreeYa Solutions India Pvt. ltd. (July 2023 - May 2025)</span>
                  <p className="info">
                    Contributed to internal and external enterprise applications, including QuickApps, Quest Recovery Manager, and custom modules for SharePoint-based solutions.  
                    Designed and integrated REST APIs to support cross-platform functionality and seamless communication between services.  
                    Worked closely with the USA-based product team in a collaborative MNC environment, ensuring timely delivery and global support alignment.
                  </p>
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.2s">
                  <span className="res-circle"></span>
                  <h4>PHP - Technical Lead (LAMP, AWS, WordPress)</h4>
                  <span className="date">OneClick IT Consultancy Pvt. ltd. (Jan 2022 - Jun 2023)</span>
                  <p className="info">
                    Led end-to-end architecture and development of scalable web applications using LAMP, React, and Node.js.  
                    Deployed and managed cloud infrastructure on AWS (EC2, S3, RDS, ALB, Lambda) to ensure high availability and performance.  
                    Mentored cross-functional teams, defined coding standards, and drove agile delivery for enterprise-grade solutions.
                  </p>
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.4s">
                  <span className="res-circle"></span>
                  <h4>Sr. Web Developer </h4>
                  <span className="date">Magnious Solutions Pvt. Ltd. (Jan 2016 - Dec 2021)</span>
                 <p className="info">
                    Worked on a variety of projects ranging from custom WordPress websites to full-fledged CRM platforms.  
                    Integrated and consumed REST APIs for dynamic content and third-party service communication.  
                    Contributed to both frontend and backend development, ensuring responsive design and robust functionality.
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
                  <span className="date">SBCET-Rajasthan Technical University (2013)</span>
                  <p className="info">
                    Earned B.Tech (Honors) in 2013 from SBCET Jaipur, affiliated with Rajasthan Technical University (RTU), Kota.
                  </p>
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.3s">
                  <span className="res-circle"></span>
                  <h4>GenAI online certificate</h4>
                  <span className="date">Jatan Shah - 2024</span>
                 
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.5s">
                  <span className="res-circle"></span>
                  <h4>MERN Stack online certificate</h4>
                  <span className="date">UpskillsMafia - 2024</span>
                  
                </div>

                <div className="wow fadeInLeft res-text" data-wow-delay="0.5s">
                  <span className="res-circle"></span>
                  <h4>React.JS online certificate</h4>
                  <span className="date">ICTRD (Indian Council For Technical Research And Development) - 2025</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
