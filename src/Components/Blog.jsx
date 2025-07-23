import React from 'react';
import trueLeaderBlog from '../assets/images/blog/trueLeaderBlog.jpg';
import collobrativeTeam from '../assets/images/blog/collobrativeTeam.jpg';
import truthITHiring from '../assets/images/blog/truthITHiring.jpg';

export default function Blog() {
  return (
    <>
      <section className="blog section-padding" id="blog">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Blog</h2>
            <span>Read About my Thoughts</span>
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
                    src={trueLeaderBlog}
                    alt="blog image"
                  />
                  <span className="blog-title">Leadership</span>
                </a>
                <h3 className="blog-head my-2 px-2">True Leader Thoughts</h3>
                <p className="blog-text mb-3 px-2">
                  A true leader doesn’t just manage a team; they ensure fairness, empower juniors, and help them grow into strong professionals. Leadership is about fostering a culture where individuals are given opportunities to shine.
                </p>
                <hr className="my-0" />
                <div className="blog-links d-flex justify-content-between align-items-center p-2">
                  <div className="blog-rating">
                    <a className="blog-like ms-1 me-3" href="#">173</a>
                    <a className="blog-comment" href="#">34</a>
                  </div>
                  <div className="more">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7299267873716256769/" target='_blank'>
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
                    src={collobrativeTeam}
                    alt="Collaborative Team"
                  />
                  <span className="blog-title">Team Collaboration</span>
                </a>
                <h3 className="blog-head my-2 px-2">Collaborative Team</h3>
                <p className="blog-text mb-3 px-2">
                  True progress happens when we foster open discussions, embrace diverse perspectives, and support each other’s growth. Every insight, every experience, and every fresh idea contributes to shaping the future.
                </p>
                <hr className="my-0" />
                <div className="blog-links d-flex justify-content-between align-items-center p-2">
                  <div className="blog-rating">
                    <a className="blog-like ms-1 me-3" href="#">173</a>
                    <a className="blog-comment" href="#">34</a>
                  </div>
                  <div className="more">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7296395380970110976/" target='_blank'>
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
                    src={truthITHiring}
                    alt="blog image"
                  />
                  <span className="blog-title">Blog</span>
                </a>
                <h3 className="blog-head my-2 px-2">Today’s IT Industry: Promises vs. Practice</h3>
                <p className="blog-text mb-3 px-2">
                 What companies promise and what they practice often stand miles apart. Behind the glossy LinkedIn posts, flashy job descriptions, and vibrant career pages lies a growing culture of inconsistency and superficial branding.
                </p>
                <hr className="my-0" />
                <div className="blog-links d-flex justify-content-between align-items-center p-2">
                  <div className="blog-rating">
                    <a className="blog-like ms-1 me-3" href="#">173</a>
                    <a className="blog-comment" href="#">34</a>
                  </div>
                  <div className="more">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7353648595151065089/" target='_blank'>
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Blogs Button 
          <div className="more-blogs text-center mt-4 pt-2">
            <a href="#" className="main-btn">
              More Blogs
            </a>
          </div>*/}
        </div>
      </section>
    </>
  );
}
