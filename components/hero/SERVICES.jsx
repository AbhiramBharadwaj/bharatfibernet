"use client";

import { useState } from "react";
import SERVICES from "./SERVICES";

export default function ServicesSection() {
  // Basic safety check
  if (!Array.isArray(SERVICES) || SERVICES.length === 0) {
    console.error("SERVICES array is empty or not defined");
    return null;
  }

  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const activeService =
    SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section
      className="service-section section-padding pt-5"
      style={{
        backgroundImage: 'url("/assets/img/bg2.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#000000' }}>
            Integrated Technology. <br />
            Seamless Connectivity.
          </h2>

          <p className="mt-3 wow fadeInUp" data-wow-delay=".3s" style={{ color: '#000000' }}>
            From infrastructure to innovation – we deliver end-to-end network,
            cloud, and security services that power digital transformation.
          </p>

          <p
            className="mt-2 fw-semibold wow fadeInUp services-subtitle"
            data-wow-delay=".35s"
            style={{ color: '#000000' }}
          >
            Our services include
          </p>
        </div>

        {/* Tabs row */}
        <div className="row justify-content-center g-3 mt-3">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="col-6 col-md-3 col-lg-3 col-xl-2 wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.05}s`}
            >
              <button
                type="button"
                onClick={() => setActiveId(service.id)}
                className={
                  "service-tab-card" +
                  (service.id === activeId ? " active" : "")
                }
              >
                <span>{service.label}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        <div className="row justify-content-center mt-4">
          <div className="col-lg-10">
            <div className="service-detail-card">
              <div className="row align-items-center">
                <div className="col-md-4 text-md-end text-start mb-3 mb-md-0">
                  <p className="detail-heading">Service</p>
                  <p className="detail-title">{activeService.title}</p>
                </div>

                <div className="col-md-8">
                  <p className="detail-heading">What It Means</p>
                  <p className="detail-text">{activeService.meaning}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
