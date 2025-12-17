"use client";

import { useState } from "react";
import FunFactCounter from "@/components/FunFactCounter";
import Pricing from "@/components/Pricing";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import SERVICES_SECTION from "@/components/hero/SERVICES.jsx";
import HeroSlider from "@/components/hero/HeroSlider";
import GuidanceForm from "@/components/GuidanceForm";
import LeasedLineSlider from "@/components/LeasedLineSlider";


const page = () => {
  const [activeTab, setActiveTab] = useState('business');
  const [guidanceStatus, setGuidanceStatus] = useState({ state: 'idle', message: '' });
  const [guidanceSubmitting, setGuidanceSubmitting] = useState(false);

  const handleGuidanceSubmit = async (e) => {
    e.preventDefault();
    setGuidanceStatus({ state: 'idle', message: '' });
    setGuidanceSubmitting(true);

    const form = new FormData(e.target);
    const phone = (form.get('guidance-phone') || '').trim();
    const email = (form.get('guidance-email') || '').trim();

    if (!phone || !email) {
      setGuidanceStatus({ state: 'error', message: 'Please enter both phone and email.' });
      setGuidanceSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Need Guidance Lead',
          email,
          phone,
          message: 'Lead from homepage Need Guidance section',
          type: 'guidance-lead',
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed. Please try again.');
      }

      setGuidanceStatus({ state: 'success', message: 'Thank you! We will reach out shortly.' });
      e.target.reset();
    } catch (err) {
      setGuidanceStatus({ state: 'error', message: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setGuidanceSubmitting(false);
    }
  };

  return (
    <NextLayout header={1}>
      <HeroSlider />
      {/* Service Section Start */}
      <section className="service-section fix pt-80 pb-80 section-bg">
      <div className="container text-center">

        <h2 className="text-white mb-4 wow fadeInUp" data-wow-delay=".2s">
          Redefining Connectivity with Resilience at its Core
        </h2>

        <p className="text-white fs-5 wow fadeInUp" data-wow-delay=".3s">
          At Bharath VoIP, our focus is clear – to deliver premium internet services built for enterprises.
          Unlike typical providers who prioritize consumer traffic, our network is architected for
          business-critical operations.
        </p>

        <p className="text-white fs-5 mt-4 wow fadeInUp" data-wow-delay=".4s">
          With 5–6 upstream gateways and a dual-link architecture, every customer enjoys seamless
          redundancy. If one link goes down, traffic instantly switches to the second without disruption
          or downtime.
        </p>

        <p className="text-white fs-5 mt-4 wow fadeInUp" data-wow-delay=".5s">
          Our edge lies in premium routing and ultra-low latency, ensuring your teams, applications,
          and customers stay connected at all times. This is what sets us apart from competitors:
          a business-first, performance-driven network designed to keep you always ahead.
        </p>

        <div className="mt-5 wow fadeInUp" data-wow-delay=".6s">
          <Link href="/about" className="theme-btn">
            Know More About Us <i className="far fa-arrow-right" />
          </Link>
        </div>

      </div>
    </section>

      {/* About Section Start */}
<section
  className="about-section fix section-padding"
  style={{
    background:
      "radial-gradient(circle at 20% 20%, rgba(243,106,29,0.08) 0, rgba(243,106,29,0) 32%), radial-gradient(circle at 80% 10%, rgba(11,156,102,0.08) 0, rgba(11,156,102,0) 28%), linear-gradient(135deg, #fffaf5 0%, #f3fbf6 100%)",
  }}
>
  <div className="container">
    {/* Heading + Subheading */}
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{color: '#000000'}}>
            Andhra & Telangana’s Most Trusted <br />
            Enterprise IT Network
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".3s" style={{color: '#000000'}}>
            Engineered for uptime, built for speed, trusted by businesses.
          </p>
        </div>
      </div>
    </div>

    {/* Feature Cards */}
    <div className="row feature-row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-3 mt-4">
      {[
        {
          title: "Dual-Link Redundancy",
          text: "Every connection is backed by two independent fiber links – if one fails, the other takes over instantly.",
          delay: ".2s",
        },
        {
          title: "Multi-Gateway Backbone",
          text: "Connected through 5–6 gateways for seamless routing, reliability, and lower latency.",
          delay: ".3s",
        },
        {
          title: "Premium Routing",
          text: "Traffic is carried on priority routes to ensure consistent speeds and ultra-low latency.",
          delay: ".4s",
        },
        {
          title: "Dedicated Business Support",
          text: "With local account managers and 24×7 technical assistance, we keep you always connected.",
          delay: ".5s",
        },
        {
          title: "Enterprise-Grade Security",
          text: "Robust protection with firewalls, DNS security, and managed threat prevention.",
          delay: ".6s",
        },
      ].map((item, i) => (
        <div className="col wow fadeInUp" data-wow-delay={item.delay} key={i}>
          <div className="feature-card h-100">
            <h5
              dangerouslySetInnerHTML={{
                __html: item.title.replace(" ", "<br />"),
              }}
            />
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Service Section Start */}
      <SERVICES_SECTION />
      
      {/* Team Section Start */}
      <section
        className="plan-section fix section-padding"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(243,106,29,0.14) 0, rgba(243,106,29,0) 32%), radial-gradient(circle at 82% 10%, rgba(11,156,102,0.14) 0, rgba(11,156,102,0) 30%), linear-gradient(135deg, #fffaf5 0%, #f3fbf6 100%)",
        }}
      >
      <div className="container">
    {/* Heading */}
    <div className="section-title text-center">
      <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{color: '#000000'}}>
        A Plan for Everyone.{" "}
        <span className="plan-explore-link" style={{color: '#000000'}}>Explore Yours.</span>
      </h2>
    </div>

    {/* Category tabs */}
    <div className="row justify-content-center mt-4">
      <div className="col-lg-10">
        <div className="plan-tabs d-flex flex-wrap justify-content-center">
          <button 
            onClick={() => setActiveTab('corporate')}
            className={`plan-tab ${activeTab === 'corporate' ? 'active' : ''}`}
          >
            Corporate Leased Lines
          </button>
          <button 
            onClick={() => setActiveTab('business')}
            className={`plan-tab ${activeTab === 'business' ? 'active' : ''}`}
          >
            Business SME Plans
          </button>
          <button 
            onClick={() => setActiveTab('home')}
            className={`plan-tab ${activeTab === 'home' ? 'active' : ''}`}
          >
            Home Broadband Plans
          </button>
        </div>
      </div>
    </div>

    {/* Subheading */}
    <div className="row justify-content-center mt-5">
      <div className="col-lg-10 text-center">
        <p className="plan-subtitle" style={{color: '#000000'}}>
          Tailored for You – Find Your Ideal Plan!
        </p>
      </div>
    </div>

    {/* Plans row */}
    <div className="row g-4 mt-3 justify-content-center">
      {activeTab === 'corporate' && (
        <>
          {/* Leased Line Interactive Slider */}
          <div className="col-12">
            <LeasedLineSlider />
          </div>
        </>
      )}

      {activeTab === 'corporate_old' && (
        <>
          {/* B-MAX 500 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/04.png" alt="B-MAX 500" />
                </div>
                <h4>B-MAX 500</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>60 Mbps</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Download Speed 60 Mbps | FUP 600 GB | Post-FUP 4 Mbps</p>
                <p className="plan-price">₹ 500 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>60 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>600 GB</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Speed Post FUP: <strong>4 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Link href="/contact">
                  <button className="plan-btn">Get Started</button>
                </Link>
              </Link>
            </div>
          </div>

          {/* B-MAX 600 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/05.png" alt="B-MAX 600" />
                </div>
                <h4>B-MAX 600</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>100 Mbps</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Download Speed 100 Mbps | FUP 1000 GB | Post-FUP 10 Mbps</p>
                <p className="plan-price">₹ 600 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>100 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>1000 GB</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Speed Post FUP: <strong>10 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Link href="/contact">
                  <button className="plan-btn">Get Started</button>
                </Link>
              </Link>
            </div>
          </div>

          {/* B-MAX 1000 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/06.png" alt="B-MAX 1000" />
                </div>
                <h4>B-MAX 1000</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>200 Mbps</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Download Speed 200 Mbps | FUP 2000 GB | Post-FUP 10 Mbps</p>
                <p className="plan-price">₹ 1000 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>200 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>2000 GB</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Speed Post FUP: <strong>10 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Link href="/contact">
                  <button className="plan-btn">Get Started</button>
                </Link>
              </Link>
            </div>
          </div>

          {/* B-MAX 1200 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/07.png" alt="B-MAX 1200" />
                </div>
                <h4>B-MAX 1200</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>300 Mbps</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Download Speed 300 Mbps | FUP Unlimited | Post-FUP 300 Mbps</p>
                <p className="plan-price">₹ 1200 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>300 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Speed Post FUP: <strong>300 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Link href="/contact">
                  <button className="plan-btn">Get Started</button>
                </Link>
              </Link>
            </div>
          </div>

          {/* B-MAX 1700 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/04.png" alt="B-MAX 1700" />
                </div>
                <h4>B-MAX 1700</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>400 Mbps</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Download Speed 400 Mbps | FUP Unlimited | Post-FUP 400 Mbps</p>
                <p className="plan-price">₹ 1700 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>400 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Speed Post FUP: <strong>400 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">
                <Link href="/contact">
                  <button className="plan-btn">Get Started</button>
                </Link>
              </Link>
            </div>
          </div>
        </>
      )}

      {activeTab === 'business' && (
        <>
          {/* Express 4000 Business */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/04.png" alt="Express 4000" />
                </div>
                <h4>Express 4000</h4>
                <p className="plan-price">₹ 4000 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>500 Mbps</strong> Download Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>500 Mbps</strong> Upload Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>5 TB</strong> FUP Limit
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>10 Mbps</strong> Speed Post FUP
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Express 6000 Business */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/05.png" alt="Express 6000" />
                </div>
                <h4>Express 6000</h4>
                <p className="plan-price">₹ 6000 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Download Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Upload Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>6 TB</strong> FUP Limit
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>12 Mbps</strong> Speed Post FUP
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Express 8000 Business */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/06.png" alt="Express 8000" />
                </div>
                <h4>Express 8000</h4>
                <p className="plan-price">₹ 8000 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Download Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Upload Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>8 TB</strong> FUP Limit
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>12 Mbps</strong> Speed Post FUP
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Express 10000 Business */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/07.png" alt="Express 10000" />
                </div>
                <h4>Express 10000</h4>
                <p className="plan-price">₹ 10000 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Download Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Upload Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>10 TB</strong> FUP Limit
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>15 Mbps</strong> Speed Post FUP
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Express 12000 Business */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/04.png" alt="Express 12000" />
                </div>
                <h4>Express 12000</h4>
                <p className="plan-price">₹ 12000 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Download Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Upload Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>15 TB</strong> FUP Limit
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>15 Mbps</strong> Speed Post FUP
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Express 15000 Business */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/05.png" alt="Express 15000" />
                </div>
                <h4>Express 15000</h4>
                <p className="plan-price">₹ 15000 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Download Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Upload Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>20 TB</strong> FUP Limit
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>15 Mbps</strong> Speed Post FUP
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Express 20000 Business */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/06.png" alt="Express 20000" />
                </div>
                <h4>Express 20000</h4>
                <p className="plan-price">₹ 20000 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Download Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>1 Gbps</strong> Upload Speed
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>30 TB</strong> FUP Limit
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>15 Mbps</strong> Speed Post FUP
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>
        </>
      )}

      {activeTab === 'home' && (
        <>
          {/* BharatXpress-150 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/04.png" alt="BharatXpress-150" />
                </div>
                <h4>BHARATXPRESS-150</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>150 Mbps</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Unlimited Data | ₹699 / month</p>
                <p className="plan-price">₹ 699 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>150 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Post-FUP Speed: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* BharatXpress-200 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/05.png" alt="BharatXpress-200" />
                </div>
                <h4>BHARATXPRESS-200</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>200 Mbps</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Unlimited Data | ₹999 / month</p>
                <p className="plan-price">₹ 999 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>200 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Post-FUP Speed: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* BharatXpress-300 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/06.png" alt="BharatXpress-300" />
                </div>
                <h4>BHARATXPRESS-300</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>300 Mbps</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Unlimited Data | ₹1,199 / month</p>
                <p className="plan-price">₹ 1,199 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>300 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Post-FUP Speed: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* BharatXpress-400 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/07.png" alt="BharatXpress-400" />
                </div>
                <h4>BHARATXPRESS-400</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>400 Mbps</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Unlimited Data | ₹1,499 / month</p>
                <p className="plan-price">₹ 1,499 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>400 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Post-FUP Speed: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Section Heading - Combo Plans */}
          <div className="col-12 mt-5 mb-4 text-center">
            <h3 style={{fontSize: '32px', fontWeight: 'bold', color: '#000000', display: 'inline-block'}}>
              Combo Plans (Internet + IPTV)
            </h3>
          </div>

          {/* Combo 100 Mbps + IPTV */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/04.png" alt="Combo 100" />
                </div>
                <h4>BHARATXPRESS COMBO-100</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>100 Mbps + IPTV</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Free IPTV on 6-month plan | Free IPTV + 2 months extra on 12-month plan</p>
                <p className="plan-price">₹ 999 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>100 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>Includes IPTV</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Combo 200 Mbps + IPTV */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/05.png" alt="Combo 200" />
                </div>
                <h4>BHARATXPRESS COMBO-200</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>200 Mbps + IPTV</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>Free IPTV on 6-month plan | Free IPTV + 2 months extra on 12-month plan</p>
                <p className="plan-price">₹ 1,199 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Download Speed: <strong>200 Mbps</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>Includes IPTV</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    FUP Limit: <strong>Unlimited</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    + GST 18%
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Section Heading - OTT Entertainment */}
          <div className="col-12 mt-5 mb-4 text-center">
            <h3 style={{fontSize: '32px', fontWeight: 'bold', color: '#000000', display: 'inline-block'}}>
              OTT Entertainment Packs
            </h3>
          </div>

          {/* OTT 1 Month */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/04.png" alt="OTT 1 Month" />
                </div>
                <h4>OTT PLATFORMS (18)</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>1 Month Plan</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>₹170 / month</p>
                <p className="plan-price">₹ 170 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Access <strong>18 OTT Platforms</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Includes: JioHotstar, ZEE5, SonyLIV, FanCode, SunNXT, Hungama
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    +12 more platforms
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Price: ₹170 (1 Month)
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* OTT 6 Months */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/05.png" alt="OTT 6 Months" />
                </div>
                <h4>OTT PLATFORMS (18)</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>6 Months Plan</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>₹1,020 (6 months)</p>
                <p className="plan-price">₹ 1,020 / 6 Months</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Access <strong>18 OTT Platforms</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Includes: JioHotstar, ZEE5, SonyLIV, FanCode, SunNXT, Hungama
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    +12 more platforms
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Price: ₹1,020 (6 Months)
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* OTT 12 Months */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/06.png" alt="OTT 12 Months" />
                </div>
                <h4>OTT PLATFORMS (18)</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>12 Months Plan</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>₹2,040 (12 months)</p>
                <p className="plan-price">₹ 2,040 / 12 Months</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Access <strong>18 OTT Platforms</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Includes: JioHotstar, ZEE5, SonyLIV, FanCode, SunNXT, Hungama
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    +12 more platforms
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Price: ₹2,040 (12 Months)
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Section Heading - IPTV Channel Packs */}
          <div className="col-12 mt-5 mb-4 text-center">
            <h3 style={{fontSize: '32px', fontWeight: 'bold', color: '#000000', display: 'inline-block'}}>
              IPTV Channel Packs
            </h3>
          </div>

          {/* Telugu Gold HD Pack */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/04.png" alt="Telugu Gold HD" />
                </div>
                <h4 style={{color: '#000000'}}>TELUGU GOLD HD PACK</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>430 Channels</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>₹300 / month | ₹1,800 (6 months) | ₹3,600 (12 months)</p>
                <p className="plan-price">₹ 300 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>430 Channels</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Monthly: ₹300
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    6 Months: ₹1,800
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    12 Months: ₹3,600
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Hindi Gold HD Pack */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/05.png" alt="Hindi Gold HD" />
                </div>
                <h4 style={{color: '#000000'}}>HINDI GOLD HD PACK</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>440 Channels</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>₹300 / month | ₹1,800 (6 months) | ₹3,600 (12 months)</p>
                <p className="plan-price">₹ 300 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>440 Channels</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Monthly: ₹300
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    6 Months: ₹1,800
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    12 Months: ₹3,600
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Hindi Telugu Silver Pack */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/06.png" alt="Hindi Telugu Silver" />
                </div>
                <h4 style={{color: '#000000'}}>HINDI TELUGU SILVER PACK</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>430 Channels</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>₹300 / month | ₹1,800 (6 months) | ₹3,600 (12 months)</p>
                <p className="plan-price">₹ 300 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>430 Channels</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Monthly: ₹300
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    6 Months: ₹1,800
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    12 Months: ₹3,600
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>

          {/* Hindi Telugu Gold Pack */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="plan-card">
              <div className="plan-card-header">
                <div className="plan-icon">
                  <img src="assets/img/hero/07.png" alt="Hindi Telugu Gold" />
                </div>
                <h4 style={{color: '#000000'}}>HINDI TELUGU GOLD PACK</h4>
                <h5 style={{fontSize: '24px', fontWeight: 'bold', margin: '10px 0', color: '#000000'}}>450 Channels</h5>
                <p style={{fontSize: '14px', color: '#000000', marginBottom: '10px'}}>₹300 / month | ₹1,800 (6 months) | ₹3,600 (12 months)</p>
                <p className="plan-price">₹ 300 / Month</p>
              </div>

              <ul className="plan-features">
                <li>
                  <i className="fas fa-check" />
                  <span>
                    <strong>450 Channels</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    Monthly: ₹300
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    6 Months: ₹1,800
                  </span>
                </li>
                <li>
                  <i className="fas fa-check" />
                  <span>
                    12 Months: ₹3,600
                  </span>
                </li>
              </ul>

              <Link href="/contact">

                <button className="plan-btn">Get Started</button>

              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
</section>


<section 
  className="testimonial-section fix section-padding"
  style={{
    position: 'relative',
    overflow: 'hidden'
  }}
>
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/assets/img/3.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.4,
    zIndex: 0
  }} />
  
  <div className="container" style={{ position: 'relative', zIndex: 1 }}>

    {/* Heading */}
    <div className="section-title text-center mb-5">
      <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ 
        color: '#1a1a1a',
        fontWeight: '700'
      }}>
        What Industry Leaders Are Saying
      </h2>
    </div>

    {/* Testimonials */}
    <div className="row g-4 justify-content-center">

      {/* 1 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="testimonial-card" style={{
          background: '#ffffff',
          borderRadius: '18px',
          padding: '28px',
          boxShadow: '0 14px 36px rgba(15, 23, 42, 0.1)',
          border: '1px solid #e5e7eb',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <p className="testimonial-text" style={{ color: '#1f2937', fontSize: '15px', lineHeight: '1.7', marginBottom: '22px' }}>
            "We switched to this broadband provider because of their competitive
            pricing, and we haven't looked back since. The service is excellent,
            and we're saving money every month."
          </p>

          <div className="testimonial-footer" style={{
            background: 'linear-gradient(135deg, #f36a1d 0%, #0b9c66 100%)',
            borderRadius: '12px',
            padding: '18px',
            textAlign: 'center',
            boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)'
          }}>
            <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>Suraj S</h4>
            <p className="role" style={{ color: '#fefefe', fontSize: '14px', margin: 0, opacity: 0.9 }}>CFO</p>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="testimonial-card" style={{
          background: '#ffffff',
          borderRadius: '18px',
          padding: '28px',
          boxShadow: '0 14px 36px rgba(15, 23, 42, 0.1)',
          border: '1px solid #e5e7eb',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <p className="testimonial-text" style={{ color: '#1f2937', fontSize: '15px', lineHeight: '1.7', marginBottom: '22px' }}>
            "The installation process was seamless and quick. The technicians
            were professional and ensured everything was set up perfectly. We've
            had a smooth experience ever since."
          </p>

          <div className="testimonial-footer" style={{
            background: 'linear-gradient(135deg, #f36a1d 0%, #0b9c66 100%)',
            borderRadius: '12px',
            padding: '18px',
            textAlign: 'center',
            boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)'
          }}>
            <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>David R</h4>
            <p className="role" style={{ color: '#fefefe', fontSize: '14px', margin: 0, opacity: 0.9 }}>Operations Manager</p>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="testimonial-card" style={{
          background: '#ffffff',
          borderRadius: '18px',
          padding: '28px',
          boxShadow: '0 14px 36px rgba(15, 23, 42, 0.1)',
          border: '1px solid #e5e7eb',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <p className="testimonial-text" style={{ color: '#1f2937', fontSize: '15px', lineHeight: '1.7', marginBottom: '22px' }}>
            "We love that the plans are scalable and flexible to meet our
            growing business needs. Upgrading packages is simple, and our team
            is always connected."
          </p>

          <div className="testimonial-footer" style={{
            background: 'linear-gradient(135deg, #f36a1d 0%, #0b9c66 100%)',
            borderRadius: '12px',
            padding: '18px',
            textAlign: 'center',
            boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)'
          }}>
            <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>Soujanya D</h4>
            <p className="role" style={{ color: '#fefefe', fontSize: '14px', margin: 0, opacity: 0.9 }}>HR Manager</p>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="testimonial-card" style={{
          background: '#ffffff',
          borderRadius: '18px',
          padding: '28px',
          boxShadow: '0 14px 36px rgba(15, 23, 42, 0.1)',
          border: '1px solid #e5e7eb',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <p className="testimonial-text" style={{ color: '#1f2937', fontSize: '15px', lineHeight: '1.7', marginBottom: '22px' }}>
            "Their enterprise solutions helped us improve uptime and performance.
            The network is incredibly reliable, and support is always available
            when needed."
          </p>

          <div className="testimonial-footer" style={{
            background: 'linear-gradient(135deg, #f36a1d 0%, #0b9c66 100%)',
            borderRadius: '12px',
            padding: '18px',
            textAlign: 'center',
            boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)'
          }}>
            <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>Mahesh K</h4>
            <p className="role" style={{ color: '#fefefe', fontSize: '14px', margin: 0, opacity: 0.9 }}>IT Director</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Other sections */}
      {/* Need Guidance Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #b8d4e8 0%, #ffc069 50%, #ff9d52 100%)',
        padding: '30px 0'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '10px',
                color: '#000'
              }}>
                Need Guidance?
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#000',
                fontWeight: '500',
                marginBottom: '20px'
              }}>
                We'd love to help you.
              </p>

              {/* Tabs */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                marginBottom: '20px',
                flexWrap: 'wrap'
              }}>
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#000', cursor: 'pointer' }}>
                  Enquire
                </span>
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#000', cursor: 'pointer' }}>
                  Email
                </span>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#ff6b35', cursor: 'pointer' }}>
                  Call Us
                </span>
              </div>

              {/* Form */}
              <form
                onSubmit={handleGuidanceSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}
              >
                <input type="tel" name="guidance-phone" placeholder="Mobile Number" required style={{
                  width: '100%', padding: '14px 20px', borderRadius: '10px', border: 'none',
                  fontSize: '15px', outline: 'none', backgroundColor: '#ffffff', color: '#000000'
                }} />
                <input type="email" name="guidance-email" placeholder="Email Address" required style={{
                  width: '100%', padding: '14px 20px', borderRadius: '10px', border: 'none',
                  fontSize: '15px', outline: 'none', backgroundColor: '#ffffff', color: '#000000'
                }} />
                <button type="submit" disabled={guidanceSubmitting} style={{
                  width: '100%', padding: '14px', background: 'linear-gradient(135deg, #ff8c00 0%, #ff6f00 100%)',
                  color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '700',
                  cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px'
                }}>
                  {guidanceSubmitting ? "Sending..." : "LET'S CONNECT!"}
                </button>
                {guidanceStatus.state === 'success' && (
                  <p style={{ color: '#0b9c66', marginTop: '8px', fontWeight: 600 }}>
                    {guidanceStatus.message}
                  </p>
                )}
                {guidanceStatus.state === 'error' && (
                  <p style={{ color: '#d00', marginTop: '8px', fontWeight: 600 }}>
                    {guidanceStatus.message}
                  </p>
                )}
                {guidanceSubmitting && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255,255,255,0.8)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: '#0f172a'
                  }}>
                    Sending...
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Other sections */}

    
    </NextLayout>
  );
};
export default page;



