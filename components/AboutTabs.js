"use client";
import { useState } from "react";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("who");

  const tabs = [
    { id: "who", label: "Who are We" },
    { id: "why", label: "Why Choose Us?" },
    { id: "goal", label: "Our Goal" },
    { id: "believe", label: "What We Believe" }
  ];

  const tabContent = {
    who: {
      title: "Pioneering the Future of Connectivity",
      subtitle: "A Network Built for the Future. Powering a Smarter Nation.",
      content: (
        <>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            At <strong>Bharath VoIP Communications</strong>, we believe that reliable connectivity is the backbone of progress. Since <strong>2015</strong>, we've been building the digital foundation that helps businesses across <strong>Andhra Pradesh and Telangana</strong> stay connected, productive, and secure.
          </p>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".6s">
            Our vision is simple - to deliver <strong>premium internet and enterprise communication solutions</strong> that enable organizations to grow without limits. From dedicated leased lines and managed networks to cloud and cybersecurity services, every solution we design is backed by engineering precision, local expertise, and an unwavering focus on uptime.
          </p>
          <div className="highlight-box mt-4 p-4 wow fadeInUp" data-wow-delay=".7s" style={{ border: '2px solid var(--theme)', borderRadius: '10px', background: '#f8f9fa' }}>
            <h5 className="text-center" style={{ fontStyle: 'italic' }}>
              We're not just powering connections - we're enabling a smarter, stronger, and more connected India.
            </h5>
          </div>
        </>
      )
    },
    why: {
      title: "Trusted by Businesses That Can't Afford to Pause",
      subtitle: "In a world where every second matters, downtime isn't an option.",
      content: (
        <>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            That's why enterprises across Andhra Pradesh and Telangana trust Bharath VoIP Communications for fast, secure, and consistent connectivity.
          </p>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".6s">
            We don't just deliver the internet - we deliver confidence. Our team listens, adapts, and engineers solutions that keep operations smooth, no matter what.
          </p>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".7s">
            With dual-link redundancy and multi-gateway routing, we ensure your business never skips a beat.
          </p>
          <div className="highlight-box mt-4 p-4 wow fadeInUp" data-wow-delay=".8s" style={{ border: '2px solid var(--theme)', borderRadius: '10px', background: '#f8f9fa' }}>
            <h5 className="text-center" style={{ fontStyle: 'italic' }}>
              Helping your growth run on reliable digital rails. Because when your network performs flawlessly, so does your business.
            </h5>
          </div>
        </>
      )
    },
    goal: {
      title: "Our Goal",
      subtitle: "Building India's Digital Future, One Connection at a Time",
      content: (
        <>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Our goal is to make world-class connectivity accessible to every business in Andhra Pradesh and Telangana. We're committed to:
          </p>
          <ul className="mt-4" style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            <li className="wow fadeInUp" data-wow-delay=".6s">✓ Delivering 99.9% uptime through robust infrastructure</li>
            <li className="wow fadeInUp" data-wow-delay=".65s">✓ Enabling digital transformation for enterprises</li>
            <li className="wow fadeInUp" data-wow-delay=".7s">✓ Providing scalable solutions that grow with your business</li>
            <li className="wow fadeInUp" data-wow-delay=".75s">✓ Ensuring data security and network reliability</li>
            <li className="wow fadeInUp" data-wow-delay=".8s">✓ Supporting local businesses with expert, responsive service</li>
          </ul>
          <div className="highlight-box mt-4 p-4 wow fadeInUp" data-wow-delay=".85s" style={{ border: '2px solid #0d6efd', borderRadius: '10px', background: '#f8f9fa' }}>
            <h5 className="text-center" style={{ fontStyle: 'italic' }}>
              Empowering businesses to achieve more through reliable, high-performance connectivity.
            </h5>
          </div>
        </>
      )
    },
    believe: {
      title: "We Believe in People, Not Just Technology",
      subtitle: "Technology is only as good as the difference it makes in people's lives.",
      content: (
        <>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            At Bharath VoIP, we design our network solutions to keep your team connected, your data protected, and your operations running effortlessly.
          </p>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".6s">
            With local expertise, proactive support, and human-first service, we make sure you can focus on what really matters - your growth.
          </p>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".7s">
            Every solution we deliver is backed by:
          </p>
          <ul className="mt-3" style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            <li className="wow fadeInUp" data-wow-delay=".75s">• 24/7 local support teams who understand your needs</li>
            <li className="wow fadeInUp" data-wow-delay=".8s">• Proactive monitoring and rapid issue resolution</li>
            <li className="wow fadeInUp" data-wow-delay=".85s">• Human-centered service that puts you first</li>
          </ul>
          <div className="highlight-box mt-4 p-4 wow fadeInUp" data-wow-delay=".9s" style={{ border: '2px solid var(--theme)', borderRadius: '10px', background: '#f8f9fa' }}>
            <h5 className="text-center" style={{ fontStyle: 'italic' }}>
              Technology should simplify, not complicate. That's our belief.
            </h5>
          </div>
        </>
      )
    }
  };

  const activeContent = tabContent[activeTab];

  return (
    <section className="about-section fix section-padding">
      <div className="container">
        {/* Tab Content */}
        <div className="row mb-5">
          <div className="col-lg-12 text-left mb-4">
            <div className="section-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: '3.5rem', fontWeight: '700', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                {activeContent.title}
              </h1>
              <h4 className="wow fadeInUp" data-wow-delay=".4s" style={{ fontStyle: 'italic', fontSize: '1.5rem', fontWeight: '400' }}>
                {activeContent.subtitle}
              </h4>
            </div>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="about-content ms-0">
              {activeContent.content}
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="about-image-3">
              <img
                src="/assets/img/w3.png"
                alt="Bharat Fibernet Connectivity"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTabs;
