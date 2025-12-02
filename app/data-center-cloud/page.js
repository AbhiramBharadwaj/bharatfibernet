import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import DataCenterFaqAccordion from "@/components/DataCenterFaqAccordion";

export const metadata = {
  title: "Data Center & Cloud | Bharat Fibernet",
  description: "Resilient infrastructure and smarter cloud solutions for enterprise operations",
};

export default function DataCenterCloud() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Data Center & Cloud" />

      {/* Hero Section with Form */}
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
                  Resilient Infrastructure. Smarter Cloud.
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', marginBottom: '2rem' }}>
                  Designed for performance and reliability, these solutions ensure data remains accessible, protected, and optimized for high-demand enterprise operations.
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

      {/* Screen 2 - Server Colocation */}
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
                Server Colocation
              </h2>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Host with Confidence. Operate Without Downtime.
              </h4>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Build Your Infrastructure for Continuous Availability
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Establish a reliable foundation for enterprise workloads within Tier-III colocation facilities designed for uninterrupted operation. Redundant power feeds and precision cooling systems sustain 99.99% uptime, maintaining stable performance for mission-critical applications. This setup ensures business continuity even in the event of power or network failures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Protect Critical Data and Physical Assets
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Secure sensitive equipment with multi-layered physical and biometric access controls. Surveillance systems, restricted zones, and real-time monitoring protect infrastructure from unauthorized entry or tampering, ensuring full compliance with data security standards and organizational policies.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Maintain Systems with 24×7 Monitoring and Remote Support
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Ensure uninterrupted performance through round-the-clock network monitoring and remote hands assistance. Proactive detection and quick issue resolution minimize downtime, while continuous oversight maintains operational efficiency across all hosted systems.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Empower Growth with Scalable Colocation Options
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Expand infrastructure capacity effortlessly with customizable rack configurations ranging from 1U to full cabinets. Flexible resource allocation supports evolving workloads and enables cost-effective scaling without compromising reliability or security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3 - Hybrid Cloud Platform */}
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
                Hybrid Cloud Platform
              </h2>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Agility of Cloud. Control of On-Premise.
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Unify flexibility and governance with a hybrid platform that adapts instantly to workload needs while maintaining full visibility, control, and compliance across every environment.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Leverage Elastic Scalability to Match Every Demand
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Scale computing resources up or down automatically based on real-time demand. Dynamic elasticity ensures uninterrupted performance during workload spikes while optimizing resource consumption during low usage, delivering both agility and cost efficiency.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Unify Operations Through a Single Control Dashboard
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Manage public and private environments from one centralized interface. Unified visibility across applications, data, and infrastructure simplifies monitoring, enhances governance, and ensures consistent policy enforcement across all cloud layers.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Optimize Costs with Usage-Based Billing
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Align IT spending directly with utilization through a pay-as-you-go model. Resource tracking and automated billing provide transparency, enabling organizations to maximize efficiency and eliminate unused capacity without compromising performance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Integrate Seamlessly Across Platforms
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Enable compatibility between existing on-premise systems and multiple cloud providers for smoother operations. Cross-platform integration ensures applications and data move securely and efficiently across environments, supporting hybrid flexibility without complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 4 - Managed Cloud Services */}
      <section className="service-details-section section-padding">
        <div className="container">
          {/* Main Title */}
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '1.5rem' , color: '#1a1a1a'}}>
                Managed Cloud Services
              </h2>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Cloud Without Complexity.
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Simplify multi-cloud management with intelligent automation and continuous optimization that keeps workloads stable, compliant, and cost-efficient across platforms like AWS, Azure, GCP, and Oracle.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Streamline Migration with Zero Downtime
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Move workloads, applications, and data to the cloud without interrupting daily operations. Migration frameworks ensure business continuity, maintain data integrity, and allow instant access to systems once transitioned, eliminating the risks of downtime during deployment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Design Architecture Aligned to Business Goals
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Structure cloud environments based on specific performance, security, and scalability objectives. Each configuration supports the unique operational needs of the organization, delivering a balanced ecosystem that enhances efficiency and long-term reliability.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Automate Scaling and Optimize Costs
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Enable systems to adjust computing resources dynamically through automation. Usage tracking and intelligent allocation minimize idle capacity, reduce costs, and ensure that every resource is fully utilized for maximum return on cloud investment.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Monitor Performance with Proactive Support
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Maintain cloud health and availability with real-time monitoring tools and continuous technical oversight. Proactive response mechanisms detect anomalies before they cause disruption, ensuring stable operations and consistent service delivery across environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 5 - FAQ Section */}
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
              <DataCenterFaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
