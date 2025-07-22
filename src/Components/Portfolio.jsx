import React from 'react';

export default function Portfolio() {
  return (
    <>
      <section className="portfolio section-padding" id="portfolio">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Porfolio</h2>
            <span>Our Projects</span>
          </div>

          <div className="prog-filter wow fadeIn">
            <ul className="ps-0">
              <li className="cursor-pointer-hover active" data-filter="all">All</li>
              <li className="cursor-pointer-hover" data-filter=".design">Design</li>
              <li className="cursor-pointer-hover" data-filter=".development">Development</li>
              <li className="cursor-pointer-hover" data-filter=".marketing">Marketing</li>
            </ul>
          </div>

          <div className="port-field row" id="portfolio-shuffle">
            {/* Portfolio Item 1 */}
            <div className="mix design prog-box col-12 col-md-6 col-lg-4 mb-4" data-order="1">
              <a
                data-fancybox="gallery"
                className="d-block position-relative"
                data-caption="Design: Project Title"
                href="images/portfolio/portfolio1.jpg"
              >
                <img className="img-fluid w-100 d-block" src="images/portfolio/portfolio1.jpg" alt="portfolio" />
                <div className="port-disc">
                  <span></span><span></span><span></span><span></span>
                  <i className="fas fa-search-plus"></i>
                  <h4>Project Title</h4>
                  <p className="type mb-0">Design</p>
                </div>
              </a>
            </div>

            {/* Portfolio Item 2 */}
            <div className="mix development prog-box col-12 col-md-6 col-lg-4 mb-4" data-order="2">
              <a
                data-fancybox="gallery"
                data-caption="Development: Project Title"
                className="d-block position-relative"
                href="images/portfolio/portfolio2.jpg"
              >
                <img className="img-fluid w-100 d-block" src="images/portfolio/portfolio2.jpg" alt="portfolio" />
                <div className="port-disc">
                  <span></span><span></span><span></span><span></span>
                  <i className="fas fa-search-plus"></i>
                  <h4>Project Title</h4>
                  <p className="type mb-0">Development</p>
                </div>
              </a>
            </div>

            {/* Portfolio Item 3 */}
            <div className="mix design prog-box col-12 col-md-6 col-lg-4 mb-4" data-order="3">
              <a
                data-fancybox="gallery"
                data-caption="Design: Project Title"
                className="d-block position-relative"
                href="images/portfolio/portfolio3.jpg"
              >
                <img className="img-fluid w-100 d-block" src="images/portfolio/portfolio3.jpg" alt="portfolio" />
                <div className="port-disc">
                  <span></span><span></span><span></span><span></span>
                  <i className="fas fa-search-plus"></i>
                  <h4>Project Title</h4>
                  <p className="type mb-0">Design</p>
                </div>
              </a>
            </div>

            {/* Portfolio Item 4 */}
            <div className="mix marketing prog-box col-12 col-md-6 col-lg-4 mb-4" data-order="4">
              <a
                data-fancybox="gallery"
                data-caption="Marketing: Project Title"
                className="d-block position-relative"
                href="images/portfolio/portfolio4.jpg"
              >
                <img className="img-fluid w-100 d-block" src="images/portfolio/portfolio4.jpg" alt="portfolio" />
                <div className="port-disc">
                  <span></span><span></span><span></span><span></span>
                  <i className="fas fa-search-plus"></i>
                  <h4>Project Title</h4>
                  <p className="type mb-0">Marketing</p>
                </div>
              </a>
            </div>

            {/* Portfolio Item 5 */}
            <div className="mix development prog-box col-12 col-md-6 col-lg-4 mb-4" data-order="5">
              <a
                data-fancybox="gallery"
                data-caption="Development: Project Title"
                className="d-block position-relative"
                href="images/portfolio/portfolio5.jpg"
              >
                <img className="img-fluid w-100 d-block" src="images/portfolio/portfolio5.jpg" alt="portfolio" />
                <div className="port-disc">
                  <span></span><span></span><span></span><span></span>
                  <i className="fas fa-search-plus"></i>
                  <h4>Project Title</h4>
                  <p className="type mb-0">Development</p>
                </div>
              </a>
            </div>

            {/* Portfolio Item 6 */}
            <div className="mix marketing prog-box col-12 col-md-6 col-lg-4 mb-4" data-order="6">
              <a
                data-fancybox="gallery"
                data-caption="Marketing: Project Title"
                className="d-block position-relative"
                href="images/portfolio/portfolio6.jpg"
              >
                <img className="img-fluid w-100 d-block" src="images/portfolio/portfolio6.jpg" alt="portfolio" />
                <div className="port-disc">
                  <span></span><span></span><span></span><span></span>
                  <i className="fas fa-search-plus"></i>
                  <h4>Project Title</h4>
                  <p className="type mb-0">Marketing</p>
                </div>
              </a>
            </div>
          </div>

          <div className="more-projects text-center mt-4 pt-2">
            <a href="#" className="main-btn">More Projects</a>
          </div>
        </div>
      </section>
    </>
  );
}
