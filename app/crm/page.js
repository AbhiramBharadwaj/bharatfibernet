import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import CrmFaqAccordion from "@/components/CrmFaqAccordion";

export const metadata = {
  title: "CRM | Bharat Fibernet",
  description: "Simplify operations and strengthen customer relationships with unified CRM",
};

export default function CRM() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="CRM" />

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
                  Simplify Operations. Strengthen Relationships.
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', maxWidth: '1000px', margin: '0 auto' }}>
                  Unify sales, marketing, support, and operations through a single platform that delivers visibility, consistency, and control across every customer touchpoint.
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
                Centralized. Connected. Customer-Driven.
              </h2>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Streamline Sales and Lead Management
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Manage leads, deals, and customer interactions in one integrated sales pipeline. Real-time tracking of opportunities ensures faster follow-ups, accurate forecasting, and improved conversion rates across sales teams.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Enhance Engagement with Multi-Channel Communication
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Connect with customers through email, SMS, WhatsApp, and more - all from within the CRM. Unified communication ensures no opportunity is missed, enabling faster responses and consistent customer engagement across all channels.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Automate Campaigns and Marketing Workflow
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Design, execute, and track marketing campaigns effortlessly with built-in automation tools. Real-time analytics measure performance and ROI, empowering teams to personalize communication and drive higher engagement at scale.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Resolve Issues with an Integrated Support Helpdesk
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Centralize customer support with a helpdesk that manages tickets, tracks service-level agreements, and ensures quick resolution. Unified access to interaction history improves response accuracy and builds stronger customer trust.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Manage Inventory and Invoicing with Accuracy
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Oversee inventory levels, billing, and invoicing from within the same system. Integrated modules reduce errors, automate routine tasks, and maintain consistency between sales, finance, and logistics.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Enable Access Anytime, Anywhere
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Access data securely through mobile and cloud-based platforms for uninterrupted productivity. Teams can collaborate on the move, manage clients remotely, and maintain business continuity from any location.
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
              <CrmFaqAccordion />
            </div>
          </div>

          {/* Closing Statement */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3 style={{ fontSize: '2.5rem', fontWeight: '400', lineHeight: '1.4', marginBottom: '1rem' , color: '#1a1a1a'}}>
                One platform. Limitless possibilities.
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
