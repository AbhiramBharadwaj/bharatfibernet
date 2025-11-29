import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import FirewallRentalFaqAccordion from "@/components/FirewallRentalFaqAccordion";
import Link from "next/link";

export const metadata = {
  title: "Firewall Rental Services | Bharat Fibernet",
  description: "Security on demand with flexible enterprise-grade firewall solutions",
};

export default function FirewallRentalServices() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Firewall Rental Services" />

      {/* Screen 1 - Hero Section */}
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
                  Security on Demand. Flexibility by Design.
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', maxWidth: '1000px', margin: '0 auto' }}>
                  Enable enterprise-grade protection without long-term commitments.
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
                Instant protection. Zero complexity. Maximum control.
              </h2>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Deploy Turnkey Security Within Minutes
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Activate firewalls instantly with preconfigured, enterprise-ready systems tailored to specific network requirements. Rapid setup eliminates downtime and ensures immediate protection for critical environments, even during temporary operations or transitional phases.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Adapt Easily with Flexible Rental Terms
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Choose from short-term or extended rental durations based on project scope and business timelines. Flexible terms make it simple to scale resources up or down, delivering complete control over cost and duration without compromising security.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Stay Protected with Continuous Updates
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Ensure firewalls are always current with managed firmware upgrades, rule adjustments, and security patching. Regular updates maintain peak performance and keep defenses aligned with the latest cybersecurity standards and threat intelligence.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Monitor and Respond in Real Time
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Enhance protection with continuous monitoring and threat detection across all firewall layers. Automated alerts and expert-led response mechanisms identify, isolate, and neutralize risks before they impact operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3 - FAQ Section */}
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
              <FirewallRentalFaqAccordion />
            </div>
          </div>

          {/* Closing Statement */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3 style={{ fontSize: '2.5rem', fontWeight: '400', lineHeight: '1.4', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Deploy Protection Instantly - No Long-Term Tie-Ins.
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: '500', marginTop: '1.5rem' }}>
                <Link href="/contact" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
                  Let's Talk!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
