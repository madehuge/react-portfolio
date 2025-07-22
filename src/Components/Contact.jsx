import React from 'react';

export default function Contact() {
  return (
    <>
      <section className="contact section-padding" id="contact">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Contact</h2>
            <span>Send Message</span>
          </div>
          <div className="contact-field my-4 row flex-wrap-reverse">
            <div className="contact-info-field p-2 col-12 col-md-4">
              <div className="location">
                <i className="fas fa-street-view"></i>
                <h5>
                  Location
                  <a
                    data-fancybox
                    data-type="iframe"
                    data-preload="false"
                    data-width="640"
                    data-height="480"
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435330.2461244175!2d-119.22978090041478!3d35.016509229685205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c229d213a60943%3A0x3458deb43bf50b32!2sCalifornia%20City%2C%20CA%2C%20USA!5e0!3m2!1sen!2seg!4v1630528358426!5m2!1sen!2seg"
                    style={{ border: 0 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </h5>
                <address className="mb-0">205 Fairview St. Rochester, NY 14606</address>
              </div>

              <div className="email">
                <i className="far fa-envelope"></i>
                <h5>Email</h5>
                <a href="mailto:tona@example.com">tona@example.com</a>
              </div>

              <div className="phone">
                <i className="fas fa-phone-alt"></i>
                <h5>Phone</h5>
                <a href="tel:#">+2 651 976 468</a>
              </div>

              <div className="social">
                <i className="fas fa-share-alt"></i>
                <h5>Social Links</h5>
                <div className="social-links pt-2 d-flex align-items-center justify-content-center">
                  <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                  <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-field p-4 col-12 col-md-8">
              <form className="contact-form" action="php/contact.php" method="POST">
                <div className="name mb-3">
                  <input className="w-100 p-2" type="text" name="name" required placeholder="Name" />
                </div>
                <div className="email mb-3">
                  <input
                    className="w-100 p-2"
                    type="email"
                    name="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="message mb-3">
                  <textarea className="w-100 p-2" name="message" required placeholder="Message" />
                </div>
                <button type="submit">Send Message</button>
                <p className="mt-3 contact-message"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
