import React from 'react';
import skillsData from '../Data/skillsData';

export default function Skills() {
  return (
    <section className="skills section-padding" id="skills">
      <div className="container">
        <div className="main-heading mx-auto">
          <h2 className="main-head-animation">Skills</h2>
          <span>My Skills</span>
        </div>
        <div className="skill-field mt-5 row">
          {skillsData.map((column, colIndex) => (
            <div className="skill-box col-12 col-lg-6" key={`column-${colIndex}`}>
              {column.items.map((skill) => (
                <div className="skill-piece" key={skill.name}>
                  <p className="name mb-2">{skill.name}</p>
                  <div className="skill-loader">
                    <span
                      data-progress={skill.progress}
                      className="loader-liquid"
                    ></span>
                    <span className="loader-value">{skill.progress}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
