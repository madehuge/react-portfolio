import React from 'react';

export default function Blog() {
  return (
    <>
      <section className="blog section-padding" id="blog">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Blog</h2>
            <span>Read News</span>
          </div>
          <div className="blog-field pt-4 row">
            {/* Blog Post 1 */}
            <div className="wow fadeInDown blog-box mb-4 col-12 col-md-6 col-lg-4">
              <div className="blog-content">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#blogModal1"
                  data-popup="first-pop"
                  className="show-pop image d-block position-relative overflow-hidden"
                >
                  <img
                    className="img-fluid w-100 d-block"
                    src="images/blog/blog1.jpg"
                    alt="blog image"
                  />
                  <span className="blog-title">Web</span>
                </a>
                <h3 className="blog-head my-2 px-2">Web development technology</h3>
                <p className="blog-text mb-3 px-2">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
                </p>
                <hr className="my-0" />
                <div className="blog-links d-flex justify-content-between align-items-center p-2">
                  <div className="blog-rating">
                    <a className="blog-like ms-1 me-3" href="#">173</a>
                    <a className="blog-comment" href="#">34</a>
                  </div>
                  <div className="more">
                    <a className="show-pop" href="#" data-bs-toggle="modal" data-bs-target="#blogModal1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="wow fadeInDown blog-box mb-4 col-12 col-md-6 col-lg-4" data-wow-delay="0.4s">
              <div className="blog-content">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#blogModal2"
                  className="image d-block position-relative overflow-hidden"
                >
                  <img
                    className="img-fluid w-100 d-block"
                    src="images/blog/blog2.jpg"
                    alt="blog image"
                  />
                  <span className="blog-title">Mobile</span>
                </a>
                <h3 className="blog-head my-2 px-2">Flutter technology</h3>
                <p className="blog-text mb-3 px-2">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
                </p>
                <hr className="my-0" />
                <div className="blog-links d-flex justify-content-between align-items-center p-2">
                  <div className="blog-rating">
                    <a className="blog-like ms-1 me-3" href="#">173</a>
                    <a className="blog-comment" href="#">34</a>
                  </div>
                  <div className="more">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#blogModal2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="wow fadeInDown blog-box mb-4 mx-auto col-12 col-md-6 col-lg-4" data-wow-delay="0.8s">
              <div className="blog-content">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#blogModal3"
                  className="image d-block position-relative overflow-hidden"
                >
                  <img
                    className="img-fluid w-100 d-block"
                    src="images/blog/blog3.jpg"
                    alt="blog image"
                  />
                  <span className="blog-title">Design</span>
                </a>
                <h3 className="blog-head my-2 px-2">Attractive designs</h3>
                <p className="blog-text mb-3 px-2">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
                </p>
                <hr className="my-0" />
                <div className="blog-links d-flex justify-content-between align-items-center p-2">
                  <div className="blog-rating">
                    <a className="blog-like ms-1 me-3" href="#">173</a>
                    <a className="blog-comment" href="#">34</a>
                  </div>
                  <div className="more">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#blogModal3">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Blogs Button */}
          <div className="more-blogs text-center mt-4 pt-2">
            <a href="#" className="main-btn">
              More Blogs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
