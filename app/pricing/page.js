"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import LeasedLineSlider from "@/components/LeasedLineSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const palette = {
  orange: "#f36a1d",
  green: "#0b9c66",
  dark: "#0f172a",
  text: "#1f2937",
  muted: "#4b5563",
  border: "#e5e7eb",
  gentleGradient: "linear-gradient(135deg, #fffaf5 0%, #f3fbf6 100%)",
  softGradient:
    "linear-gradient(135deg, rgba(243,106,29,0.08) 0%, rgba(11,156,102,0.08) 100%)",
  deepGreen: "linear-gradient(135deg, #0b9c66 0%, #0a7b52 100%)",
  buttonGradient: "linear-gradient(135deg, #f36a1d 0%, #0b9c66 100%)",
};

const cardShadow = "0 16px 40px rgba(15,23,42,0.08)";
const subtleShadow = "0 12px 32px rgba(15,23,42,0.06)";
const glassBorder = "1px solid rgba(255,255,255,0.18)";

const page = () => {
  const [activeTab, setActiveTab] = useState("corporate");

  return (
    <NextLayout>
      <Breadcrumb pageName="Pricing Plans" />

      <section
        className="plan-section fix section-padding"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(243,106,29,0.14) 0, rgba(243,106,29,0) 32%), radial-gradient(circle at 82% 10%, rgba(11,156,102,0.14) 0, rgba(11,156,102,0) 30%), linear-gradient(135deg, #fffaf5 0%, #f3fbf6 100%)",
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ color: "#000000" }}>
              A Plan for Everyone.{" "}
              <span className="plan-explore-link" style={{ color: "#000000" }}>
                Explore Yours.
              </span>
            </h2>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
              <div className="plan-tabs d-flex flex-wrap justify-content-center">
                <button
                  onClick={() => setActiveTab("corporate")}
                  className={`plan-tab ${activeTab === "corporate" ? "active" : ""}`}
                >
                  Corporate Leased Lines
                </button>
                <button
                  onClick={() => setActiveTab("business")}
                  className={`plan-tab ${activeTab === "business" ? "active" : ""}`}
                >
                  Business SME Plans
                </button>
                <button
                  onClick={() => setActiveTab("home")}
                  className={`plan-tab ${activeTab === "home" ? "active" : ""}`}
                >
                  Home Broadband Plans
                </button>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-lg-10 text-center">
              <p className="plan-subtitle" style={{ color: "#000000" }}>
                Tailored for You – Find Your Ideal Plan!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Leased Lines Section */}
      {activeTab === "corporate" && (
        <section
          className="pricing-section section-padding"
          style={{ background: palette.gentleGradient }}
        >
          <div className="container">
            <div className="section-title text-center">
              <span className="sub-content wow fadeInUp" style={{ color: palette.orange }}>
                <img src="assets/img/bale.png" alt="img" />
                Corporate Leased Lines
              </span>
              <h2
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{ color: palette.dark }}
              >
                Empower Enterprise Operations
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  maxWidth: "900px",
                  margin: "20px auto 0",
                  lineHeight: "1.8",
                  color: palette.muted,
                }}
              >
                Empower enterprise operations with high-performance leased lines that ensure consistent, secure,
                and always-available connectivity. Bharath VoIP&apos;s dedicated leased lines deliver fixed-bandwidth,
                symmetrical speeds, and uninterrupted uptime, keeping your business connected 24×7 through advanced
                fiber optic infrastructure.
              </p>
              <p
                className="wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  maxWidth: "900px",
                  margin: "20px auto 0",
                  lineHeight: "1.8",
                  color: palette.muted,
                }}
              >
                Whether it&apos;s video conferencing, data transfer, or remote collaboration, experience internet built
                for precision and stability. Each connection comes with static IPs, 100% dedicated access, and proactive
                monitoring to help your business operate without disruption.
              </p>
              <div className="wow fadeInUp" data-wow-delay=".6s" style={{ margin: "30px 0 20px" }}>
                <h5 style={{ color: palette.dark }}>Tailored Business Plans + 18% GST</h5>
                <p style={{ color: palette.muted }}>
                  Get a quote today and discover plans designed to fit your enterprise needs.
                </p>
                <Link
                  href="/contact"
                  className="theme-btn mt-2"
                  style={{
                    background: palette.buttonGradient,
                    border: "none",
                    boxShadow: cardShadow,
                  }}
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="row mt-5 mb-5">
              <div className="col-12">
                <h3
                  className="text-center mb-5 wow fadeInUp"
                  style={{ color: palette.dark, fontWeight: "700" }}
                >
                  Why Enterprises Choose Bharath VoIP
                </h3>
              </div>
              {[
                {
                  title: "Guaranteed High-Speed Connectivity",
                  desc: "Dedicated, uncontended bandwidth ensures consistent performance—even during peak hours.",
                  icon: "fa-tachometer-alt",
                  delay: ".3s",
                },
                {
                  title: "Secure and Stable Networking",
                  desc: "Static IPs and enterprise-grade routing provide complete control and secure remote access.",
                  icon: "fa-shield-alt",
                  delay: ".4s",
                },
                {
                  title: "Comprehensive Wired & Wireless Options",
                  desc: "Choose between reliable wired fiber connectivity or flexible wireless solutions for quick deployment.",
                  icon: "fa-project-diagram",
                  delay: ".5s",
                },
                {
                  title: "Tailored for Every Business Size",
                  desc: "Custom plans designed to match unique operational, bandwidth, and scalability needs.",
                  icon: "fa-building",
                  delay: ".6s",
                },
                {
                  title: "24×7 Expert Support",
                  desc: "Dedicated enterprise assistance with proactive monitoring and issue resolution.",
                  icon: "fa-headset",
                  delay: ".7s",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="col-lg-4 col-md-6 mb-4 wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "18px",
                      padding: "30px 20px",
                      textAlign: "center",
                      boxShadow: cardShadow,
                      height: "100%",
                      border: `1px solid ${palette.border}`,
                    }}
                  >
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "14px",
                        background: palette.buttonGradient,
                        margin: "0 auto 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 24px rgba(243,106,29,0.25)",
                      }}
                    >
                      <i className={item.icon} style={{ fontSize: "32px", color: "#fff" }}></i>
                    </div>
                    <h4
                      style={{
                        color: palette.dark,
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "12px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ color: palette.muted, fontSize: "14px", lineHeight: "1.6" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="section-title text-center mt-5 mb-5">
              <h3 className="wow fadeInUp" style={{ color: palette.dark, fontWeight: "700" }}>
                Explore Our Corporate Leased Line Plans
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".2s" style={{ color: palette.muted }}>
                Reliable performance for enterprises that can&apos;t afford to pause.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-12">
                <LeasedLineSlider />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Business SME Plans Section */}
      {activeTab === "business" && (
        <section
          className="pricing-section section-padding"
          style={{ background: "#ffffff" }}
        >
          <div className="container">
            <div className="section-title text-center">
              <span className="sub-content wow fadeInUp" style={{ color: palette.orange }}>
                <img src="assets/img/bale.png" alt="img" />
                Business SME Plans
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: palette.dark }}>
                Flexible Internet for Growing Businesses
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  maxWidth: "900px",
                  margin: "20px auto 0",
                  lineHeight: "1.8",
                  color: palette.muted,
                }}
              >
                Keep your business connected with high-performance SME broadband designed for productivity and
                reliability. Bharath VoIP&apos;s Business SME Plans deliver fast, stable, and low-latency connectivity built
                for daily operations, cloud access, and remote collaboration. With enterprise-grade routing and proactive
                monitoring, every connection runs efficiently even during peak hours.
              </p>
              <p
                className="wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  maxWidth: "900px",
                  margin: "20px auto 0",
                  lineHeight: "1.8",
                  color: palette.muted,
                }}
              >
                Scale seamlessly as your team and workloads grow. Every plan includes unlimited data (Fair Usage Policy
                applies), prioritized business support, and quick upgrade options so your operations never slow down.
              </p>
              <div className="wow fadeInUp" data-wow-delay=".6s" style={{ margin: "30px 0 20px" }}>
                <h5 style={{ color: palette.dark }}>Starting at ₹4,000 / month + 18% GST</h5>
                <p style={{ color: palette.muted }}>Find the right business plan and get connected today.</p>
                <Link
                  href="/contact"
                  className="theme-btn mt-2"
                  style={{
                    background: palette.orange,
                    color: "#fff",
                    border: "none",
                    fontWeight: "600",
                    boxShadow: "0 10px 22px rgba(243,106,29,0.28)",
                  }}
                >
                  Check Availability
                </Link>
              </div>
            </div>

            <div className="row mt-5 mb-5">
              <div className="col-12">
                <h3 className="text-center mb-5 wow fadeInUp" style={{ color: palette.dark, fontWeight: "700" }}>
                  Why Businesses Choose Bharath VoIP
                </h3>
              </div>
              {[
                {
                  title: "High-Speed, Low-Latency Fiber",
                  desc: "Reliable last-mile connectivity engineered for uninterrupted performance during critical hours.",
                  icon: "fa-bolt",
                  delay: ".3s",
                },
                {
                  title: "Flexible, Cost-Efficient Plans",
                  desc: "Budget-conscious packages built to support startups, SMEs, and growing enterprises.",
                  icon: "fa-sliders-h",
                  delay: ".4s",
                },
                {
                  title: "Secure, Enterprise-Grade Infrastructure",
                  desc: "Static IP options and advanced routing keep your operations safe and stable.",
                  icon: "fa-shield-alt",
                  delay: ".5s",
                },
                {
                  title: "Scalable Connectivity",
                  desc: "Upgrade bandwidth instantly as your workforce, tools, or data needs expand.",
                  icon: "fa-arrows-alt",
                  delay: ".6s",
                },
                {
                  title: "24×7 Business Support",
                  desc: "Dedicated assistance to ensure consistent uptime and rapid resolution whenever you need it.",
                  icon: "fa-headset",
                  delay: ".7s",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="col-lg-4 col-md-6 mb-4 wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "18px",
                      padding: "30px 20px",
                      textAlign: "center",
                      border: `1px solid ${palette.border}`,
                      height: "100%",
                      boxShadow: subtleShadow,
                    }}
                  >
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "14px",
                        background: palette.softGradient,
                        margin: "0 auto 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: palette.orange,
                        boxShadow: "0 8px 20px rgba(15,23,42,0.08)",
                      }}
                    >
                      <i className={item.icon} style={{ fontSize: "32px" }}></i>
                    </div>
                    <h4
                      style={{
                        color: palette.dark,
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "12px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ color: palette.muted, fontSize: "14px", lineHeight: "1.6" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="section-title text-center mt-5 mb-5">
              <h3 className="wow fadeInUp" style={{ color: palette.dark, fontWeight: "700" }}>
                Our Business SME Plans
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".2s" style={{ color: palette.muted }}>
                For teams that demand speed, reliability, and scalability.
              </p>
            </div>

            <div className="row justify-content-center">
              {[
                {
                  name: "Express 4000",
                  price: "₹ 4000",
                  download: "500 Mbps",
                  upload: "500 Mbps",
                  fup: "5 TB",
                  postFup: "10 Mbps",
                  delay: ".3s",
                  icon: "fa-globe",
                },
                {
                  name: "Express 6000",
                  price: "₹ 6000",
                  download: "1 Gbps",
                  upload: "1 Gbps",
                  fup: "6 TB",
                  postFup: "12 Mbps",
                  delay: ".4s",
                  icon: "fa-broadcast-tower",
                },
                {
                  name: "Express 8000",
                  price: "₹ 8000",
                  download: "1 Gbps",
                  upload: "1 Gbps",
                  fup: "8 TB",
                  postFup: "12 Mbps",
                  delay: ".5s",
                  icon: "fa-satellite-dish",
                },
                {
                  name: "Express 10000",
                  price: "₹ 10000",
                  download: "1 Gbps",
                  upload: "1 Gbps",
                  fup: "10 TB",
                  postFup: "15 Mbps",
                  delay: ".6s",
                  icon: "fa-wifi",
                },
                {
                  name: "Express 12000",
                  price: "₹ 12000",
                  download: "1 Gbps",
                  upload: "1 Gbps",
                  fup: "15 TB",
                  postFup: "15 Mbps",
                  delay: ".7s",
                  icon: "fa-network-wired",
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp mb-4"
                  data-wow-delay={plan.delay}
                >
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "16px",
                      padding: "28px 22px 24px",
                      textAlign: "center",
                      border: `1px solid ${palette.border}`,
                      boxShadow: "0 14px 30px rgba(15, 23, 42, 0.08)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          background: palette.softGradient,
                          margin: "0 auto 16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 8px 18px rgba(15, 23, 42, 0.08)",
                        }}
                      >
                        <i className={`fas ${plan.icon}`} style={{ fontSize: "26px", color: palette.orange }}></i>
                      </div>
                      <h3
                        style={{
                          color: palette.dark,
                          fontSize: "20px",
                          fontWeight: "700",
                          marginBottom: "6px",
                        }}
                      >
                        {plan.name}
                      </h3>
                      <h2
                        style={{
                          color: palette.orange,
                          fontSize: "22px",
                          fontWeight: "bold",
                          margin: "10px 0 16px",
                        }}
                      >
                        {plan.price}{" "}
                        <span style={{ fontSize: "14px", color: palette.muted, fontWeight: "500" }}>
                          /Month
                        </span>
                      </h2>
                      <ul style={{ listStyle: "none", padding: 0, marginTop: "4px", textAlign: "left" }}>
                        <li
                          style={{
                            color: palette.text,
                            marginBottom: "8px",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fas fa-check-circle"
                            style={{ color: palette.orange, marginRight: "10px", fontSize: "16px" }}
                          ></i>
                          <span>
                            <strong>{plan.download}</strong> Download
                          </span>
                        </li>
                        <li
                          style={{
                            color: palette.text,
                            marginBottom: "8px",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fas fa-check-circle"
                            style={{ color: palette.orange, marginRight: "10px", fontSize: "16px" }}
                          ></i>
                          <span>
                            <strong>{plan.upload}</strong> Upload
                          </span>
                        </li>
                        <li
                          style={{
                            color: palette.text,
                            marginBottom: "8px",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fas fa-check-circle"
                            style={{ color: palette.orange, marginRight: "10px", fontSize: "16px" }}
                          ></i>
                          <span>
                            <strong>{plan.fup}</strong> FUP Limit
                          </span>
                        </li>
                        <li
                          style={{
                            color: palette.text,
                            marginBottom: "0",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fas fa-check-circle"
                            style={{ color: palette.orange, marginRight: "10px", fontSize: "16px" }}
                          ></i>
                          <span>
                            <strong>{plan.postFup}</strong> Post-FUP
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      style={{
                        background: palette.orange,
                        color: "#fff",
                        padding: "10px 18px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "14px",
                        display: "inline-block",
                        marginTop: "18px",
                        boxShadow: "0 6px 14px rgba(243,106,29,0.18)",
                      }}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Home Broadband Plans Section */}
      {activeTab === "home" && (
        <section
          className="pricing-section section-padding"
          style={{ background: palette.gentleGradient }}
        >
          <div className="container">
            <div className="section-title text-center">
              <span className="sub-content wow fadeInUp" style={{ color: palette.orange }}>
                <img src="assets/img/bale.png" alt="img" />
                Home Broadband Plans (B-MAX Fiber)
              </span>
              <h2
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{ color: palette.dark }}
              >
                Fiber That Keeps Every Home Connected
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  maxWidth: "900px",
                  margin: "20px auto 0",
                  lineHeight: "1.8",
                  color: palette.muted,
                }}
              >
                Stay online, entertained, and productive with Bharath Fibernet&apos;s high-speed B-MAX broadband. Whether
                it&apos;s 4K streaming, online classes, work calls, or gaming weekends, enjoy stable, low-latency fiber
                internet built for every moment of modern life. Choose from BharatXpress plans up to 400 Mbps - all
                offering unlimited data, zero FUP restrictions, and easy upgrades as your needs grow.
              </p>
              <div className="wow fadeInUp" data-wow-delay=".5s" style={{ margin: "30px 0 20px" }}>
                <h5 style={{ color: palette.dark }}>Starting at ₹699 / month + 18% GST</h5>
                <p style={{ color: palette.muted }}>Check what&apos;s available in your area and get connected today.</p>
                <Link
                  href="/contact"
                  className="theme-btn mt-2"
                  style={{
                    background: palette.buttonGradient,
                    border: "none",
                    color: "#fff",
                    fontWeight: "700",
                    boxShadow: cardShadow,
                  }}
                >
                  Check Availability
                </Link>
              </div>
            </div>

            <div className="row mt-5 mb-5">
              <div className="col-12">
                <h3
                  className="text-center mb-5 wow fadeInUp"
                  style={{ color: palette.dark, fontWeight: "700" }}
                >
                  Why Choose Bharath VoIP Home Broadband
                </h3>
              </div>
              {[
                {
                  title: "Ultra-Fast Speeds",
                  desc: "Experience consistent fiber-powered speed across multiple devices.",
                  icon: "fas fa-rocket",
                  delay: ".3s",
                },
                {
                  title: "Affordable Plans",
                  desc: "Flexible, budget-friendly packages for every home.",
                  icon: "fas fa-tags",
                  delay: ".4s",
                },
                {
                  title: "Reliable Connectivity",
                  desc: "Stay connected without interruption 24/7.",
                  icon: "fas fa-signal",
                  delay: ".5s",
                },
                {
                  title: "24×7 Support",
                  desc: "Round-the-clock technical assistance.",
                  icon: "fas fa-headset",
                  delay: ".6s",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="col-lg-3 col-md-6 mb-4 wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "18px",
                      padding: "28px 20px",
                      textAlign: "center",
                      border: `1px solid ${palette.border}`,
                      boxShadow: subtleShadow,
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "14px",
                        background: palette.buttonGradient,
                        margin: "0 auto 18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        boxShadow: "0 8px 20px rgba(243,106,29,0.22)",
                      }}
                    >
                      <i className={item.icon} style={{ fontSize: "28px" }}></i>
                    </div>
                    <h4
                      style={{
                        color: palette.dark,
                        fontSize: "17px",
                        fontWeight: "600",
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ color: palette.muted, fontSize: "14px", lineHeight: "1.6" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="section-title text-center mt-5 mb-5">
              <h3 className="wow fadeInUp" style={{ color: palette.dark, fontWeight: "700" }}>
                Home Broadband &amp; Entertainment Plans
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".2s" style={{ color: palette.muted }}>
                Tailored for every way you live.
              </p>
            </div>

            <div className="row justify-content-center">
              {[
                { name: "BharatXpress", price: "₹ 699", download: "150 Mbps", fup: "Unlimited", postFup: "Unlimited", delay: ".3s" },
                { name: "BharatXpress", price: "₹ 999", download: "200 Mbps", fup: "Unlimited", postFup: "Unlimited", delay: ".4s" },
                { name: "BharatXpress", price: "₹ 1199", download: "300 Mbps", fup: "Unlimited", postFup: "Unlimited", delay: ".5s" },
                { name: "BharatXpress", price: "₹ 1499", download: "400 Mbps", fup: "Unlimited", postFup: "Unlimited", delay: ".6s" },
              ].map((plan) => (
                <div
                  key={`${plan.name}-${plan.download}`}
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp mb-4"
                  data-wow-delay={plan.delay}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "16px",
                      padding: "28px 22px 24px",
                      textAlign: "center",
                      border: `1px solid ${palette.border}`,
                      boxShadow: "0 14px 30px rgba(15, 23, 42, 0.08)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          background: palette.softGradient,
                          margin: "0 auto 16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: palette.orange,
                          boxShadow: "0 8px 18px rgba(15,23,42,0.08)",
                        }}
                      >
                        <i className="fas fa-home" style={{ fontSize: "24px" }}></i>
                      </div>
                      <h3
                        style={{
                          color: palette.dark,
                          fontSize: "20px",
                          fontWeight: "700",
                          marginBottom: "6px",
                        }}
                      >
                        {plan.name}
                      </h3>
                      <h2
                        style={{
                          color: palette.orange,
                          fontSize: "22px",
                          fontWeight: "bold",
                          margin: "10px 0 16px",
                        }}
                      >
                        {plan.price} <span style={{ fontSize: "16px", fontWeight: "400", color: palette.muted }}>/Month</span>
                      </h2>
                      <div
                        style={{
                          color: palette.muted,
                          fontWeight: "500",
                          fontSize: "13px",
                          marginBottom: "12px",
                        }}
                      >
                        + GST 18% | Unlimited Data
                      </div>
                      <ul style={{ listStyle: "none", padding: 0, marginTop: "16px", textAlign: "left" }}>
                        <li
                          style={{
                            color: palette.text,
                            marginBottom: "8px",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fas fa-check-circle"
                            style={{ color: palette.green, marginRight: "10px", fontSize: "16px" }}
                          ></i>
                          <span>
                            Download: <strong>{plan.download}</strong>
                          </span>
                        </li>
                        <li
                          style={{
                            color: palette.text,
                            marginBottom: "8px",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fas fa-check-circle"
                            style={{ color: palette.green, marginRight: "10px", fontSize: "16px" }}
                          ></i>
                          <span>
                            FUP: <strong>{plan.fup}</strong>
                          </span>
                        </li>
                        <li
                          style={{
                            color: palette.text,
                            marginBottom: "0",
                            fontSize: "13px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fas fa-check-circle"
                            style={{ color: palette.green, marginRight: "10px", fontSize: "16px" }}
                          ></i>
                          <span>
                            Post-FUP: <strong>{plan.postFup}</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      style={{
                        background: palette.buttonGradient,
                        color: "#fff",
                        padding: "10px 18px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontWeight: "700",
                        fontSize: "14px",
                        display: "inline-block",
                        marginTop: "18px",
                        boxShadow: "0 6px 14px rgba(15, 23, 42, 0.12)",
                      }}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "home" && (
        <>
          {/* Combo Plans Section */}
          <section
            className="pricing-section section-padding"
            style={{ background: palette.softGradient }}
          >
            <div className="container">
              <div className="section-title text-center">
                <span className="sub-content wow fadeInUp" style={{ color: palette.orange }}>
                  <img src="assets/img/bale.png" alt="img" />
                  Combo Plans (Internet + IPTV)
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: palette.dark }}>
                  Internet + Entertainment Bundles
                </h2>
              </div>

              <div className="row justify-content-center mt-5">
                {[
                  {
                    name: "BharatXpress Combo",
                    speed: "100 Mbps + IPTV",
                    price: "₹ 999",
                    features: [
                      "Free IPTV on 6-month plan",
                      "Free IPTV + 2 months extra on 12-month plan",
                      "FUP Limit: Unlimited",
                    ],
                    delay: ".3s",
                  },
                  {
                    name: "BharatXpress Combo",
                    speed: "200 Mbps + IPTV",
                    price: "₹ 1199",
                    features: [
                      "Free IPTV on 6-month plan",
                      "Free IPTV + 2 months extra on 12-month plan",
                      "FUP Limit: Unlimited",
                    ],
                    delay: ".4s",
                  },
                ].map((plan) => (
                  <div
                    key={`${plan.name}-${plan.speed}`}
                    className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp mb-4"
                    data-wow-delay={plan.delay}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "20px",
                        padding: "36px 30px",
                        textAlign: "center",
                        border: `1px solid ${palette.border}`,
                        boxShadow: cardShadow,
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "18px",
                          background: palette.buttonGradient,
                          margin: "0 auto 22px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          boxShadow: "0 10px 26px rgba(243,106,29,0.24)",
                        }}
                      >
                        <i className="fas fa-tv" style={{ fontSize: "38px" }}></i>
                      </div>
                      <h3 style={{ color: palette.dark, fontSize: "24px", fontWeight: "700", marginBottom: "6px" }}>
                        {plan.name}
                      </h3>
                      <p style={{ color: palette.muted, fontSize: "16px", marginBottom: "14px" }}>{plan.speed}</p>
                      <h2
                        style={{
                          color: palette.orange,
                          fontSize: "34px",
                          fontWeight: "bold",
                          margin: "18px 0",
                        }}
                      >
                        {plan.price}{" "}
                        <span style={{ fontSize: "16px", fontWeight: "400", color: palette.muted }}>
                          /Month + GST 18%
                        </span>
                      </h2>
                      <ul style={{ listStyle: "none", padding: 0, marginTop: "22px", textAlign: "left" }}>
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            style={{
                              color: palette.text,
                              marginBottom: "12px",
                              fontSize: "15px",
                              display: "flex",
                              alignItems: "flex-start",
                            }}
                          >
                            <i
                              className="fas fa-check-circle"
                              style={{ color: palette.green, marginRight: "10px", fontSize: "17px", marginTop: "2px" }}
                            ></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        style={{
                          background: palette.buttonGradient,
                          color: "#fff",
                          padding: "14px 36px",
                          borderRadius: "999px",
                          textDecoration: "none",
                          fontWeight: "700",
                          fontSize: "16px",
                          display: "inline-block",
                          marginTop: "26px",
                          boxShadow: cardShadow,
                        }}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* OTT Entertainment Packs */}
          <section
            className="pricing-section section-padding"
            style={{ background: palette.deepGreen }}
          >
            <div className="container">
              <div className="section-title text-center">
                <span className="sub-content wow fadeInUp" style={{ color: "#dff6ed" }}>
                  <img src="assets/img/bale.png" alt="img" style={{ filter: "brightness(0) invert(1)" }} />
                  OTT Entertainment Packs
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: "#fff" }}>
                  18 OTT Platforms
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s" style={{ color: "#dff6ed", marginTop: "12px" }}>
                  Includes JioHotstar, ZEE5, SonyLIV, FanCode, Sun NXT, Hungama + 12 more.
                </p>
              </div>

              <div className="row justify-content-center mt-5">
                {[
                  { duration: "1 Month Plan", price: "₹ 170", period: "/month", delay: ".3s" },
                  { duration: "6 Months Plan", price: "₹ 1020", period: "/6 months", delay: ".4s" },
                  { duration: "12 Months Plan", price: "₹ 2040", period: "/12 months", description: "Best Value!", delay: ".5s" },
                ].map((plan) => (
                  <div
                    key={plan.duration}
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp mb-4"
                    data-wow-delay={plan.delay}
                  >
                    <div
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: "20px",
                        padding: "32px 24px",
                        textAlign: "center",
                        border: glassBorder,
                        boxShadow: "0 14px 34px rgba(0,0,0,0.18)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            width: "78px",
                            height: "78px",
                            borderRadius: "18px",
                            background: "#fff",
                            margin: "0 auto 18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: palette.green,
                            boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
                          }}
                        >
                          <i className="fas fa-play-circle" style={{ fontSize: "36px" }}></i>
                        </div>
                        <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: "700", marginBottom: "8px" }}>
                          {plan.duration}
                        </h3>
                        {plan.description && (
                          <div
                            style={{
                              background: "rgba(255,255,255,0.14)",
                              borderRadius: "14px",
                              padding: "6px 14px",
                              display: "inline-block",
                              marginBottom: "14px",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            {plan.description}
                          </div>
                        )}
                        <h2
                          style={{
                            color: "#fef3e7",
                            fontSize: "34px",
                            fontWeight: "bold",
                            margin: "16px 0",
                          }}
                        >
                          {plan.price} <span style={{ fontSize: "16px", fontWeight: "400" }}>{plan.period}</span>
                        </h2>
                        <p style={{ color: "#dff6ed", fontSize: "14px", marginTop: "12px" }}>
                          Access to all 18 OTT platforms
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        style={{
                          background: "#fff",
                          color: palette.green,
                          padding: "13px 30px",
                          borderRadius: "999px",
                          textDecoration: "none",
                          fontWeight: "700",
                          fontSize: "15px",
                          display: "inline-block",
                          marginTop: "22px",
                          boxShadow: "0 12px 24px rgba(0,0,0,0.14)",
                        }}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IPTV Channel Packs */}
          <section
            className="pricing-section section-padding"
            style={{ background: palette.gentleGradient }}
          >
            <div className="container">
              <div className="section-title text-center">
                <span className="sub-content wow fadeInUp" style={{ color: palette.orange }}>
                  <img src="assets/img/bale.png" alt="img" />
                  IPTV Channel Packs
                </span>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{ color: palette.dark }}
                >
                  Premium Channel Packages
                </h2>
              </div>

              <div className="row mt-5">
                {[
                  { name: "Telugu Gold HD Pack", channels: "430 Channels", prices: ["₹300 / month", "₹1,800 (6 months)", "₹3,600 (12 months)"], delay: ".3s" },
                  { name: "Hindi Gold HD Pack", channels: "440 Channels", prices: ["₹300 / month", "₹1,800 (6 months)", "₹3,600 (12 months)"], delay: ".4s" },
                  { name: "Hindi Telugu Silver Pack", channels: "430 Channels", prices: ["₹300 / month", "₹1,800 (6 months)", "₹3,600 (12 months)"], delay: ".5s" },
                  { name: "Hindi Telugu Gold Pack", channels: "450 Channels", prices: ["₹300 / month", "₹1,800 (6 months)", "₹3,600 (12 months)"], delay: ".6s" },
                ].map((pack) => (
                  <div
                    key={pack.name}
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp mb-4"
                    data-wow-delay={pack.delay}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "20px",
                        padding: "32px 28px",
                        textAlign: "center",
                        boxShadow: subtleShadow,
                        height: "100%",
                        border: `1px solid ${palette.border}`,
                      }}
                    >
                      <div
                        style={{
                          width: "74px",
                          height: "74px",
                          borderRadius: "16px",
                          background: palette.buttonGradient,
                          margin: "0 auto 18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          boxShadow: "0 10px 24px rgba(243,106,29,0.24)",
                        }}
                      >
                        <i className="fas fa-satellite-dish" style={{ fontSize: "32px" }}></i>
                      </div>
                      <h3 style={{ color: palette.dark, fontSize: "22px", fontWeight: "700", marginBottom: "5px" }}>
                        {pack.name}
                      </h3>
                      <p style={{ color: palette.muted, fontSize: "16px", marginBottom: "18px" }}>{pack.channels}</p>
                      <ul style={{ listStyle: "none", padding: 0, textAlign: "left", marginTop: "16px" }}>
                        {pack.prices.map((price) => (
                          <li
                            key={price}
                            style={{
                              color: palette.text,
                              marginBottom: "10px",
                              fontSize: "15px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <i
                              className="fas fa-check-circle"
                              style={{ color: palette.green, marginRight: "10px", fontSize: "17px" }}
                            ></i>
                            <span>
                              <strong>{price}</strong>
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        style={{
                          background: palette.buttonGradient,
                          color: "#fff",
                          padding: "13px 30px",
                          borderRadius: "999px",
                          textDecoration: "none",
                          fontWeight: "700",
                          fontSize: "15px",
                          display: "inline-block",
                          marginTop: "22px",
                          boxShadow: cardShadow,
                        }}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <Cta sectionPadding />
    </NextLayout>
  );
};
export default page;
