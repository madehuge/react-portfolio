import React from 'react';

export default function Counters() {
  return (
    <>
      <section className="counter pt-5 pb-5" id="counter">
        <div className="container">
          <div className="row counter-area">
            <div className="wow fadeInLeft col-12 col-lg-3 col-md-6 text-center">
              <i className="far fa-hand-rock d-block mb-2"></i>
              <span className="odometer" data-count="11">00</span>
              <h4>Years of experience</h4>
            </div>
            <div className="wow fadeInLeft col-12 col-lg-3 col-md-6 text-center" data-wow-delay="0.3s">
              <i className="far fa-handshake d-block mb-2"></i>
              <span className="odometer" data-count="60">00+</span>
              <h4>Successful Projects</h4>
            </div>
            <div className="wow fadeInLeft col-12 col-lg-3 col-md-6 text-center" data-wow-delay="0.6s">
              <i className="far fa-smile-beam d-block mb-2"></i>
              <span className="odometer" data-count="15">00</span>
              <h4>Clients Interations</h4>
            </div>
            <div className="wow fadeInLeft col-12 col-lg-3 col-md-6 text-center" data-wow-delay="0.9s">
              <i className="fas fa-award d-block mb-2"></i>
              <span className="odometer" data-count="3">00</span>
              <h4>Awards achieved</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
