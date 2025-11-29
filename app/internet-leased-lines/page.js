import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import InternetLeasedLinesFaqAccordion from "@/components/InternetLeasedLinesFaqAccordion";

export const metadata = {
  title: "Internet Leased Lines | Bharat Fibernet",
  description: "Dedicated bandwidth and guaranteed uptime for enterprise connectivity",
};

export default function InternetLeasedLines() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Internet Leased Lines" />

      {/* Screen 4 - FAQ Section */}
      <section className="about-section section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-content text-center">
                <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: '500', lineHeight: '1.2' }}>
                  Dedicated Bandwidth. Guaranteed Uptime.
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', maxWidth: '1000px', margin: '0 auto' }}>
                  Designed for enterprises that can't afford disruption, Bharath VoIP's Internet Leased Lines deliver symmetrical bandwidth, zero contention, and continuous uptime backed by proactive technical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 2 - Features */}
      <section className="service-details-section section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          {/* Main Title */}
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{ fontSize: '3rem', fontWeight: '500', lineHeight: '1.3', marginBottom: '2rem' , color: '#1a1a1a'}}>
                Unshared. Uninterrupted. Uncompromised.
              </h2>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Deliver Consistent, Uncontended Connectivity
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Provide enterprises with 100% dedicated bandwidth that isn't shared with external users. Every bit of bandwidth remains exclusively available, ensuring no congestion, no slowdowns, and uninterrupted data flow for high-volume workloads and real-time applications.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Enable Symmetrical Upload and Download Speeds
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Maintain equal upload and download capacity across the network for seamless communication and efficient data exchange. Balanced speed allocation enhances video conferencing, file transfers, and cloud application performance, supporting uninterrupted collaboration.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Guarantee Availability with Stringent Uptime SLAs
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Assure reliability with a 99.5% uptime Service Level Agreement (SLA) supported by redundant network architecture. Continuous monitoring ensures quick fault detection, keeping connectivity stable and operational around the clock.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Scale Bandwidth Effortlessly as Demand Grows
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Expand capacity from 10 Mbps to 10 Gbps without infrastructure overhauls. Scalable provisioning allows businesses to increase or adjust bandwidth dynamically, meeting evolving demands with flexibility and precision.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Maintain Service Continuity with 24×7 NOC Support
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Ensure uninterrupted network availability with round-the-clock technical assistance from certified engineers. The Network Operations Center (NOC) continuously monitors performance, providing instant intervention when anomalies are detected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3 - Key Capabilities */}
      <section className="service-details-section section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          {/* Main Title */}
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '1.5rem' , color: '#1a1a1a'}}>
                Bharath VoIP Key Capabilities
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '1000px', margin: '0 auto' }}>
                High-performance connectivity backed by enterprise-grade reliability, intelligent monitoring, and guaranteed availability - purpose-built for organizations that depend on always-on internet access.
              </p>
            </div>
          </div>

          {/* Capabilities List */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {/* Capability 1 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  Uncontended Bandwidth
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Exclusive, private connections ensuring consistent speed and stable performance at all times.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  Symmetrical Data Speeds
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Balanced upload and download rates that enhance communication and real-time operations.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  Scalable Capacity
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Flexible upgrades from 10 Mbps to 10 Gbps as bandwidth needs evolve.
                </p>
              </div>

              {/* Capability 4 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  Proactive Network Monitoring
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Continuous performance oversight to detect, resolve, and prevent service interruptions.
                </p>
              </div>

              {/* Capability 5 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  24×7 Expert Support
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Certified engineers available around the clock through an active Network Operations Center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 4 - FAQ Section */}
      <section className="faq-section section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '2rem' , color: '#1a1a1a'}}>
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <InternetLeasedLinesFaqAccordion />
            </div>
          </div>

          {/* Closing Statement */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3 style={{ fontSize: '2.5rem', fontWeight: '400', lineHeight: '1.4', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Always available. Always reliable. Always Bharath VoIP.
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: '500', marginTop: '1.5rem' }}>
                Let's Connect
              </p>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
