import React from 'react';

export default function Skills() {
  return (
    <>
      <section className="skills section-padding" id="skills">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Skills</h2>
            <span>My Skills</span>
          </div>
          <div className="skill-field mt-5 row">
            <div className="skill-box col-12 col-lg-6">
              <div className="skill-piece">
                <p className="name mb-2">HTML</p>
                <div className="skill-loader">
                  <span data-progress="70%" className="loader-liquid"></span>
                  <span className="loader-value">70%</span>
                </div>
              </div>
              <div className="skill-piece">
                <p className="name mb-2">CSS,SCSS</p>
                <div className="skill-loader">
                  <span data-progress="85%" className="loader-liquid"></span>
                  <span className="loader-value">85%</span>
                </div>
              </div>
              <div className="skill-piece">
                <p className="name mb-2">JS</p>
                <div className="skill-loader">
                  <span data-progress="70%" className="loader-liquid"></span>
                  <span className="loader-value">70%</span>
                </div>
              </div>
              <div className="skill-piece">
                <p className="name mb-2">Bootstrap (3,4,5)</p>
                <div className="skill-loader">
                  <span data-progress="80%" className="loader-liquid"></span>
                  <span className="loader-value">80%</span>
                </div>
              </div>
              <div className="skill-piece">
                <p className="name mb-2">React.JS (18,19)</p>
                <div className="skill-loader">
                  <span data-progress="80%" className="loader-liquid"></span>
                  <span className="loader-value">80%</span>
                </div>
              </div>
              
            </div>
            <div className="skill-box col-12 col-lg-6">
              <div className="skill-piece">
                <p className="name mb-2">Node.JS (18,20,22,24)</p>
                <div className="skill-loader">
                  <span data-progress="75%" className="loader-liquid"></span>
                  <span className="loader-value">75%</span>
                </div>
              </div>
              <div className="skill-piece">
                <p className="name mb-2">PHP (WordPress, Shopify)</p>
                <div className="skill-loader">
                  <span data-progress="90%" className="loader-liquid"></span>
                  <span className="loader-value">90%</span>
                </div>
              </div>
              <div className="skill-piece">
                <p className="name mb-2">Git (Github & Gitlab )</p>
                <div className="skill-loader">
                  <span data-progress="90%" className="loader-liquid"></span>
                  <span className="loader-value">90%</span>
                </div>
              </div>
              <div className="skill-piece">
                <p className="name mb-2">Database (MySQL,MariaDB )</p>
                <div className="skill-loader">
                  <span data-progress="80%" className="loader-liquid"></span>
                  <span className="loader-value">80%</span>
                </div>
              </div>

               <div className="skill-piece">
                <p className="name mb-2">Cloud - IAAS, SAAS, PAAS (AWS-S3, EC2, Cloud-Watch, ALB, RDS)</p>
                <div className="skill-loader">
                  <span data-progress="80%" className="loader-liquid"></span>
                  <span className="loader-value">80%</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
