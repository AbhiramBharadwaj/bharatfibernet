'use client';
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import NetworkFaqAccordion from "@/components/NetworkFaqAccordion";
import Link from "next/link";

export default function NetworkServices() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Network Services" />

      {/* Screen 1 - Hero Section with Form */}
      <section className="about-section section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-content">
                <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: '500', lineHeight: '1.2' }}>
                  Connectivity That Works, Wherever You Work.
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', marginBottom: '2rem' }}>
                  Enable seamless communication, efficient data transfer, and uninterrupted collaboration across teams, locations, and devices.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-form-wrap" style={{ background: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <h3 className="text-center mb-4" style={{ color: '#ff8c42', fontSize: '1.5rem', fontWeight: '600' }}>
                  Enquire Now
                </h3>
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                      style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #e0e0e0' }}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email ID *"
                      style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #e0e0e0' }}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <div className="d-flex">
                      <select 
                        className="form-control" 
                        style={{ 
                          width: '100px', 
                          padding: '0.75rem', 
                          borderRadius: '6px 0 0 6px', 
                          border: '1px solid #e0e0e0',
                          borderRight: 'none'
                        }}
                      >
                        <option>🇮🇳 91</option>
                      </select>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Contact Number *"
                        style={{ padding: '0.75rem', borderRadius: '0 6px 6px 0', border: '1px solid #e0e0e0' }}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Organization"
                      style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #e0e0e0' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="theme-btn w-100"
                    style={{ 
                      background: 'linear-gradient(135deg, #fd9330 0%, #ff7420 100%)', 
                      border: 'none',
                      padding: '0.9rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      color: 'white'
                    }}
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 2 - Enterprise Connectivity */}
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
                Enterprise Connectivity
              </h2>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Always-On Networks for Always-On Businesses
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Enterprise Connectivity provides high-availability network infrastructure designed to ensure continuous, stable performance in demanding digital environments.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <div className="feature-box" style={{ background: '#f8f9fa', padding: '2.5rem', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  High-Availability Networks with Built-In Redundancy
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Connectivity remains uninterrupted through redundant routing and failover mechanisms that maintain data flow even during outages. This structure prevents service disruption, ensuring ongoing access to mission-critical applications and systems at all times.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Flexible Bandwidth Options That Scale with Demand
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Bandwidth adjusts dynamically to handle varying workloads and data requirements. As demand increases, the network scales in real time to preserve consistent performance, enabling efficient operations across departments and remote locations.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Advanced Data Protection and Encryption Protocols
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Information security is maintained through multi-layer encryption and authentication controls. Every transmission is protected from interception or unauthorized access, providing a secure framework for data exchange across devices and endpoints.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Secure Remote Access for Hybrid and Distributed Teams
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Authorized users connect securely from any location without compromising speed or privacy. Encrypted tunnels and identity-based authentication maintain confidentiality while allowing distributed teams to collaborate effectively across regions.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Consistent Network Performance and Collaboration Efficiency
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Integrated network design ensures steady data transfer speeds, minimizing lag and connection drops. The result is smoother communication, faster access to shared resources, and improved productivity across all connected teams.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Future-Ready Scalability for Growing Environments
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Infrastructure evolves seamlessly as operations expand. Modular architecture allows easy addition of new users, devices, and branches, supporting ongoing growth without downtime or performance degradation.
                </p>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Enhanced Security for Sensitive Operations
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Data and system integrity are maintained through continuous threat detection and controlled access protocols. This ensures that high-security processes and sensitive operations remain fully protected within enterprise-grade network boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3 - Annual Maintenance Contracts (AMC) */}
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
                Annual Maintenance Contracts (AMC)
              </h2>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Reliability Made Routine.
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Designed to maintain system health, extend equipment lifespan, and reduce operational downtime through timely interventions and continuous monitoring.
              </p>
            </div>
          </div>

          {/* AMC Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Hardware and Network Maintenance
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Comprehensive coverage includes routers, switches, firewalls, servers, and connected endpoints. Regular servicing and optimization keep network hardware functioning efficiently, minimizing faults and preventing costly system failures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Preventive Health Checks
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Scheduled inspections identify potential issues before they affect daily operations. Continuous diagnostics maintain system integrity, allowing timely corrections that sustain network stability and improve long-term performance.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                On-Site and Remote Support
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Flexible support structures enable both on-site interventions and remote troubleshooting. This hybrid model ensures that assistance is available whenever required, reducing downtime and improving operational responsiveness.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Quick Replacement and Repairs
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Critical hardware replacements and repairs are managed efficiently to restore normal operations with minimal interruption. Streamlined logistics and expert supervision ensure faster turnaround times and sustained service continuity.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Predictable Maintenance Costs and Extended Equipment Life
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Fixed annual plans create cost transparency, eliminating unexpected repair expenses. Consistent maintenance enhances equipment durability and optimizes performance, providing measurable returns on IT investments.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Continuous Monitoring and Technical Oversight
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Around-the-clock monitoring ensures that network performance remains consistent and disruptions are detected early. Continuous oversight enhances reliability, supports compliance, and maintains steady uptime throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 4 - Managed LAN/WAN/Wi-Fi Solutions */}
      <section className="service-details-section section-padding">
        <div className="container">
          {/* Main Title */}
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '1.5rem' , color: '#1a1a1a'}}>
                Managed LAN/WAN/Wi-Fi Solutions
              </h2>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Seamless Connectivity Across Every Corner.
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Create an integrated communication environment where devices, systems, and users stay connected efficiently without performance disruptions.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                LAN/WAN Design and Implementation
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Networks are engineered to support optimal data flow and long-term scalability. Structured layouts, efficient routing, and advanced topology planning provide a stable communication foundation that handles growing bandwidth demands and evolving enterprise requirements.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Enterprise Wi-Fi Solutions
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  High-performance Wi-Fi systems enable reliable wireless connectivity across large areas. Configurations include secure authentication controls, guest access segregation, and traffic management protocols, ensuring strong, consistent performance for employees and visitors alike.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                QoS and VLAN Configuration
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Network traffic is prioritized to deliver consistent quality for essential applications such as video conferencing, VoIP, and data transfer. VLAN segmentation enhances data security and minimizes congestion, maintaining steady throughput and optimized resource allocation.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Proactive Monitoring and Fault Resolution
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Real-time network monitoring tools identify potential issues before they impact connectivity. Automated fault detection and timely intervention reduce downtime, sustain operational efficiency, and ensure uninterrupted access for users across all connected systems.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Scalability and Multi-Location Support
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Infrastructure expands easily to accommodate new users, departments, or sites without affecting current operations. Centralized management allows unified control over multiple branches, maintaining consistent network policies and seamless collaboration across locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 5 - Trusted Across Industries */}
      <section className="service-details-section section-padding" style={{ background: '#f8f9fa' }}>
        <div className="container">
          {/* Main Title */}
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '1.5rem' , color: '#1a1a1a'}}>
                Trusted Across Industries
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Bharath VoIP's Network Services are trusted by organizations across diverse sectors - each requiring consistent uptime and strong security.
              </p>
            </div>
          </div>

          {/* Industries List */}
          <div className="row">
            <div className="col-12">
              <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Healthcare */}
                <div className="mb-4">
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1a1a1a' }}>
                    <strong style={{ fontWeight: '600' }}>Healthcare</strong> - Dependable connectivity for medical equipment, telehealth, and patient data exchange.
                  </p>
                </div>

                {/* Hospitality */}
                <div className="mb-4">
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1a1a1a' }}>
                    <strong style={{ fontWeight: '600' }}>Hospitality</strong> - Reliable Wi-Fi and LAN for guest access, booking systems, and property management.
                  </p>
                </div>

                {/* Education */}
                <div className="mb-4">
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1a1a1a' }}>
                    <strong style={{ fontWeight: '600' }}>Education</strong> - Scalable bandwidth and secure access for classrooms, online learning, and administration.
                  </p>
                </div>

                {/* Retail */}
                <div className="mb-4">
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1a1a1a' }}>
                    <strong style={{ fontWeight: '600' }}>Retail</strong> - Unified networks connecting POS systems, inventory tools, and digital signage.
                  </p>
                </div>

                {/* Corporate */}
                <div className="mb-4">
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1a1a1a' }}>
                    <strong style={{ fontWeight: '600' }}>Corporate</strong> - High-speed connectivity and remote access for collaborative, distributed teams.
                  </p>
                </div>

                {/* Industrial */}
                <div className="mb-4">
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1a1a1a' }}>
                    <strong style={{ fontWeight: '600' }}>Industrial</strong> - Stable, low-latency connections for IoT systems, sensors, and automated workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 6 - FAQ Section */}
      <section className="faq-section" style={{ 
        padding: '30px 0',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <NetworkFaqAccordion />
            </div>
          </div>

          {/* Closing Statement */}
          <div className="row mt-3">
            <div className="col-12 text-center">
              <h3 style={{ fontSize: '2.5rem', fontWeight: '400', lineHeight: '1.4', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                Connecting industries. Enabling growth.<br />Ensuring reliability.
              </h3>
              <div style={{ marginTop: '1rem' }}>
                <Link href="/contact">
                  <button style={{
                    padding: '15px 40px',
                    background: 'linear-gradient(135deg, #ff8c00 0%, #ff6f00 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Let's Connect
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
