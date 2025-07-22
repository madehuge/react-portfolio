import React from 'react';

export default function Footer() {
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
