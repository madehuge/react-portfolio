import React from 'react';

export default function Services() {
  return (
    <>
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Strength</h2>
            <span>What I Offer</span>
          </div>
          <div className="services-field mt-4 row">
            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-sitemap"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">Team Guidance & Leadership</h3>
                <p className="text-center">
                 Experienced in guiding cross-functional teams with clear direction, fostering collaboration, and driving successful project outcomes through strong leadership.
                </p>
              </div>
            </div>

            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">Web Delivery</h3>
                <p className="text-center">
                  Skilled in end-to-end web delivery, ensuring timely deployment, cross-team coordination, and quality assurance for seamless user experience.
                </p>
              </div>
            </div>

            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">DevOps + Cloud Architect</h3>
                <p className="text-center">
                  Experienced in DevOps and AWS cloud architecture, leveraging EC2, S3, CloudWatch, and ALB to build scalable, monitored, and high-availability infrastructures.
                </p>
              </div>
            </div>

            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">Performance & Optimization</h3>
                <p className="text-center">
                  Skilled in modern MERN stack and PHP with a focus on performance optimization and scalable development.
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
                  Proficient in MySQL, MariaDB, and MongoDB with a focus on performance, scalability, and complex query optimization.
                </p>
              </div>
            </div>

            <div className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className="fas fa-mail-bulk"></i>
                </div>
                <h3 className="text-center pt-4 pb-2">Client Handling</h3>
                <p className="text-center">
                  Experienced in clear client communication, with a focus on trust-building and precise delivery of requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="more-services text-center mt-4 pt-2">
            <a href="#contact" className="main-btn">
              More Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
