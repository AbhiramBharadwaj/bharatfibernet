import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import GamingConnectivityFaqAccordion from "@/components/GamingConnectivityFaqAccordion";

export const metadata = {
  title: "Gaming Connectivity | Bharat Fibernet",
  description: "Built for speed and tuned for real-time gaming experiences",
};

export default function GamingConnectivity() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Gaming Connectivity" />

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
                  Built for Speed.<br />Tuned for Real-Time.
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', maxWidth: '1000px', margin: '0 auto' }}>
                  Power seamless, real-time experiences with connectivity designed for ultra-low latency and precision routing.
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
                Performance engineered for every millisecond.
              </h2>
            </div>
          </div>

          {/* Features */}
          <div className="row">
            {/* Feature 1 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Optimize Routing for Lightning-Fast Response
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Leverage intelligent routing that minimizes latency and packet loss across every network hop. Optimized data paths ensure faster input-to-action response times — crucial for competitive gaming, live events, and real-time digital experiences.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Achieve Peak Stability with Dedicated Gaming Gateways
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Connect through specialized gaming gateways engineered for uninterrupted traffic flow. Dedicated channels eliminate congestion, reduce jitter, and maintain constant speed even during peak network usage, ensuring precision in every frame.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 mb-5">
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Prioritize Real-Time Traffic for Smooth Gameplay
              </h3>
              <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                Guarantee consistent gameplay and streaming quality through advanced traffic prioritization. Critical gaming data and live interaction packets are given priority routing to ensure no lag, stutter, or delay in user experience.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="col-12 mb-5">
              <div style={{ textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' , color: '#1a1a1a'}}>
                  Monitor Continuously for Zero Lag Environments
                </h3>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Maintain performance integrity through continuous network monitoring and optimization. Real-time analytics detect and correct latency spikes instantly, ensuring flawless connectivity during extended play or streaming sessions.
                </p>
              </div>
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
                Connectivity built for competitive performance - delivering speed, stability, and precision at every level of play and interaction.
              </p>
            </div>
          </div>

          {/* Capabilities List */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {/* Capability 1 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  Ultra-Low Latency Routing
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Intelligent data pathways that minimize delay for real-time gaming and streaming.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  Dedicated Gaming Gateways
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Exclusive traffic channels designed to sustain uninterrupted, high-speed performance.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  Real-Time Traffic Management
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Smart prioritization that ensures consistent gameplay and smooth video streaming.
                </p>
              </div>

              {/* Capability 4 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  Performance Analytics and Monitoring
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Continuous data insights to optimize responsiveness and reduce packet loss.
                </p>
              </div>

              {/* Capability 5 */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' , color: '#1a1a1a'}}>
                  Global Network Reach
                </h4>
                <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
                  Seamless connectivity across multiple regions for global tournaments and streaming platforms.
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
              <GamingConnectivityFaqAccordion />
            </div>
          </div>

          {/* Closing Statement */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3 style={{ fontSize: '2.5rem', fontWeight: '400', lineHeight: '1.4', marginBottom: '1rem' , color: '#1a1a1a'}}>
                Designed for speed. Built for precision. Proven in performance.
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
