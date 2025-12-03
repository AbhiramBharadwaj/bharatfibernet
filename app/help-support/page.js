'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  const supportCategories = [
    {
      icon: "fa-wifi",
      title: "Internet Connection",
      description: "Troubleshoot connectivity issues, slow speeds, or network problems",
      link: "/internet-connection",
      color: "#fd9330"
    },
    {
      icon: "fa-credit-card",
      title: "Billing & Payments",
      description: "View invoices, payment methods, and billing history",
      link: "/billing-payments",
      color: "#28a745"
    },
    {
      icon: "fa-user-lock",
      title: "Account Access Issues",
      description: "Reset password, update account details, or recover access",
      link: "/account-access-issues",
      color: "#fd9330"
    },
    {
      icon: "fa-truck",
      title: "Relocation & Disconnection",
      description: "Move your service or request disconnection",
      link: "/relocation-disconnection",
      color: "#28a745"
    },
    {
      icon: "fa-router",
      title: "Router Setup & Login",
      description: "Configure your router, change WiFi password, or access settings",
      link: "/router-setup-login",
      color: "#fd9330"
    }
  ];

  return (
    <NextLayout header={1}>
      <Breadcrumb pageName="Help & Support" />
      
      <section className="service-details-section section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                color: '#1a1a1a'
              }}>
                How Can We Help You?
              </h1>
              <p style={{ 
                fontSize: '1.3rem', 
                color: '#666',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Your connection matters to us and we're here around the clock to keep it steady.
              </p>
            </div>
          </div>

          {/* Support Categories */}
          <div className="row g-4 mb-5">
            {supportCategories.map((category, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={category.link} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      background: '#fff',
                      padding: '2.5rem',
                      borderRadius: '15px',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      border: '2px solid transparent',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.12)';
                      e.currentTarget.style.borderColor = category.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    <div style={{ 
                      width: '70px', 
                      height: '70px', 
                      background: `${category.color}15`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}>
                      <i className={`fas ${category.icon}`} style={{ 
                        fontSize: '2rem', 
                        color: category.color 
                      }}></i>
                    </div>
                    <h4 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: '600', 
                      marginBottom: '1rem',
                      color: '#1a1a1a'
                    }}>
                      {category.title}
                    </h4>
                    <p style={{ 
                      fontSize: '1rem', 
                      color: '#666',
                      marginBottom: '0',
                      lineHeight: '1.6'
                    }}>
                      {category.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Screen 2: Clickable Category Cards */}
          <div className="row mt-5 mb-5">
            <div className="col-12 text-center mb-4">
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                color: '#1a1a1a'
              }}>
                Choose Your Issue, And We'll Get It Sorted.
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#666'
              }}>
                Pick a category below to get the right support.
              </p>
            </div>
            
            <div className="col-12">
              <div className="row g-3">
                {/* Internet Connection */}
                <div className="col-lg-2dot4 col-md-6">
                  <Link href="/internet-connection" style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        background: '#fff',
                        padding: '2rem 1.5rem',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e0e0e0',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                        e.currentTarget.style.borderColor = '#fd9330';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
                        e.currentTarget.style.borderColor = '#e0e0e0';
                      }}
                    >
                      <h5 style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: '700', 
                        marginBottom: '1rem',
                        color: '#1a1a1a'
                      }}>
                        Internet Connection
                      </h5>
                      <p style={{ 
                        fontSize: '0.95rem', 
                        color: '#666',
                        marginBottom: '0',
                        lineHeight: '1.5'
                      }}>
                        Slow speed, frequent drops, or no internet at all.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Billing & Payments */}
                <div className="col-lg-2dot4 col-md-6">
                  <Link href="/billing-payments" style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        background: '#fff',
                        padding: '2rem 1.5rem',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e0e0e0',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                        e.currentTarget.style.borderColor = '#28a745';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
                        e.currentTarget.style.borderColor = '#e0e0e0';
                      }}
                    >
                      <h5 style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: '700', 
                        marginBottom: '1rem',
                        color: '#1a1a1a'
                      }}>
                        Billing & Payments
                      </h5>
                      <p style={{ 
                        fontSize: '0.95rem', 
                        color: '#666',
                        marginBottom: '0',
                        lineHeight: '1.5'
                      }}>
                        Need help understanding or paying your bill?
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Router Setup & Login */}
                <div className="col-lg-2dot4 col-md-6">
                  <Link href="/router-setup-login" style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        background: '#fff',
                        padding: '2rem 1.5rem',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e0e0e0',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                        e.currentTarget.style.borderColor = '#fd9330';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
                        e.currentTarget.style.borderColor = '#e0e0e0';
                      }}
                    >
                      <h5 style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: '700', 
                        marginBottom: '1rem',
                        color: '#1a1a1a'
                      }}>
                        Router Setup & Login
                      </h5>
                      <p style={{ 
                        fontSize: '0.95rem', 
                        color: '#666',
                        marginBottom: '0',
                        lineHeight: '1.5'
                      }}>
                        Can't connect or log in? Let's get your router sorted.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Account Access */}
                <div className="col-lg-2dot4 col-md-6">
                  <Link href="/account-access-issues" style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        background: '#fff',
                        padding: '2rem 1.5rem',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e0e0e0',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                        e.currentTarget.style.borderColor = '#28a745';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
                        e.currentTarget.style.borderColor = '#e0e0e0';
                      }}
                    >
                      <h5 style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: '700', 
                        marginBottom: '1rem',
                        color: '#1a1a1a'
                      }}>
                        Account Access
                      </h5>
                      <p style={{ 
                        fontSize: '0.95rem', 
                        color: '#666',
                        marginBottom: '0',
                        lineHeight: '1.5'
                      }}>
                        Having trouble signing in to your customer portal?
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Relocation / Disconnection */}
                <div className="col-lg-2dot4 col-md-6">
                  <Link href="/relocation-disconnection" style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        background: '#fff',
                        padding: '2rem 1.5rem',
                        borderRadius: '10px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e0e0e0',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                        e.currentTarget.style.borderColor = '#fd9330';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
                        e.currentTarget.style.borderColor = '#e0e0e0';
                      }}
                    >
                      <h5 style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: '700', 
                        marginBottom: '1rem',
                        color: '#1a1a1a'
                      }}>
                        Relocation / Disconnection
                      </h5>
                      <p style={{ 
                        fontSize: '0.95rem', 
                        color: '#666',
                        marginBottom: '0',
                        lineHeight: '1.5'
                      }}>
                        Moving home or want to close your connection? Let's make it easy.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 4: Additional Support Form */}
          <div className="row mt-4 mb-3">
            <div className="col-12 text-center mb-3">
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                marginBottom: '0.3rem',
                color: '#1a1a1a'
              }}>
                Additional Support
              </h2>
              <p style={{ 
                fontSize: '1.05rem', 
                color: '#666'
              }}>
                Get your questions answered for plan recommendations, network solutions, and more.
              </p>
            </div>

            <div className="col-lg-8 offset-lg-2">
              <div style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '15px',
                border: '2px solid #ddd',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
              }}>
                <form>
                  {/* Business Category */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <label style={{ 
                      fontSize: '1rem', 
                      fontWeight: '500', 
                      color: '#333',
                      marginBottom: '0.3rem',
                      display: 'block'
                    }}>
                      Business Category <span style={{ color: 'red' }}>*</span>
                    </label>
                    <select style={{
                      width: '100%',
                      padding: '0.5rem',
                      fontSize: '1rem',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      background: '#fff',
                      appearance: 'auto'
                    }}>
                      <option>Please select</option>
                      <option>Home User</option>
                      <option>Small Business</option>
                      <option>Medium Enterprise</option>
                      <option>Large Enterprise</option>
                      <option>Government</option>
                      <option>Education</option>
                      <option>Healthcare</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Your Query */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <label style={{ 
                      fontSize: '1rem', 
                      fontWeight: '500', 
                      color: '#333',
                      marginBottom: '0.3rem',
                      display: 'block'
                    }}>
                      Your Query <span style={{ color: 'red' }}>*</span>
                    </label>
                    <textarea 
                      placeholder="What is your query?"
                      rows="3"
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>

                  {/* Your Business */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <label style={{ 
                      fontSize: '1rem', 
                      fontWeight: '500', 
                      color: '#333',
                      marginBottom: '0.3rem',
                      display: 'block'
                    }}>
                      Your Business <span style={{ color: 'red' }}>*</span>
                    </label>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="radio" name="business" value="enterprise" />
                        <span>Enterprise(s)</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input type="radio" name="business" value="individual" />
                        <span>Individual(s)</span>
                      </label>
                    </div>
                  </div>

                  {/* Company Name */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <label style={{ 
                      fontSize: '1rem', 
                      fontWeight: '500', 
                      color: '#333',
                      marginBottom: '0.3rem',
                      display: 'block'
                    }}>
                      Company Name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input 
                      type="text"
                      placeholder="Please enter your company name here"
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    />
                  </div>

                  {/* Contact Name */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <label style={{ 
                      fontSize: '1rem', 
                      fontWeight: '500', 
                      color: '#333',
                      marginBottom: '0.3rem',
                      display: 'block'
                    }}>
                      Contact name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input 
                      type="text"
                      placeholder="Please enter your contact name here"
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    />
                  </div>

                  {/* Contact Number */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <label style={{ 
                      fontSize: '1rem', 
                      fontWeight: '500', 
                      color: '#333',
                      marginBottom: '0.3rem',
                      display: 'block'
                    }}>
                      Contact Number
                    </label>
                    <input 
                      type="tel"
                      placeholder="Contact Number"
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <label style={{ 
                      fontSize: '1rem', 
                      fontWeight: '500', 
                      color: '#333',
                      marginBottom: '0.3rem',
                      display: 'block'
                    }}>
                      Email address <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input 
                      type="email"
                      placeholder="Please enter your Email address here"
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                    <button 
                      type="submit"
                      style={{
                        padding: '0.75rem 2.5rem',
                        fontSize: '1rem',
                        background: '#fff',
                        color: '#1a1a1a',
                        border: '2px solid #1a1a1a',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#1a1a1a';
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.color = '#1a1a1a';
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Feel Free Section */}
          <div className="row mt-3 mb-3">
            <div className="col-12 text-center">
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '600', 
                color: '#666',
                lineHeight: '1.4'
              }}>
                Feel Free To Reach Out To Us With Any Queries
              </h2>
            </div>
          </div>

          {/* Contact Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div style={{
                background: 'linear-gradient(135deg, #fd9330 0%, #ff8c42 100%)',
                padding: '3rem',
                borderRadius: '15px',
                textAlign: 'center',
                color: '#fff'
              }}>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: '#fff'
                }}>
                  Still Need Help?
                </h3>
                <p style={{ 
                  fontSize: '1.1rem', 
                  marginBottom: '2rem',
                  color: '#fff',
                  opacity: '0.95'
                }}>
                  Our support team is available 24/7 to assist you with any questions or concerns.
                </p>
                <Link href="/contact">
                  <button style={{
                    background: '#fff',
                    color: '#fd9330',
                    padding: '1rem 2.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    Contact Support
                  </button>
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





