"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Option A: hide after a fixed delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s – tweak as you like

    return () => clearTimeout(timer);
  }, []);

  // When not loading, render nothing – preloader disappears
  if (!loading) return null;

  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner">
          <img 
            src="/assets/img/logo/logo.png" 
            alt="Bharat Fibernet Logo" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: 'auto',
              zIndex: 10
            }}
          />
        </div>
        <div className="txt-loading">
          <span data-text-preloader="B" className="letters-loading">
            B
          </span>
          <span data-text-preloader="H" className="letters-loading">
            H
          </span>
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="R" className="letters-loading">
            R
          </span>
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>

          {/* Use a non-breaking space entity or a dedicated span for the space */}
          &nbsp; 

          <span data-text-preloader="F" className="letters-loading">
            F
          </span>
          <span data-text-preloader="I" className="letters-loading">
            I
          </span>
          <span data-text-preloader="B" className="letters-loading">
            B
          </span>
          <span data-text-preloader="E" className="letters-loading">
            E
          </span>
          <span data-text-preloader="R" className="letters-loading">
            R
          </span>
          <span data-text-preloader="N" className="letters-loading">
            N
          </span>
          <span data-text-preloader="E" className="letters-loading">
            E
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
        </div>
        <p className="text-center">The Internet, Engineered for Enterprises.</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;