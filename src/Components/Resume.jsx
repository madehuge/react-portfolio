import React from 'react';
import { experiences, education } from '../Data/resumeData';

export default function Resume() {
  return (
    <section className="resume section-padding" id="resume">
      <div className="container">
        <div className="main-heading mx-auto">
          <h2 className="main-head-animation">Resume</h2>
          <span>Qualifications</span>
        </div>

        <div className="resume-field mt-5 row">
          {/* Experience */}
          <div className="experience-box mb-3 mb-lg-0 col-12 col-lg-6">
            <div className="experience-content resume-content">
              <div className="wow bounceIn res-head mb-3 mb-sm-5 d-flex justify-content-sm-start justify-content-center align-items-center">
                <i className="fas fa-laptop-code"></i>
                <h3 className="mb-0">My Experiences</h3>
              </div>

              {experiences.map((exp, index) => (
                <div key={exp.id} className="wow fadeInLeft res-text" data-wow-delay={`${index * 0.2}s`}>
                  <span className="res-circle"></span>
                  <h4>{exp.title}</h4>
                  <span className="date">{exp.company} ({exp.date})</span>
                  <p className="info">
                    {exp.details.map((d, i) => (
                      <span key={i}>
                        {d}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="education-box col-12 col-lg-6">
            <div className="education-content resume-content">
              <div className="wow bounceIn res-head mb-3 mb-sm-5 d-flex justify-content-sm-start justify-content-center align-items-center">
                <i className="fas fa-graduation-cap"></i>
                <h3 className="mb-0">My Education</h3>
              </div>

              {education.map((edu, index) => (
                <div key={edu.id} className="wow fadeInLeft res-text" data-wow-delay={`${0.1 + index * 0.2}s`}>
                  <span className="res-circle"></span>
                  <h4>{edu.title}</h4>
                  <span className="date">{edu.institution} - {edu.date}</span>
                  {edu.info && <p className="info">{edu.info}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
