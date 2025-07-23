import React from 'react';
import counterData from '../Data/counterData';

export default function Counters() {
  return (
    <section className="counter pt-5 pb-5" id="counter">
      <div className="container">
        <div className="row counter-area">
          {counterData.map((item) => (
            <div
              key={item.id}
              className="wow fadeInLeft col-12 col-lg-3 col-md-6 text-center"
              data-wow-delay={item.delay}
            >
              <i className={`${item.icon} d-block mb-2`}></i>
              <span className="odometer" data-count={item.count}>
                00
              </span>
              <h4>{item.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
