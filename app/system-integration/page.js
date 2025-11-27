import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="System Integration" pageTitle="Smart Integration. Seamless Infrastructure." />
      
      {/* Screen 1: Hero Section with Form */}
      <section className="service-details-section section-padding">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="service-details-content">
                <h1 className="mb-4" style={{fontSize: '3rem', fontWeight: '700', lineHeight: '1.2'}}>
                  Smart Integration. Seamless Infrastructure.
                </h1>
                <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#555'}}>
                  Build a connected digital environment that simplifies communication, strengthens control, and prepares your business for scale.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-6">
              <div className="enquiry-form-box p-4" style={{
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <h4 className="text-center mb-4" style={{color: '#6c5ce7', fontWeight: '600'}}>
                  Enquire Now
                </h4>
                <form>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="First Name *" 
                      required 
                      style={{
                        padding: '12px 15px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email ID *" 
                      required 
                      style={{
                        padding: '12px 15px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <select 
                        className="form-select" 
                        style={{
                          maxWidth: '100px',
                          padding: '12px 10px',
                          border: '1px solid #ddd',
                          borderRadius: '5px 0 0 5px'
                        }}
                      >
                        <option value="+91">🇮🇳 91</option>
                      </select>
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="Contact Number *" 
                        required 
                        style={{
                          padding: '12px 15px',
                          border: '1px solid #ddd',
                          borderLeft: 'none',
                          borderRadius: '0 5px 5px 0'
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Organization" 
                      style={{
                        padding: '12px 15px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn w-100" 
                    style={{
                      background: 'linear-gradient(135deg, #ff6b9d 0%, #ff5e8a 100%)',
                      color: '#fff',
                      padding: '15px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      border: 'none',
                      borderRadius: '5px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
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

      {/* Screen 2: Secure & Scalable Digital Network Design */}
      <section className="service-content-section section-padding" style={{
        backgroundImage: 'url("/assets/img/background/pattern-12.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          {/* Main Title */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h2 className="mb-4" style={{fontSize: '2.5rem', fontWeight: '700', color: '#fd9330'}}>
                Secure & Scalable Digital Network Design and Implementation
              </h2>
              <h4 className="mb-4" style={{fontWeight: '700', fontSize: '1.3rem', color: '#79ff5b'}}>
                The Backbone of Modern Enterprises
              </h4>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto'}}>
                Design, deploy, and manage high-performance enterprise networks built for reliability and long-term growth.
              </p>
            </div>
          </div>

          {/* Built on Trusted Security Protocols */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7">
              <div className="content-block mb-5">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem', color: '#fd9330'}}>
                  Built on Trusted Security Protocols
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
                  Protect critical data and prevent unauthorized access with industry-standard frameworks such as <strong>Radius, AAA, and TACACS</strong>, which establish secure authentication and access control mechanisms. These protocols ensure only authorized personnel can access network resources, maintaining consistent security, regulatory compliance, and data integrity across all connected systems.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <img src="/assets/img/service/01.jpg" alt="Security Protocols" style={{width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
            </div>
          </div>

          {/* Unified Control and Centralized Management */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <div className="content-block mb-5">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem'}}>
                  Unified Control and Centralized Management
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto'}}>
                  Manage all network operations efficiently through a single, centralized interface that provides real-time visibility into performance, device status, and fault detection. This unified control system simplifies daily administration, streamlines maintenance, and enables faster response to issues, ensuring smooth and reliable network operations.
                </p>
              </div>
            </div>
          </div>

          {/* Scalable Infrastructure That Grows With Demand */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-5">
              <img src="/assets/img/service/02.jpg" alt="Scalable Infrastructure" style={{width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
            </div>
            <div className="col-lg-7">
              <div className="content-block mb-5">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem', color: '#79ff5b'}}>
                  Scalable Infrastructure That Grows With Demand
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
                  Easily expand network capacity as organizational needs evolve without requiring costly overhauls or downtime. A modular, scalable architecture supports seamless addition of new devices, users, and locations, maintaining consistent performance and flexibility as the business environment grows and diversifies.
                </p>
              </div>
            </div>
          </div>

          {/* ROI-Optimized Deployment */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <div className="content-block mb-5">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem'}}>
                  ROI-Optimized Deployment
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto'}}>
                  Achieve maximum network performance through efficient resource utilization, smart bandwidth allocation, and energy-conscious deployment. The approach ensures measurable returns on infrastructure investments by reducing waste, lowering operational costs, and optimizing long-term network efficiency and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Zero-Disruption Setup and Migration */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7">
              <div className="content-block mb-5">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem', color: '#fd9330'}}>
                  Zero-Disruption Setup and Migration
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
                  Implement or upgrade networks without interrupting day-to-day operations through structured, downtime-free deployment processes. System transitions and migrations are executed seamlessly, maintaining operational continuity and minimizing user impact during the upgrade phase.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <img src="/assets/img/service/03.jpg" alt="Zero Disruption" style={{width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
            </div>
          </div>

          {/* 24×7 Monitoring and Proactive Support */}
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="content-block">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem'}}>
                  24×7 Monitoring and Proactive Support
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto'}}>
                  Ensure continuous uptime with around-the-clock network monitoring and automated fault detection that identifies and resolves issues before they escalate. Real-time insights and proactive response keep systems stable, minimize downtime, and sustain optimal performance throughout all hours of operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3: Managed IT Services */}
      <section className="managed-it-section section-padding">
        <div className="container">
          {/* Main Title */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h2 className="mb-4" style={{fontSize: '2.5rem', fontWeight: '700'}}>
                Managed IT Services
              </h2>
              <h4 className="mb-4" style={{fontWeight: '700', fontSize: '1.3rem'}}>
                Your IT, Optimized — Proactive. Predictive. Protected.
              </h4>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto'}}>
                Constant monitoring, predictive maintenance, and expert support combine to create an environment that runs efficiently, adapts to changing needs, and supports uninterrupted business operations.
              </p>
            </div>
          </div>

          {/* Real-Time Monitoring That Prevents Problems */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="content-block mb-5">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem'}}>
                  Real-Time Monitoring That Prevents Problems
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
                  Continuous monitoring tools track network and system performance in real time to detect irregularities before they cause downtime. This proactive approach enables immediate resolution of potential issues, maintaining system stability and consistent productivity across all operational environments.
                </p>
              </div>
            </div>
          </div>

          {/* Predictive Maintenance for Maximum Uptime */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <div className="content-block mb-5">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem'}}>
                  Predictive Maintenance for Maximum Uptime
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto'}}>
                  Intelligent analytics identify early warning signs of hardware or software issues, enabling preventive maintenance rather than reactive repairs. This ensures critical systems remain available, reduces emergency interventions, and helps maintain continuous uptime for essential business operations.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance and Security at Every Layer */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="content-block mb-5">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem'}}>
                  Compliance and Security at Every Layer
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
                  Integrated security management maintains compliance with enterprise standards and industry regulations. From access control to data protection, each layer is reinforced to reduce vulnerabilities and safeguard sensitive information, creating a trusted and compliant IT ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Scalability Without Downtime */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <div className="content-block mb-5">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem'}}>
                  Scalability Without Downtime
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto'}}>
                  Infrastructure scales seamlessly with organizational growth, allowing additional capacity, users, or workloads without interrupting ongoing operations. The flexible architecture adapts easily to evolving business demands, supporting expansion without performance degradation or service disruption.
                </p>
              </div>
            </div>
          </div>

          {/* Dedicated 24×7 Expert Support */}
          <div className="row">
            <div className="col-lg-12">
              <div className="content-block">
                <h3 className="mb-4" style={{fontWeight: '700', fontSize: '1.5rem'}}>
                  Dedicated 24×7 Expert Support
                </h3>
                <p style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
                  Round-the-clock technical assistance ensures issues are addressed promptly by certified professionals. Continuous monitoring and a responsive support framework guarantee consistent service quality, minimized downtime, and reliable access to help whenever required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 4: Bharath VoIP IT Infrastructure Capabilities */}
      <section className="capabilities-section section-padding" style={{
        backgroundImage: 'url("/assets/img/background/pattern-13.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          {/* Main Title */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h2 className="mb-4" style={{fontSize: '2.5rem', fontWeight: '700', color: '#fd9330'}}>
                Bharath VoIP IT Infrastructure Capabilities
              </h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto'}}>
                Our System Integration and Managed IT Services deliver advanced capabilities to help businesses operate seamlessly, securely, and efficiently.
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="row g-4">
            {/* Advanced Network Security */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#fd9330', background: '#fff3e6', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-lock"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#fd9330'}}>
                    Advanced Network Security
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Built on frameworks like Radius, AAA, and TACACS to ensure data protection, authentication, and controlled access across all network layers.
                  </p>
                </div>
              </div>
            </div>

            {/* Centralized Network Management */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#79ff5b', background: '#f0ffe8', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-globe"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#79ff5b'}}>
                    Centralized Network Management
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Monitor and control all systems through a unified interface, simplifying administration and enabling faster troubleshooting.
                  </p>
                </div>
              </div>
            </div>

            {/* Scalable Architecture */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#fd9330', background: '#fff3e6', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-cogs"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#fd9330'}}>
                    Scalable Architecture
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Expand seamlessly by adding new users, devices, or branches without downtime or performance disruption.
                  </p>
                </div>
              </div>
            </div>

            {/* Intelligent Resource Utilization */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#79ff5b', background: '#f0ffe8', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-lightbulb"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#79ff5b'}}>
                    Intelligent Resource Utilization
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Optimize bandwidth, storage, and power usage to achieve measurable returns on infrastructure investments.
                  </p>
                </div>
              </div>
            </div>

            {/* Zero-Disruption Deployment */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#fd9330', background: '#fff3e6', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-sync-alt"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#fd9330'}}>
                    Zero-Disruption Deployment
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Implement or migrate networks smoothly while maintaining ongoing operations without interruptions.
                  </p>
                </div>
              </div>
            </div>

            {/* 24×7 Monitoring & Real-Time Alerts */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#79ff5b', background: '#f0ffe8', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-clock"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#79ff5b'}}>
                    24×7 Monitoring & Real-Time Alerts
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Continuous tracking of performance metrics to detect anomalies and resolve potential issues before they affect operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Predictive Maintenance */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#fd9330', background: '#fff3e6', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-search"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#fd9330'}}>
                    Predictive Maintenance
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Analyze system data to identify early warning signs and conduct preventive maintenance, improving uptime and reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance-Driven Infrastructure */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#79ff5b', background: '#f0ffe8', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-shield-alt"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#79ff5b'}}>
                    Compliance-Driven Infrastructure
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Maintain regulatory compliance and data integrity with built-in security and audit-ready management tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Analytics Dashboard */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#fd9330', background: '#fff3e6', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-chart-bar"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#fd9330'}}>
                    Performance Analytics Dashboard
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Access real-time insights into uptime, network health, and usage trends for informed decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* Dedicated Technical Assistance */}
            <div className="col-lg-6">
              <div className="capability-item d-flex align-items-start mb-4">
                <div className="icon me-3" style={{fontSize: '2rem', color: '#79ff5b', background: '#f0ffe8', padding: '15px', borderRadius: '10px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fas fa-user-cog"></i></div>
                <div>
                  <h4 className="mb-3" style={{fontWeight: '700', fontSize: '1.2rem', color: '#79ff5b'}}>
                    Dedicated Technical Assistance
                  </h4>
                  <p style={{fontSize: '1rem', lineHeight: '1.7', color: '#555'}}>
                    Round-the-clock expert support from certified engineers to ensure quick response and consistent system availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 5: Frequently Asked Questions */}
      <section className="faq-section section-padding">
        <div className="container">
          {/* Main Title */}
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h2 className="mb-5" style={{fontSize: '2.5rem', fontWeight: '700'}}>
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* Screen 6: CTA Section */}
      <section className="cta-final-section section-padding" style={{
        background: 'linear-gradient(135deg, #fd9330 0%, #79ff5b 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4" style={{fontSize: '2.5rem', fontWeight: '700', color: '#fff'}}>
                Ready to Do Your Best Work?
              </h2>
              <p className="mb-5" style={{fontSize: '1.2rem', color: '#fff'}}>
                Let's Get You Started.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn" style={{
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  background: '#fff',
                  color: '#fd9330',
                  border: 'none',
                  borderRadius: '10px',
                  display: 'inline-block'
                }}>
                  Get in Touch
                  <i className="far fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </NextLayout>
  );
};

export default page;
