import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import CybersecurityFaqAccordion from "@/components/CybersecurityFaqAccordion";

export const metadata = {
  title: "Cybersecurity Services | Bharat Fibernet",
  description: "Defend, detect, and deliver confidence with comprehensive cybersecurity solutions",
};

export default function CybersecurityServices() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Cybersecurity Services" />

      {/* Screen 1 - Hero Section */}
      <section className="about-section section-padding" style={{ 
        backgroundImage: 'url("/assets/img/background/pattern-11.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-content text-center">
                <h2 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: '500', lineHeight: '1.2', color: '#fd9330' }}>
                  Defend. Detect. Deliver Confidence.
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '1000px', margin: '0 auto' }}>
                  Safeguard digital infrastructure with layered cybersecurity frameworks that protect data, prevent breaches, and ensure uninterrupted operations. Each solution is designed to anticipate threats, mitigate risks, and maintain compliance across complex IT environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 2 - Intelligent Protection */}
      <section className="service-details-section section-padding">
        <div className="container">
          {/* Main Title */}
          <div className="row">
            <div className="col-12 text-center mb-5">
                <h2 style={{ fontSize: '2.5rem', fontWeight: '400', lineHeight: '1.3', color: '#79ff5b' }}>
                Intelligent protection for an always-connected world.
              </h2>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: '#fd9330' }}>
                Strengthen Defenses with Comprehensive Risk Assessments
              </h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8' }}>
                Identify vulnerabilities across networks, applications, and endpoints through continuous assessment and analysis. Detailed insights enable targeted action plans that fortify security posture and prevent potential exploits before they occur.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: '#79ff5b' }}>
                  Design Security Architecture Built for Resilience
                </h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8' }}>
                  Implement a structured, multi-layered security model that combines firewalls, intrusion detection, encryption, and access controls. Architecture planning ensures every component—from edge devices to core systems—is protected under a unified security strategy.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: '#fd9330' }}>
                Enhance Visibility Through Managed SOC Operations
              </h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8' }}>
                Maintain continuous threat surveillance with 24×7 Security Operations Center (SOC) monitoring. Real-time detection and response tools identify anomalies instantly, providing immediate remediation and preventing disruption to business-critical services.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: '#79ff5b' }}>
                  Protect Devices and Networks with Endpoint Security
                </h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8' }}>
                  Ensure every connected device operates within a protected framework. Endpoint monitoring, anti-malware controls, and automated patching reduce vulnerabilities and safeguard data integrity across distributed and hybrid environments.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: '#fd9330' }}>
                Secure Applications Through Continuous Testing and Orchestration
              </h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8' }}>
                Integrate security at every stage of application deployment. Continuous testing, vulnerability scanning, and automated policy enforcement minimize exposure to attacks, ensuring compliance and protection for both internal and client-facing applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3 - Key Capabilities */}
      <section className="service-details-section section-padding" style={{ 
        backgroundImage: 'url("/assets/img/background/pattern-14.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          {/* Main Title */}
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '1.5rem', color: '#fd9330' }}>
                Bharath VoIP Key Capabilities
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '900px', margin: '0 auto' }}>
                Stay ahead of evolving threats with intelligent, always-on protection built for modern enterprise networks.
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="row">
            {/* Capability 1 */}
            <div className="col-12 mb-4">
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem', marginTop: '0.2rem', color: '#fd9330', background: '#fff3e6', padding: '12px', borderRadius: '8px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-shield-alt"></i></div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem', color: '#fd9330' }}>
                    Comprehensive Threat Defense
                  </h4>
                  <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', marginBottom: 0 }}>
                    Layered security across networks, endpoints, and applications to prevent breaches and protect data in real time.
                  </p>
                </div>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="col-12 mb-4">
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem', marginTop: '0.2rem', color: '#79ff5b', background: '#f0ffe8', padding: '12px', borderRadius: '8px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-cogs"></i></div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem', color: '#79ff5b' }}>
                    24×7 Monitoring and Rapid Response
                  </h4>
                  <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', marginBottom: 0 }}>
                    Continuous SOC surveillance and instant incident response to minimize downtime and ensure operational continuity.
                  </p>
                </div>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="col-12 mb-4">
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem', marginTop: '0.2rem', color: '#fd9330', background: '#fff3e6', padding: '12px', borderRadius: '8px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-lock"></i></div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem', color: '#fd9330' }}>
                    Data Encryption and Compliance Control
                  </h4>
                  <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', marginBottom: 0 }}>
                    Advanced encryption standards with built-in compliance for ISO 27001, GDPR, and enterprise security policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Capability 4 */}
            <div className="col-12 mb-4">
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem', marginTop: '0.2rem', color: '#79ff5b', background: '#f0ffe8', padding: '12px', borderRadius: '8px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-laptop"></i></div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem', color: '#79ff5b' }}>
                    Endpoint Detection and Device Security
                  </h4>
                  <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', marginBottom: 0 }}>
                    Automated threat detection and isolation for all connected systems, ensuring protection beyond the network perimeter.
                  </p>
                </div>
              </div>
            </div>

            {/* Capability 5 */}
            <div className="col-12 mb-4">
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem', marginTop: '0.2rem', color: '#fd9330', background: '#fff3e6', padding: '12px', borderRadius: '8px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-cloud"></i></div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem', color: '#fd9330' }}>
                    Secure Cloud and Hybrid Environments
                  </h4>
                  <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.8', marginBottom: 0 }}>
                    Integrated protection for cloud and hybrid infrastructures with unified visibility and consistent access control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 4 - FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '2rem' }}>
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <CybersecurityFaqAccordion />
            </div>
          </div>

          {/* Closing Statement */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3 style={{ fontSize: '2.5rem', fontWeight: '400', lineHeight: '1.4', marginBottom: '1rem' }}>
                Advanced protection. Continuous visibility.<br />Trusted assurance.
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: '500', marginTop: '1.5rem' }}>
                Let's Talk
              </p>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
