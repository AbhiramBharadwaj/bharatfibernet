import FunFactCounter from "@/components/FunFactCounter";
import Pricing from "@/components/Pricing";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import SERVICES_SECTION from "@/components/hero/SERVICES.jsx";
import HeroSlider from "@/components/hero/HeroSlider";
import GuidanceForm from "@/components/GuidanceForm";


const page = () => {
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
    backgroundImage: 'url("/assets/img/background/pattern-12.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
  <div className="container">
    {/* Heading + Subheading */}
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Andhra & Telangana’s Most Trusted <br />
            Enterprise IT Network
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
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
      <section className="plan-section fix section-padding">
      <div className="container">
    {/* Heading */}
    <div className="section-title text-center">
      <h2 className="wow fadeInUp" data-wow-delay=".2s">
        A Plan for Everyone.{" "}
        <span className="plan-explore-link">Explore Yours.</span>
      </h2>
    </div>

    {/* Category tabs */}
    <div className="row justify-content-center mt-4">
      <div className="col-lg-10">
        <div className="plan-tabs d-flex flex-wrap justify-content-center">
          <Link href="/ill" className="plan-tab active">
            Corporate Leased Lines
          </Link>
          <Link href="/" className="plan-tab">
            Business SME Plans
          </Link>
          <Link href="/" className="plan-tab">
            Home Broadband Plans
          </Link>
        </div>
      </div>
    </div>

    {/* Subheading */}
    <div className="row justify-content-center mt-5">
      <div className="col-lg-10 text-center">
        <p className="plan-subtitle">
          Tailored for You – Find Your Ideal Plan!
        </p>
      </div>
    </div>

    {/* Plans row */}
    <div className="row g-4 mt-3 justify-content-center">
      {/* Express 4000 */}
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

          <button className="plan-btn">Get Started</button>
        </div>
      </div>

      {/* Express 6000 */}
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

          <button className="plan-btn">Get Started</button>
        </div>
      </div>

      {/* Express 8000 */}
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

          <button className="plan-btn">Get Started</button>
        </div>
      </div>

      {/* Express 10000 */}
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

          <button className="plan-btn">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</section>


<section 
  className="testimonial-section fix section-padding"
  style={{
    backgroundImage: 'url("/assets/img/2.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  <div className="container">

    {/* Heading */}
    <div className="section-title text-center mb-5">
      <h2 className="wow fadeInUp" data-wow-delay=".2s">
        What Industry Leaders Are Saying
      </h2>
    </div>

    {/* Testimonials */}
    <div className="row g-4 justify-content-center">

      {/* 1 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="testimonial-card">
          <p className="testimonial-text">
            "We switched to this broadband provider because of their competitive
            pricing, and we haven’t looked back since. The service is excellent,
            and we’re saving money every month."
          </p>

          <div className="testimonial-footer">
            <h4>Suraj S</h4>
            <p className="role">CFO</p>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="testimonial-card">
          <p className="testimonial-text">
            "The installation process was seamless and quick. The technicians
            were professional and ensured everything was set up perfectly. We've
            had a smooth experience ever since."
          </p>

          <div className="testimonial-footer">
            <h4>David R</h4>
            <p className="role">Operations Manager</p>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="testimonial-card">
          <p className="testimonial-text">
            "We love that the plans are scalable and flexible to meet our
            growing business needs. Upgrading packages is simple, and our team
            is always connected."
          </p>

          <div className="testimonial-footer">
            <h4>Soujanya D</h4>
            <p className="role">HR Manager</p>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Their enterprise solutions helped us improve uptime and performance.
            The network is incredibly reliable, and support is always available
            when needed."
          </p>

          <div className="testimonial-footer">
            <h4>Mahesh K</h4>
            <p className="role">IT Director</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Other sections */}
      <GuidanceForm />
      {/* Other sections */}

    
    </NextLayout>
  );
};
export default page;
