import React, { useState } from 'react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email is invalid';
        return '';
      case 'message':
        return value.trim() ? '' : 'Message is required';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Live validation while typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }

    setSubmitted(false); // reset on typing
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
    } else {
      setSubmitted(false);
    }
  };


  return (
    <>
      <section className="contact section-padding" id="contact">
        <div className="container">
          <div className="main-heading mx-auto">
            <h2 className="main-head-animation">Contact</h2>
            <span>Send a Message</span>
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
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.86053520977!2d75.79055784999998!3d26.885210750000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1753182133542!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </h5>
                <address className="mb-0">Jaipur, India</address>
              </div>

              <div className="email">
                <i className="far fa-envelope"></i>
                <h5>Email</h5>
                <a href="mailto:tona@example.com">manishjangir027@gmail.com</a>
              </div>

              <div className="phone">
                <i className="fas fa-phone-alt"></i>
                <h5>Phone</h5>
                <a href="tel:+918114489686">+91 8114489686</a>
              </div>

              <div className="social">
                <i className="fas fa-share-alt"></i>
                <h5>Social Links</h5>
                <div className="social-links pt-2 d-flex align-items-center justify-content-center">
                  <a className="mx-2" href="https://www.facebook.com/manish.jangir.127/"><i className="fab fa-facebook-f"></i></a>
                  {/* <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a> */}
                  <a className="mx-2" href="https://www.instagram.com/its_me_manish027/"><i className="fab fa-instagram"></i></a>
                  <a className="mx-2" href="https://www.linkedin.com/in/iammanishjangir/"><i className="fab fa-linkedin-in"></i></a>
                  <a className="mx-2" href="malto:manishjagir027@gmail.com"><i className="fab fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-field p-4 col-12 col-md-8">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="name mb-3">
                  <input
                    className="w-100 p-2"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Name"
                  />
                  {touched.name && errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>

                <div className="email mb-3">
                  <input
                    className="w-100 p-2"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                  />
                  {touched.email && errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>

                <div className="message mb-3">
                  <textarea
                    className="w-100 p-2"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Message"
                  />
                  {touched.message && errors.message && (
                    <small className="text-danger">{errors.message}</small>
                  )}
                </div>

                <button type="submit">Send Message</button>
                {submitted && (
                  <p className="mt-3 text-success">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
