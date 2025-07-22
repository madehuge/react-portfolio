import React, { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const scripts = [
      'jQuery.js',
      'jquery.appear.js',
      'bootstrap.js',
      'jquery.animatedheadline.js',
      'particles.js',
      'particles_shape_light.js',
      'swiper.js',
      'wow.js',
      'odometer.js',
      'mixitup.js',
      'fancybox.umd.js',
      'main.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = `/js/${src}`; // Adjust path if needed
      script.async = false;
      document.body.appendChild(script);
    });

    // Optional: Cleanup when component unmounts
    return () => {
      scripts.forEach(src => {
        ///js/${src}
        const found = document.querySelector(`script[src="/js/${src}"]`);
        if (found) found.remove();
      });
    };
  }, []);

  return (
    <>
      <footer>
        <div className="container position-relative d-flex flex-column flex-md-row align-items-center justify-content-between">
          <p className="copy mb-2 mb-md-0">&copy; 2021 Tona, All Right Reserved</p>
          <div className="addition-links">
            <a href="#">Privacy Policy</a>
            <span></span>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <a className="scroll-top" href="#">
            <i className="fas fa-angle-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
