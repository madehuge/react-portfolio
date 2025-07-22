import React from 'react';

export default function Loader() {
  return (
    <>
      <div className="preloader">
        <div className="load-splitter"></div>
        <div className="load-splitter"></div>
        <div className="loader">
          <p className="text">
            Manish<span>.</span>
          </p>
          <div className="loading-bar">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
