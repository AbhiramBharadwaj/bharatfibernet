'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

export default function Knowledge() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Knowledge Center" />

      {/* Hero Section */}
      <section className="section-padding" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '2rem',
                color: '#000'
              }}>
                Stay Informed, Stay Inspired
              </h1>
              
              <p style={{ 
                fontSize: '1.3rem', 
                lineHeight: '1.8', 
                color: '#333', 
                maxWidth: '800px', 
                margin: '0 auto 3rem'
              }}>
                Fresh perspectives, helpful guides, and industry news — all in one place.
              </p>

              {/* Recent Posts Section */}
              <div style={{
                maxWidth: '500px',
                margin: '0 auto',
                padding: '3rem 2.5rem',
                border: '2px solid #000',
                borderRadius: '10px',
                background: '#fff'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '0',
                  color: '#000'
                }}>
                  Recent Post appears here
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          {/* Filter Tabs */}
          <div className="row justify-content-center mb-4">
            <div className="col-12">
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}>
                <button style={{
                  padding: '0.875rem 2rem',
                  background: 'linear-gradient(135deg, #28a745 0%, #34d058 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)'
                }}>
                  All
                </button>
                <button style={{
                  padding: '0.875rem 2rem',
                  background: '#fff',
                  color: '#28a745',
                  border: '2px solid #e0e0e0',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.background = '#f0fff4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.background = '#fff';
                }}>
                  Articles
                </button>
                <button style={{
                  padding: '0.875rem 2rem',
                  background: '#fff',
                  color: '#28a745',
                  border: '2px solid #e0e0e0',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.background = '#f0fff4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.background = '#fff';
                }}>
                  Case Studies
                </button>
                <button style={{
                  padding: '0.875rem 2rem',
                  background: '#fff',
                  color: '#28a745',
                  border: '2px solid #e0e0e0',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.background = '#f0fff4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.background = '#fff';
                }}>
                  Multimedia
                </button>
                <button style={{
                  padding: '0.875rem 2rem',
                  background: '#fff',
                  color: '#28a745',
                  border: '2px solid #e0e0e0',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.background = '#f0fff4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.background = '#fff';
                }}>
                  White Papers
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="row mb-5">
            <div className="col-12">
              <div style={{
                background: '#f8f9fa',
                padding: '2rem',
                borderRadius: '15px',
                border: '2px solid #e0e0e0'
              }}>
                <div className="row g-3 align-items-center">
                  <div className="col-lg-4">
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text"
                        placeholder="Search keywords"
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem 0.875rem 3rem',
                          border: '2px solid #e0e0e0',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          background: '#fff'
                        }}
                      />
                      <i className="fas fa-search" style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#28a745',
                        fontSize: '1.1rem'
                      }}></i>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <select style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      background: '#fff',
                      cursor: 'pointer',
                      color: '#999'
                    }}>
                      <option>Order By</option>
                      <option>Newest First</option>
                      <option>Oldest First</option>
                      <option>Most Popular</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <select style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      background: '#fff',
                      cursor: 'pointer',
                      color: '#999'
                    }}>
                      <option>Month</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <select style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      background: '#fff',
                      cursor: 'pointer',
                      color: '#999'
                    }}>
                      <option>Year</option>
                      <option>2025</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="row g-4 mb-5">
            {/* Blog Card 1 */}
            <div className="col-lg-4 col-md-6">
              <Link href="/knowledge/blog-1" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '220px',
                    backgroundImage: 'url(/assets/img/1tv.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#fff',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#333',
                      border: '1px solid #e0e0e0'
                    }}>
                      Blog 1
                    </span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#28a745',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      ARTICLE
                    </span>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginTop: '0.5rem',
                      marginBottom: '0.75rem',
                      color: '#000',
                      lineHeight: '1.4'
                    }}>
                      Understanding Network Infrastructure
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      A comprehensive guide to building and maintaining robust network infrastructure for modern businesses.
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      <span>Nov 20, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 2 */}
            <div className="col-lg-4 col-md-6">
              <Link href="/knowledge/blog-2" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '220px',
                    backgroundImage: 'url(/assets/img/15.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#fff',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#333',
                      border: '1px solid #e0e0e0'
                    }}>
                      Blog 2
                    </span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#fd9330',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      CASE STUDY
                    </span>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginTop: '0.5rem',
                      marginBottom: '0.75rem',
                      color: '#000',
                      lineHeight: '1.4'
                    }}>
                      Enterprise Connectivity Success
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      How we helped a Fortune 500 company achieve 99.9% uptime with our managed network solutions.
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      <span>Nov 18, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 3 */}
            <div className="col-lg-4 col-md-6">
              <Link href="/knowledge/blog-3" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '220px',
                    backgroundImage: 'url(/assets/img/16.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#28a745',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      GUIDE
                    </span>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginTop: '0.5rem',
                      marginBottom: '0.75rem',
                      color: '#000',
                      lineHeight: '1.4'
                    }}>
                      Cybersecurity Best Practices
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      Essential security measures every business should implement to protect their network infrastructure.
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      <span>Nov 15, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 4 */}
            <div className="col-lg-4 col-md-6">
              <Link href="/knowledge/blog-4" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '220px',
                    backgroundImage: 'url(/assets/img/18.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#fd9330',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      WHITE PAPER
                    </span>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginTop: '0.5rem',
                      marginBottom: '0.75rem',
                      color: '#000',
                      lineHeight: '1.4'
                    }}>
                      5G and Future Connectivity
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      Exploring the impact of 5G technology on enterprise networks and IoT infrastructure.
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      <span>Nov 12, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 5 */}
            <div className="col-lg-4 col-md-6">
              <Link href="/knowledge/blog-5" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '220px',
                    backgroundImage: 'url(/assets/img/11.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#28a745',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      ARTICLE
                    </span>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginTop: '0.5rem',
                      marginBottom: '0.75rem',
                      color: '#000',
                      lineHeight: '1.4'
                    }}>
                      Cloud Integration Strategies
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      Seamlessly integrate cloud services with your existing network infrastructure for maximum efficiency.
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      <span>Nov 10, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Blog Card 6 */}
            <div className="col-lg-4 col-md-6">
              <Link href="/knowledge/blog-6" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '220px',
                    backgroundImage: 'url(/assets/img/111.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#fd9330',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      MULTIMEDIA
                    </span>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginTop: '0.5rem',
                      marginBottom: '0.75rem',
                      color: '#000',
                      lineHeight: '1.4'
                    }}>
                      Network Setup Video Tutorial
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      Watch our step-by-step video guide on setting up enterprise-grade network infrastructure.
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      <span>Nov 8, 2025</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-12">
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <button style={{
                  padding: '0.75rem 1.25rem',
                  border: '2px solid #28a745',
                  background: '#28a745',
                  color: '#fff',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  1
                </button>
                <button style={{
                  padding: '0.75rem 1.25rem',
                  border: '2px solid #e0e0e0',
                  background: '#fff',
                  color: '#333',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.color = '#28a745';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.color = '#333';
                }}>
                  2
                </button>
                <button style={{
                  padding: '0.75rem 1.25rem',
                  border: '2px solid #e0e0e0',
                  background: '#fff',
                  color: '#333',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.color = '#28a745';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.color = '#333';
                }}>
                  3
                </button>
                <button style={{
                  padding: '0.75rem 1.25rem',
                  border: '2px solid #e0e0e0',
                  background: '#fff',
                  color: '#333',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.color = '#28a745';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.color = '#333';
                }}>
                  ...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(/assets/img/3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div style={{
                background: '#fff',
                border: '2px solid #e0e0e0',
                borderRadius: '15px',
                padding: '3rem 2rem'
              }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: '#000'
                }}>
                  Want to Stay Updated?
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#666',
                  marginBottom: '2rem'
                }}>
                  Subscribe to our newsletter and get the latest insights, guides, and updates delivered to your inbox.
                </p>
                <form className="d-flex gap-3 justify-content-center flex-wrap">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    style={{
                      flex: '1',
                      minWidth: '250px',
                      maxWidth: '400px',
                      padding: '0.875rem 1.5rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                  <button 
                    type="submit"
                    style={{
                      padding: '0.875rem 2.5rem',
                      background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </NextLayout>
  );
}
