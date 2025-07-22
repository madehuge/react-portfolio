import React from 'react';

export default function Reviews() {
  return (
    <>
      <section className="reviews section-padding" id="reviews">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Reviews</h2>
            <span>Clients Feedback</span>
          </div>
          <div className="review-field row justify-content-between align-items-center">
            <div className="wow bounceInUp review-swiper-image col-3">
              <div className="swiper-wrapper">
                <div className="swiper-slide px-0">
                  <img
                    className="img-fluid w-100"
                    src="images/clients/client1.jpg"
                    alt="clients reviews"
                  />
                </div>
                <div className="swiper-slide px-0">
                  <img
                    className="img-fluid w-100"
                    src="images/clients/client2.jpg"
                    alt="clients reviews"
                  />
                </div>
                <div className="swiper-slide px-0">
                  <img
                    className="img-fluid w-100"
                    src="images/clients/client3.jpg"
                    alt="clients reviews"
                  />
                </div>
              </div>
            </div>

            <div className="review-swiper-text position-relative col-12 col-lg-8">
              <div className="swiper-wrapper">
                {/* Review 1 */}
                <div className="swiper-slide">
                  <div className="client-info">
                    <div className="review-head py-3">
                      <img
                        className="text-slider-image mx-auto"
                        src="images/clients/client1.jpg"
                        alt="clients reviews"
                      />
                      <div className="rev-box d-flex align-items-center justify-content-lg-start justify-content-center">
                        <i className="fas fa-quote-left pe-3 pt-2"></i>
                        <div className="review-details">
                          <h4 className="client-name mb-2">Hunter Rad</h4>
                          <div className="rating d-flex">
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <q>
                      Li Europan lingues es membres del sam familie. Lor
                      separat existentie es un myth. Por scientie, musica,
                      sport etc, litot Europa usa li sam vocabular. Li lingues
                      differe solmen in
                    </q>
                    <div className="review-dates d-flex justify-content-between mt-3">
                      <div className="client-project">
                        <span>Project Type: </span>Website design
                      </div>
                      <p className="date">
                        <span>Receiving date: </span>30 jan 2018
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="swiper-slide">
                  <div className="client-info">
                    <div className="review-head py-3">
                      <img
                        className="text-slider-image mx-auto"
                        src="images/clients/client2.jpg"
                        alt="clients reviews"
                      />
                      <div className="rev-box d-flex align-items-center justify-content-lg-start justify-content-center">
                        <i className="fas fa-quote-left pe-3 pt-2"></i>
                        <div className="review-details">
                          <h4 className="client-name mb-2">Gleda Wilson</h4>
                          <div className="rating d-flex">
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <q>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. I am alone, and feel the charm
                    </q>
                    <div className="review-dates d-flex justify-content-between mt-3">
                      <div className="client-project">
                        <span>Project Type: </span>Database modification
                      </div>
                      <p className="date">
                        <span>Receiving date: </span>5 Feb 2019
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="swiper-slide">
                  <div className="client-info">
                    <div className="review-head py-3">
                      <img
                        className="text-slider-image mx-auto"
                        src="images/clients/client3.jpg"
                        alt="clients reviews"
                      />
                      <div className="rev-box d-flex align-items-center justify-content-lg-start justify-content-center">
                        <i className="fas fa-quote-left pe-3 pt-2"></i>
                        <div className="review-details">
                          <h4 className="client-name mb-2">Eadric Jakob</h4>
                          <div className="rating d-flex">
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                            <i className="mx-1 fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <q>
                      The European languages are members of the same family.
                      Their separate existence is a myth. For science, music,
                      sport, etc, Europe uses the same vocabulary. The languages
                      only differ in
                    </q>
                    <div className="review-dates d-flex justify-content-between mt-3">
                      <div className="client-project">
                        <span>Project Type: </span>Mobile application
                      </div>
                      <p className="date">
                        <span>Receiving date: </span>17 Sept 2020
                      </p>
                    </div>
                  </div>
                </div>

                {/* Swiper Controls */}
                <div className="swiper-pagination swiper-pagination-white cursor-pointer-hover"></div>
                <div className="swiper-button-next d-none d-sm-flex swiper-button-white cursor-pointer-hover"></div>
                <div className="swiper-button-prev d-none d-sm-flex swiper-button-white cursor-pointer-hover"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
