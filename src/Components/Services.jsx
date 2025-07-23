import React from 'react';
import servicesData from '../Data/servicesData';

export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="main-heading mx-auto">
          <h2 className="main-head-animation">Strength</h2>
          <span>What I Offer</span>
        </div>
        <div className="services-field mt-4 row">
          {servicesData.map((service) => (
            <div
              className="serv-box mb-2 mt-5 col-12 col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay={service.delay}
              key={service.id}
            >
              <div className="serv-cont cursor-pointer-hover p-3 position-relative">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-center pt-4 pb-2">{service.title}</h3>
                <p className="text-center">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="more-services text-center mt-4 pt-2">
          <a href="#contact" className="main-btn">
            More Services
          </a>
        </div>
      </div>
    </section>
  );
}
