import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import AboutTabs from "@/components/AboutTabs";

const page = () => {
  return (
    <NextLayout>
      {/*<< Breadcrumb Section Start >>*/}
      <Breadcrumb title="About Us - Who We Are" />
      
      {/* Screen 1: Tabbed About Section */}
      <AboutTabs />

      {/* Screen 2: Trusted by Businesses */}
      <section className="about-section fix section-padding pt-0 bg-light">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image-3">
                <img src="assets/img/about/06.jpg" alt="Trusted Business Connectivity" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Trusted by Businesses That Can't Afford to Pause
                </h2>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
                  In a world where every second matters, downtime isn't an option.
                </p>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                  That's why enterprises across Andhra Pradesh and Telangana trust Bharath VoIP Communications for fast, secure, and consistent connectivity.
                </p>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".6s">
                  We don't just deliver the internet - we deliver confidence. Our team listens, adapts, and engineers solutions that keep operations smooth, no matter what.
                </p>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".7s">
                  With dual-link redundancy and multi-gateway routing, we ensure your business never skips a beat.
                </p>
                <div className="highlight-box mt-4 p-4 wow fadeInUp" data-wow-delay=".8s" style={{border: '2px solid #0d6efd', borderRadius: '10px', background: '#ffffff'}}>
                  <h5 className="text-center">
                    Helping your growth run on reliable digital rails. Because when your network performs flawlessly, so does your business.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3: We Believe in People */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                We Believe in People, Not Just Technology
              </h2>
              <p className="mt-4 wow fadeInUp" data-wow-delay=".4s" style={{fontSize: '1.1rem'}}>
                At Bharath VoIP, technology is only as good as the difference it makes in people's lives.
              </p>
              <p className="mt-3 wow fadeInUp" data-wow-delay=".5s" style={{fontSize: '1.1rem'}}>
                We design our network solutions to keep your team connected, your data protected, and your operations running effortlessly.
              </p>
              <p className="mt-3 wow fadeInUp" data-wow-delay=".6s" style={{fontSize: '1.1rem'}}>
                With local expertise, proactive support, and human-first service, we make sure you can focus on what really matters - your growth.
              </p>
              <div className="highlight-box mt-5 p-4 wow fadeInUp" data-wow-delay=".7s" style={{border: '2px solid #0d6efd', borderRadius: '10px', background: '#f8f9fa'}}>
                <h4 className="text-center">
                  Technology should simplify, not complicate. That's our belief.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 4: Our Promise */}
      <section className="service-section fix section-padding pt-0 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Promise
            </h2>
            <h4 className="wow fadeInUp mt-3" data-wow-delay=".4s">
              Powering Your Digital Growth, Every Step of the Way
            </h4>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-box-items wow fadeInUp" data-wow-delay=".2s">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="content">
                  <h4>Uninterrupted Connectivity</h4>
                  <p>Keep working, playing, and growing without interruptions.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-box-items wow fadeInUp" data-wow-delay=".3s">
                <div className="icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="content">
                  <h4>Simple Setup & Support</h4>
                  <p>Setup and support made easy—no complications.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-box-items wow fadeInUp" data-wow-delay=".4s">
                <div className="icon">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="content">
                  <h4>Quick Help</h4>
                  <p>Quick help when you need it, no downtime.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-box-items wow fadeInUp" data-wow-delay=".5s">
                <div className="icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="content">
                  <h4>Responsive Internet</h4>
                  <p>Responsive internet for work or entertainment.</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="service-box-items wow fadeInUp" data-wow-delay=".6s">
                <div className="icon">
                  <i className="fas fa-tag"></i>
                </div>
                <div className="content">
                  <h4>Affordable Plans</h4>
                  <p>Affordable plans designed for your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 5: Leadership Section */}
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Guided by Vision. Driven by Leadership.
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s" style={{fontSize: '1.1rem'}}>
              At the core of Bharath VoIP's success is a leadership team that combines deep technical insight with a future-focused vision.
            </p>
          </div>

          <h3 className="text-center mb-5 wow fadeInUp" data-wow-delay=".5s">Our Leadership</h3>

          <div className="row g-4">
            {/* CEO */}
            <div className="col-lg-4 col-md-6">
              <div className="team-card-items wow fadeInUp" data-wow-delay=".2s">
                <div className="team-image">
                  <img src="assets/img/team/01.jpg" alt="Botte Venugopal" />
                </div>
                <div className="team-content text-center">
                  <h4>Botte Venugopal</h4>
                  <p>Chief Executive Officer</p>
                  <p className="mt-3" style={{fontSize: '0.95rem'}}>
                    With a forward-thinking vision and rich experience in telecommunications and IT infrastructure, Mr. Botte Venugopal leads Bharat VoIP Communications Pvt. Ltd. with a focus on innovation and customer trust. Under his leadership, the company has grown from a regional provider to a trusted name in enterprise connectivity across Andhra Pradesh and Telangana.
                  </p>
                  <p className="mt-3 fw-bold" style={{fontSize: '0.95rem', fontStyle: 'italic'}}>
                    His belief: technology should simplify, not complicate — and reliability should be a given, not a luxury.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder & MD */}
            <div className="col-lg-4 col-md-6">
              <div className="team-card-items wow fadeInUp" data-wow-delay=".4s">
                <div className="team-image">
                  <img src="assets/img/team/02.jpg" alt="Gaddam Poornachander" />
                </div>
                <div className="team-content text-center">
                  <h4>Gaddam Poornachander</h4>
                  <p>Founder & Managing Director</p>
                  <p className="mt-3" style={{fontSize: '0.95rem'}}>
                    With over two decades in telecommunications and digital infrastructure, Mr. Gaddam Poornachander drives Bharat VoIP's growth with vision and purpose. His leadership has transformed the company into a trusted provider of Internet Leased Lines, Managed Network Services, and Smart Connectivity Solutions—delivering reliable performance and real business value to enterprises and institutions alike.
                  </p>
                </div>
              </div>
            </div>

            {/* CTO */}
            <div className="col-lg-4 col-md-6">
              <div className="team-card-items wow fadeInUp" data-wow-delay=".6s">
                <div className="team-image">
                  <img src="assets/img/team/03.jpg" alt="Srikanth Bodla" />
                </div>
                <div className="team-content text-center">
                  <h4>Srikanth Bodla</h4>
                  <p>Chief Technology Officer</p>
                  <p className="mt-3" style={{fontSize: '0.95rem'}}>
                    With over a decade of expertise in network operations and IT infrastructure, Mr. Srikanth Bodla ensures Bharat VoIP delivers seamless connectivity and superior uptime. His leadership in NOC management, network security, and performance optimization drives the company's commitment to reliable, scalable, and high-performing network solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <p className="wow fadeInUp" data-wow-delay=".3s" style={{fontSize: '1.1rem'}}>
                Together, they've built an organization where technology and trust move hand in hand — and every connection tells a story of dependability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section fix section-padding pt-0 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              The People Who Keep You Connected
            </h2>
            <p className="mt-4 wow fadeInUp" data-wow-delay=".4s" style={{fontSize: '1.1rem'}}>
              Every smooth and uninterrupted connection has a hardworking team behind it.
            </p>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".5s" style={{fontSize: '1.1rem'}}>
              Our engineers, network architects, and support staff put in their best every day to design, monitor, and maintain networks that keep your homes and businesses running fast and reliably.
            </p>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".6s" style={{fontSize: '1.1rem'}}>
              From on-ground teams handling installations to technical experts offering round-the-clock support, everyone at Bharat VoIP works with one goal — keeping you connected always.
            </p>
            <h4 className="mt-5 wow fadeInUp" data-wow-delay=".7s">
              To deliver connectivity you can count on, every single day.
            </h4>
            <div className="mt-5 wow fadeInUp" data-wow-delay=".8s">
              <Link href="/service" className="theme-btn">
                Explore Our Services
                <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="cta-box text-center p-5 wow fadeInUp" data-wow-delay=".3s" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                <h4 className="mb-4">Ready to find the right solution for your business or home?</h4>
                <Link href="/pricing" className="theme-btn">
                  See our plans
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-box text-center p-5 wow fadeInUp" data-wow-delay=".5s" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                <h4 className="mb-4">Not sure what you're looking for?</h4>
                <p className="mb-4">Let us recommend a solution for you.</p>
                <form className="mt-4">
                  <div className="mb-3">
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="Mobile Number" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email Address" 
                      required 
                    />
                  </div>
                  <button type="submit" className="theme-btn w-100">
                    Submit!
                    <i className="far fa-arrow-right" />
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
