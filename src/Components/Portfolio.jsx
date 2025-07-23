import React from 'react';
import portfolioData from '../Data/portfolioData';

export default function Portfolio() {
  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="container">
        <div className="main-heading mx-auto">
          <h2 className="main-head-animation">Portfolio</h2>
          <span>My Efforts</span>
        </div>

        <div className="prog-filter wow fadeIn">
          <ul className="ps-0">
            <li className="cursor-pointer-hover active" data-filter="all">All</li>
            <li className="cursor-pointer-hover" data-filter=".design">System Design</li>
            <li className="cursor-pointer-hover" data-filter=".development">Development</li>
            <li className="cursor-pointer-hover" data-filter=".marketing">Marketing</li>
          </ul>
        </div>

        <div className="port-field row" id="portfolio-shuffle">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className={`mix ${item.category} prog-box col-12 col-md-6 col-lg-4 mb-4`}
              data-order={item.id}
            >
              <a
                data-fancybox="gallery"
                className="d-block position-relative"
                data-caption={item.caption}
                href={item.image}
              >
                <img className="img-fluid w-100 d-block" src={item.image} alt="portfolio" />
                <div className="port-disc">
                  <span></span><span></span><span></span><span></span>
                  <i className="fas fa-search-plus"></i>
                  <h4>{item.title}</h4>
                  <p className="type mb-0">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
