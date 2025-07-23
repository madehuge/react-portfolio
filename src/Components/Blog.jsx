import React from 'react';
import { blogPosts } from '../Data/blogData';

export default function Blog() {
  return (
    <section className="blog section-padding" id="blog">
      <div className="container">
        <div className="main-heading mx-auto">
          <h2 className="main-head-animation">Blog</h2>
          <span>Read About my Thoughts</span>
        </div>

        <div className="blog-field pt-4 row">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="wow fadeInDown blog-box mb-4 col-12 col-md-6 col-lg-4"
              data-wow-delay={post.delay}
            >
              <div className="blog-content">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target={`#${post.id}`}
                  className="show-pop image d-block position-relative overflow-hidden"
                >
                  <img
                    className="img-fluid w-100 d-block"
                    src={post.image}
                    alt={post.title}
                  />
                  <span className="blog-title">{post.category}</span>
                </a>
                <h3 className="blog-head my-2 px-2">{post.title}</h3>
                <p className="blog-text mb-3 px-2">{post.description}</p>
                <hr className="my-0" />
                <div className="blog-links d-flex justify-content-between align-items-center p-2">
                  <div className="blog-rating">
                    <a className="blog-like ms-1 me-3" href="#">173</a>
                    <a className="blog-comment" href="#">34</a>
                  </div>
                  <div className="more">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
