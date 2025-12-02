import Link from "next/link";

const Pricing = () => {
  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Pricing Package
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Popular Pricing For IT Consulting
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Regular Plan</h3>
                <p>For Small Businesses</p>
              </div>
              <ul className="pricing-list">
                <li>IT Consulting</li>
                <li>Digital Product Design</li>
                <li>Machine Learning</li>
                <li className="style-2">Automation templates</li>
                <li className="style-2">Great Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  $19 <span>/month</span>
                </h2>
                <p>For Small Businesses</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Choose Package
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items active">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape-2.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Business Plan</h3>
                <p>For Small Businesses</p>
              </div>
              <ul className="pricing-list">
                <li>IT Consulting</li>
                <li>Digital Product Design</li>
                <li>Machine Learning</li>
                <li>Automation templates</li>
                <li>Great Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  $53 <span>/month</span>
                </h2>
                <p>For Small Businesses</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Choose Package
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>
              <div className="pricing-header">
                <h3>Professional Plan</h3>
                <p>For Small Businesses</p>
              </div>
              <ul className="pricing-list">
                <li>IT Consulting</li>
                <li>Digital Product Design</li>
                <li>Machine Learning</li>
                <li className="style-2">Automation templates</li>
                <li className="style-2">Great Customer Support</li>
              </ul>
              <div className="pricing-bottom">
                <h2>
                  $99 <span>/month</span>
                </h2>
                <p>For Small Businesses</p>
              </div>
              <div className="pricing-button">
                <Link href="contact" className="theme-btn style-transparent">
                  Choose Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;

export const Pricing2 = ({
  priceingClass = "pricing-section-3",
  paddingTop = "0",
}) => {
  const businessPlans = [
    {
      name: "Express 4000",
      price: "₹ 4000",
      downloadSpeed: "500 Mbps",
      uploadSpeed: "500 Mbps",
      fupLimit: "5 TB",
      speedPostFup: "10 Mbps",
      delay: ".3s"
    },
    {
      name: "Express 6000",
      price: "₹ 6000",
      downloadSpeed: "1 Gbps",
      uploadSpeed: "1 Gbps",
      fupLimit: "6 TB",
      speedPostFup: "12 Mbps",
      delay: ".4s"
    },
    {
      name: "Express 8000",
      price: "₹ 8000",
      downloadSpeed: "1 Gbps",
      uploadSpeed: "1 Gbps",
      fupLimit: "8 TB",
      speedPostFup: "12 Mbps",
      delay: ".5s"
    },
    {
      name: "Express 10000",
      price: "₹ 10000",
      downloadSpeed: "1 Gbps",
      uploadSpeed: "1 Gbps",
      fupLimit: "10 TB",
      speedPostFup: "15 Mbps",
      delay: ".6s"
    },
    {
      name: "Express 12000",
      price: "₹ 12000",
      downloadSpeed: "1 Gbps",
      uploadSpeed: "1 Gbps",
      fupLimit: "15 TB",
      speedPostFup: "15 Mbps",
      delay: ".7s"
    },
    {
      name: "Express 15000",
      price: "₹ 15000",
      downloadSpeed: "1 Gbps",
      uploadSpeed: "1 Gbps",
      fupLimit: "20 TB",
      speedPostFup: "15 Mbps",
      delay: ".8s"
    },
    {
      name: "Express 20000",
      price: "₹ 20000",
      downloadSpeed: "1 Gbps",
      uploadSpeed: "1 Gbps",
      fupLimit: "30 TB",
      speedPostFup: "15 Mbps",
      delay: ".9s"
    }
  ];

  return (
    <section
      className={`fix section-padding pt-${paddingTop} ${priceingClass}`}
      id="pricing"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sec-sub-text-2 wow fadeInUp">Business SME Plans</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: '#ffffff' }}>
            Tailored for You - Find Your Ideal Plan
          </h2>
        </div>
        <div className="row justify-content-center">
          {businessPlans.map((plan, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp mb-4"
              data-wow-delay={plan.delay}
            >
              <div 
                className="pricing-card-items-2"
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '20px',
                  border: '2px solid #333',
                  padding: '30px 20px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div className="pricing-header text-center mb-4">
                    <div 
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)',
                        margin: '0 auto 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <i className="fas fa-globe" style={{ fontSize: '36px', color: '#fff' }} />
                    </div>
                    <h3 style={{ color: '#ffffff', fontSize: '24px', marginBottom: '10px' }}>
                      {plan.name}
                    </h3>
                    <h2 style={{ 
                      color: '#ff8c42', 
                      fontSize: '32px', 
                      fontWeight: 'bold',
                      margin: '10px 0'
                    }}>
                      {plan.price} <span style={{ fontSize: '16px', color: '#999' }}>/Month</span>
                    </h2>
                  </div>
                  
                  <ul className="price-list" style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <li style={{ color: '#fff', marginBottom: '12px' }}>
                      <i className="far fa-check" style={{ color: '#ff8c42', marginRight: '10px' }} />
                      <strong>{plan.downloadSpeed}</strong> Download Speed
                    </li>
                    <li style={{ color: '#fff', marginBottom: '12px' }}>
                      <i className="far fa-check" style={{ color: '#ff8c42', marginRight: '10px' }} />
                      <strong>{plan.uploadSpeed}</strong> Upload Speed
                    </li>
                    <li style={{ color: '#fff', marginBottom: '12px' }}>
                      <i className="far fa-check" style={{ color: '#ff8c42', marginRight: '10px' }} />
                      <strong>{plan.fupLimit}</strong> FUP Limit
                    </li>
                    <li style={{ color: '#fff', marginBottom: '12px' }}>
                      <i className="far fa-check" style={{ color: '#ff8c42', marginRight: '10px' }} />
                      <strong>{plan.speedPostFup}</strong> Speed Post FUP
                    </li>
                  </ul>
                </div>
                
                <div className="pricing-button text-center" style={{ marginTop: '20px' }}>
                  <Link 
                    href="contact" 
                    className="theme-btn"
                    style={{
                      background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)',
                      color: '#fff',
                      padding: '12px 30px',
                      borderRadius: '25px',
                      border: 'none',
                      display: 'inline-block',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
