import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import EventConnectivityFaqAccordion from "@/components/EventConnectivityFaqAccordion";

export const metadata = {
  title: "Event Connectivity Solutions | Bharat Fibernet",
  description: "Seamless connectivity for conferences, exhibitions, festivals, and live events",
};

export default function EventConnectivitySolutions() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Event Connectivity Solutions" />

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
                  Where seamless experiences meet seamless connectivity.
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', maxWidth: '1000px', margin: '0 auto' }}>
                  Get reliable, high-speed connectivity for conferences, exhibitions, festivals, product launches, and live shows.
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
                Instant setup. Reliable performance. Complete coverage.
              </h2>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Power Every Event with Stable High-Speed Internet
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Provide fast, secure, and scalable internet for events of any size. Our temporary network setups ensure stable performance across Wi-Fi zones, POS systems, registration counters, live-streaming equipment, and backstage operations - keeping your event always online and on schedule.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Deploy Rapid Temporary Connectivity
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Get on-site connectivity ready within hours. Our portable network infrastructure and wireless backhaul links enable quick deployment for both indoor and outdoor venues, ensuring internet availability without complex cabling or permanent installation.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Enable Secure Guest and Staff Networks
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Create dedicated, segmented networks for organizers, staff, and attendees. Advanced firewall configurations and encrypted access protect your data and maintain bandwidth priority for mission-critical event operations.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Support Live Streaming and Real-Time Applications
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Ensure smooth broadcasting and zero interruptions during live performances, hybrid events, or video conferencing sessions. Optimized routing and low-latency links make real-time streaming seamless and high-quality, even at scale.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Monitor and Manage Connectivity in Real Time
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Event networks are actively monitored by our technical team through real-time dashboards and on-site support. Any issue is identified and resolved instantly, ensuring continuous uptime throughout your event.
              </p>
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
              <EventConnectivityFaqAccordion />
            </div>
          </div>

          {/* Closing Statement */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3 style={{ fontSize: '2.5rem', fontWeight: '400', lineHeight: '1.4', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Connected events. Confident experiences.
              </h3>
              <p style={{ fontSize: '1.3rem', fontWeight: '500', marginTop: '1.5rem' }}>
                [Let's Connect]
              </p>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
