"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HERO_SLIDES } from "./HERO_SLIDES";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[index];

  return (
    <section
      className="hero-section hero-1 bg-cover fix"
      style={{ backgroundImage: `url(${slide.background})` }}
    >
      <div className="container">
        <div className="row g-4 justify-content-between">

          {/* LEFT SIDE CONTENT */}
<div className="col-lg-6">
  <div className="hero-content">
    <h1 className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#ffffff' }}>
      {slide.title}
    </h1>

    <p className="hero-subtext mt-3 wow fadeInUp" data-wow-delay=".3s" style={{ color: '#ffffff' }}>
      {slide.subtitle}
    </p>

    <div className="hero-button mt-4">
      <Link
        href={slide.buttonLink}
        className="theme-btn hover-white wow fadeInUp"
        data-wow-delay=".4s"
      >
        {slide.buttonText} <i className="far fa-arrow-right" />
      </Link>
    </div>

    <div className="d-flex align-items-center gap-4 mt-50 wow fadeInUp" data-wow-delay=".6s" style={{background: 'none !important', backgroundColor: 'transparent !important'}}>
      <img src="/assets/img/hero/client.png" alt="img" style={{background: 'none', backgroundColor: 'transparent'}} />
      <p style={{background: 'none', backgroundColor: 'transparent', margin: 0, padding: 0, boxShadow: 'none', border: 'none', color: '#ffffff'}}>
        Trusted by 1M+ people <br />
        around the globe
      </p>
    </div>

    {/* Slider Dots */}
    <div className="d-flex gap-2 mt-4">
      {HERO_SLIDES.map((s, i) => (
        <button
          key={s.id}
          className={`hero-dot ${i === index ? "active" : ""}`}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  </div>
</div>


          {/* RIGHT SIDE FORM (unchanged) */}
          <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="hero-contact-box">
                <h4>We are just a Call Away</h4>
                <p>Enter your details below</p>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-item"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="payment-save">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="save-for-next"
                          id="saveForNext"
                        />
                        <p>
                          I’ve Read and agreed to{" "}
                          <Link href="/">Terms &amp; Conditions</Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="theme-btn">
                        Get Started Now <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
