import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import AboutTabs from "@/components/AboutTabs";

const palette = {
  ink: "#0f172a",
  muted: "#475569",
  accent: "#f36a1d",
  accentSoft: "#fff2e6",
  light: "#fff7f0",
  panel: "#ffffff",
  border: "#f2d7c4",
  shadow: "0 14px 28px rgba(15, 23, 42, 0.08)",
};

const page = () => {
  return (
    <NextLayout header={1}>
      {/*<< Breadcrumb Section Start >>*/}
      <Breadcrumb title="Who We Are" />

      {/* Screen 1: Tabbed About Section */}
      <AboutTabs />

      {/* Screen 2: Trusted by Businesses */}
      <section
        className="about-section fix section-padding pt-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 247, 240, 0.9) 0%, rgba(255, 255, 255, 0.95) 65%), url(/assets/img/w3.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image-3">
                <img
                  src="/assets/img/w2.png"
                  alt="Trusted Business Connectivity"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '15px',
                    boxShadow: palette.shadow,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-content">
                <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: palette.ink }}>
                  Trusted by Businesses That Can't Afford to Pause
                </h2>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".4s" style={{ color: palette.muted }}>
                  In a world where every second matters, downtime isn't an option.
                </p>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".5s" style={{ color: palette.muted }}>
                  That's why enterprises across Andhra Pradesh and Telangana trust Bharath VoIP Communications for fast, secure, and consistent connectivity.
                </p>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".6s" style={{ color: palette.muted }}>
                  We don't just deliver the internet - we deliver confidence. Our team listens, adapts, and engineers solutions that keep operations smooth, no matter what.
                </p>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".7s" style={{ color: palette.muted }}>
                  With dual-link redundancy and multi-gateway routing, we ensure your business never skips a beat.
                </p>
                <div
                  className="highlight-box mt-4 p-4 wow fadeInUp"
                  data-wow-delay=".8s"
                  style={{ border: `2px solid ${palette.accent}`, borderRadius: "12px", background: palette.panel }}
                >
                  <h5 className="text-center" style={{ color: palette.ink }}>
                    Helping your growth run on reliable digital rails. Because when your network performs flawlessly, so does your business.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3: We Believe in People */}
      <section className="about-section fix section-padding" style={{ background: palette.panel }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: palette.ink }}>
                We Believe in People, Not Just Technology
              </h2>
              <p className="mt-4 wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: '1.1rem', color: palette.muted }}>
                At Bharath VoIP, technology is only as good as the difference it makes in people's lives.
              </p>
              <p className="mt-3 wow fadeInUp" data-wow-delay=".5s" style={{ fontSize: '1.1rem', color: palette.muted }}>
                We design our network solutions to keep your team connected, your data protected, and your operations running effortlessly.
              </p>
              <p className="mt-3 wow fadeInUp" data-wow-delay=".6s" style={{ fontSize: '1.1rem', color: palette.muted }}>
                With local expertise, proactive support, and human-first service, we make sure you can focus on what really matters - your growth.
              </p>
              <div
                className="highlight-box mt-5 p-4 wow fadeInUp"
                data-wow-delay=".7s"
                style={{ border: `2px solid ${palette.accent}`, borderRadius: "12px", background: palette.accentSoft }}
              >
                <h4 className="text-center" style={{ color: palette.ink }}>
                  Technology should simplify, not complicate. That's our belief.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 4: Our Promise */}
      <section
        className="service-section fix section-padding pt-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 247, 240, 0.9) 0%, rgba(255, 255, 255, 0.95) 70%), url(/assets/img/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: palette.ink }}>
              Our Promise
            </h2>
            <h4 className="wow fadeInUp mt-3" data-wow-delay=".4s" style={{ color: palette.muted }}>
              Powering Your Digital Growth, Every Step of the Way
            </h4>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="service-box-items wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  background: palette.panel,
                  borderRadius: "16px",
                  padding: "40px 30px",
                  border: `1px solid ${palette.border}`,
                  boxShadow: palette.shadow,
                }}
              >
                <div className="icon" style={{ marginBottom: "20px" }}>
                  <i className="fas fa-check-circle" style={{ fontSize: "3rem", color: palette.accent }}></i>
                </div>
                <div className="content">
                  <h4 style={{ color: palette.ink, marginBottom: "15px" }}>Uninterrupted Connectivity</h4>
                  <p style={{ color: palette.muted }}>Keep working, playing, and growing without interruptions.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service-box-items wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  background: palette.panel,
                  borderRadius: "16px",
                  padding: "40px 30px",
                  border: `1px solid ${palette.border}`,
                  boxShadow: palette.shadow,
                }}
              >
                <div className="icon" style={{ marginBottom: "20px" }}>
                  <i className="fas fa-cogs" style={{ fontSize: "3rem", color: palette.accent }}></i>
                </div>
                <div className="content">
                  <h4 style={{ color: palette.ink, marginBottom: "15px" }}>Simple Setup & Support</h4>
                  <p style={{ color: palette.muted }}>Setup and support made easy—no complications.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service-box-items wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  background: palette.panel,
                  borderRadius: "16px",
                  padding: "40px 30px",
                  border: `1px solid ${palette.border}`,
                  boxShadow: palette.shadow,
                }}
              >
                <div className="icon" style={{ marginBottom: "20px" }}>
                  <i className="fas fa-headset" style={{ fontSize: "3rem", color: palette.accent }}></i>
                </div>
                <div className="content">
                  <h4 style={{ color: palette.ink, marginBottom: "15px" }}>Quick Help</h4>
                  <p style={{ color: palette.muted }}>Quick help when you need it, no downtime.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service-box-items wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  background: palette.panel,
                  borderRadius: "16px",
                  padding: "40px 30px",
                  border: `1px solid ${palette.border}`,
                  boxShadow: palette.shadow,
                }}
              >
                <div className="icon" style={{ marginBottom: "20px" }}>
                  <i className="fas fa-bolt" style={{ fontSize: "3rem", color: palette.accent }}></i>
                </div>
                <div className="content">
                  <h4 style={{ color: palette.ink, marginBottom: "15px" }}>Responsive Internet</h4>
                  <p style={{ color: palette.muted }}>Responsive internet for work or entertainment.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="service-box-items wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  background: palette.panel,
                  borderRadius: "16px",
                  padding: "40px 30px",
                  border: `1px solid ${palette.border}`,
                  boxShadow: palette.shadow,
                }}
              >
                <div className="icon" style={{ marginBottom: "20px" }}>
                  <i className="fas fa-tag" style={{ fontSize: "3rem", color: palette.accent }}></i>
                </div>
                <div className="content">
                  <h4 style={{ color: palette.ink, marginBottom: "15px" }}>Affordable Plans</h4>
                  <p style={{ color: palette.muted }}>Affordable plans designed for your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 5: Leadership Section */}
      <section className="team-section fix section-padding" style={{ background: palette.light }}>
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: palette.ink }}>
              Guided by Vision. Driven by Leadership.
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: "1.05rem", color: palette.muted }}>
              At the core of Bharat VoIP's success is a leadership team that blends deep technical insight with a future-focused vision.
            </p>
          </div>

          <h3 className="text-center mb-5 wow fadeInUp" data-wow-delay=".5s" style={{ color: palette.ink }}>
            Our Leadership
          </h3>

          <div className="row g-4 align-items-stretch" style={{ marginTop: "-20px" }}>
            <div className="col-lg-4 col-md-6">
              <div
                className="team-card-items h-100 wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  borderRadius: "14px",
                  background: palette.panel,
                  boxShadow: "0 10px 22px rgba(17, 24, 39, 0.08)",
                  overflow: "hidden",
                  minHeight: "100%",
                }}
              >
                <img
                  src="/assets/img/p1.jpg"
                  alt="Botte Venugopal"
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    objectPosition: "center 18%",
                  }}
                />
                <div className="team-content text-center p-3">
                  <h4 className="mb-1" style={{ color: palette.ink }}>
                    Botte Venugopal
                  </h4>
                  <p className="mb-2" style={{ color: palette.muted }}>
                    Chief Executive Officer
                  </p>
                  <p style={{ fontSize: "0.9rem", color: palette.muted }}>
                    Leads Bharat VoIP with a focus on innovation and customer trust across enterprise connectivity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="team-card-items h-100 wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  borderRadius: "18px",
                  background: palette.panel,
                  boxShadow: "0 16px 30px rgba(17, 24, 39, 0.1)",
                  overflow: "hidden",
                  transform: "translateY(-14px)",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src="/assets/img/p2.jpg"
                    alt="Gaddam Poornachander"
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      objectPosition: "center 28%",
                      transform: "scale(1.0)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "18px",
                      bottom: "18px",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: palette.accentSoft,
                      color: palette.accent,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Founder &amp; Managing Director
                  </span>
                </div>
                <div className="team-content text-center p-3">
                  <h3 className="mb-1" style={{ color: palette.ink }}>
                    Gaddam Poornachander
                  </h3>
                  <p className="mb-2" style={{ color: palette.muted }}>
                    Founder &amp; Managing Director
                  </p>
                  <p style={{ fontSize: "0.9rem", color: palette.muted }}>
                    With over two decades in telecommunications and digital infrastructure, he drives Bharat VoIP's growth with vision and purpose.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="team-card-items h-100 wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  borderRadius: "14px",
                  background: palette.panel,
                  boxShadow: "0 10px 22px rgba(17, 24, 39, 0.08)",
                  overflow: "hidden",
                  minHeight: "100%",
                }}
              >
                <img
                  src="/assets/img/p3.jpg"
                  alt="Srikanth Bodla"
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    objectPosition: "center 18%",
                  }}
                />
                <div className="team-content text-center p-3">
                  <h4 className="mb-1" style={{ color: palette.ink }}>
                    Srikanth Bodla
                  </h4>
                  <p className="mb-2" style={{ color: palette.muted }}>
                    Chief Technology Officer
                  </p>
                  <p style={{ fontSize: "0.9rem", color: palette.muted }}>
                    Drives network reliability, security, and performance optimization across the company.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <p className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: "1.05rem", color: palette.muted }}>
                Together, they build an organization where technology and trust move hand in hand — and every connection tells a story of dependability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section
        className="team-section fix"
        style={{
          padding: "30px 0",
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 247, 240, 0.9) 0%, rgba(255, 255, 255, 0.95) 60%), url(/assets/img/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="section-title text-center mb-3">
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: palette.ink }}>
              The People Who Keep You Connected
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: "1.1rem", color: palette.muted }}>
              Every smooth and uninterrupted connection has a hardworking team behind it.
            </p>
            <p className="mt-2 wow fadeInUp" data-wow-delay=".5s" style={{ fontSize: "1.1rem", color: palette.muted }}>
              Our engineers, network architects, and support staff put in their best every day to design, monitor, and maintain networks that keep your homes and businesses running fast and reliably.
            </p>
            <p className="mt-2 wow fadeInUp" data-wow-delay=".6s" style={{ fontSize: "1.1rem", color: palette.muted }}>
              From on-ground teams handling installations to technical experts offering round-the-clock support, everyone at Bharat VoIP works with one goal — keeping you connected always.
            </p>
            <h4 className="mt-3 wow fadeInUp" data-wow-delay=".7s" style={{ color: palette.ink }}>
              To deliver connectivity you can count on, every single day.
            </h4>
            <div className="mt-3 wow fadeInUp" data-wow-delay=".8s">
              <Link href="what-we-do" className="theme-btn">
                Explore Our Services
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="cta-section"
        style={{
          padding: "30px 0",
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 247, 240, 0.9) 0%, rgba(255, 255, 255, 0.95) 60%), url(/assets/img/2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div
                className="cta-box text-center p-4 wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  background: palette.panel,
                  borderRadius: "14px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: palette.shadow,
                }}
              >
                <h4 className="mb-3" style={{ color: palette.ink }}>
                  Ready to find the right solution for your business or home?
                </h4>
                <Link href="/pricing" className="theme-btn">
                  See our plans
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="cta-box text-center p-4 wow fadeInUp"
                data-wow-delay=".5s"
                style={{ background: palette.panel, borderRadius: "14px", boxShadow: palette.shadow }}
              >
                <h4 className="mb-2" style={{ color: palette.ink }}>
                  Not sure what you're looking for?
                </h4>
                <p className="mb-3" style={{ color: palette.muted }}>
                  Let us recommend a solution for you.
                </p>
                <form className="mt-2">
                  <div className="mb-2">
                    <input
                      type="tel"
                      className="guidance-input"
                      placeholder="Mobile Number"
                      required
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        border: `1px solid ${palette.border}`,
                        background: palette.panel,
                        padding: "12px 14px",
                        color: palette.ink,
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      className="guidance-input"
                      placeholder="Email Address"
                      required
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        border: `1px solid ${palette.border}`,
                        background: palette.panel,
                        padding: "12px 14px",
                        color: palette.ink,
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="guidance-btn"
                    style={{
                      marginTop: "12px",
                      border: "none",
                      borderRadius: "999px",
                      padding: "12px 18px",
                      background: `linear-gradient(135deg, ${palette.accent}, #ffb347)`,
                      color: "#ffffff",
                      fontWeight: "700",
                      fontSize: "15px",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Submit!
                    <i className="far fa-arrow-right" style={{ marginLeft: "8px" }} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </NextLayout>
  );
};
export default page;
