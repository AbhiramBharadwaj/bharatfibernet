"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const firstName = (formData.get("firstName") || "").trim();
    const lastName = (formData.get("lastName") || "").trim();
    const email = (formData.get("email") || "").trim();
    const phone = (formData.get("phone") || "").trim();
    const message = (formData.get("message") || "").trim();
    const company = (formData.get("company") || "").trim();
    const designation = (formData.get("designation") || "").trim();
    const bandwidth = (formData.get("bandwidth") || "").trim();
    const companySize = (formData.get("companySize") || "").trim();
    const accountId = (formData.get("accountId") || "").trim();
    const customerId = (formData.get("customerId") || "").trim();

    if (!email || !message) {
      setStatus({ state: "error", message: "Please fill in email and message." });
      setIsSubmitting(false);
      return;
    }

    const details = [
      selectedOption ? `Enquiry Type: ${selectedOption}` : null,
      company ? `Company: ${company}` : null,
      designation ? `Designation: ${designation}` : null,
      bandwidth ? `Required Bandwidth: ${bandwidth}` : null,
      companySize ? `Company Size: ${companySize}` : null,
      accountId ? `Account ID: ${accountId}` : null,
      customerId ? `Customer ID: ${customerId}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const finalMessage = details
      ? `${message}\n\n---\n${details}`
      : message;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone,
          message: finalMessage,
          type: selectedOption || "general",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setStatus({ state: "success", message: "Thanks! We received your enquiry and will reach out shortly." });
      e.target.reset();
      setSelectedOption("");
    } catch (error) {
      setStatus({ state: "error", message: error.message || "Something went wrong." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Contact Us" />
      
      {/* Connect with Us Section */}
      <section style={{ padding: '30px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem', color: '#fd9330' }}>
                Connect with Us
              </h1>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#333', 
                maxWidth: '1000px', 
                margin: '0 auto 1.5rem'
              }}>
                We're here to make your connection strong and reliable. Whether you need broadband support, enterprise solutions, or expert consultation, our dedicated team is just a message away.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center', color: '#28a745' }}>
                Select Your Option And Get In Touch Instantly
              </h2>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '0'
              }}>
                <div style={{ 
                  border: '3px solid #2c5aa0', 
                  padding: '1.2rem 1.5rem',
                  background: '#e6f2ff',
                  width: '100%',
                  maxWidth: '500px',
                  cursor: 'pointer',
                  position: 'relative'
                }}>
                  <select 
                    className="form-select"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    style={{
                      width: '100%',
                      padding: '0',
                      paddingRight: '30px',
                      border: 'none',
                      fontSize: '1.1rem',
                      background: 'transparent',
                      fontWeight: '600',
                      cursor: 'pointer',
                      color: '#000',
                      outline: 'none',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none'
                    }}
                  >
                    <option value="">Select Your Enquiry Type</option>
                    <option value="home-broadband">Home Broadband Enquiry</option>
                    <option value="business-enterprise">Business & Enterprise Connectivity</option>
                    <option value="leased-line">Leased Line / Dedicated Internet</option>
                    <option value="consultation">Consultation</option>
                    <option value="billing">Billing & Account Assistance</option>
                    <option value="technical">Technical Escalation</option>
                    <option value="other">Other (General Query)</option>
                  </select>
                  <i className="fas fa-chevron-down" style={{
                    position: 'absolute',
                    right: '1.5rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#2c5aa0',
                    fontSize: '1rem',
                    pointerEvents: 'none'
                  }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ padding: '30px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={{ 
                border: '3px solid #000', 
                padding: '3rem 2.5rem',
                background: 'white'
              }}>
                <form onSubmit={handleSubmit}>
                  {/* Common Fields - First Name & Last Name */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        name="firstName"
                        placeholder="First Name"
                        required
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        name="lastName"
                        placeholder="Last Name"
                        required
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  </div>

                  {/* Conditional Fields - Company Name & Designation */}
                  {(selectedOption === 'business-enterprise' || selectedOption === 'leased-line' || selectedOption === 'consultation') && (
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          name="company"
                          placeholder="Company Name"
                          style={{
                            width: '100%',
                            padding: '1rem 1.5rem',
                            border: '2px solid #000',
                            borderRadius: '8px',
                            fontSize: '1.05rem',
                            background: '#e6f2ff',
                            color: '#000'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          name="designation"
                          placeholder="Designation"
                          style={{
                            width: '100%',
                            padding: '1rem 1.5rem',
                            border: '2px solid #000',
                            borderRadius: '8px',
                            fontSize: '1.05rem',
                            background: '#e6f2ff',
                            color: '#000'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Email & Contact Number */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        required
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Contact Number"
                        required
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  </div>

                  {/* Conditional Field - Required Bandwidth */}
                  {selectedOption === 'leased-line' && (
                    <div className="mb-3">
                      <input 
                        type="text" 
                        name="bandwidth"
                        placeholder="Required Bandwidth (e.g., 100 Mbps, 1 Gbps)"
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  )}

                  {/* Conditional Field - Company Size */}
                  {selectedOption === 'consultation' && (
                    <div className="mb-3">
                      <select 
                        name="companySize"
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="">Company Size</option>
                        <option value="1-10">1–10 Employees</option>
                        <option value="11-50">11–50 Employees</option>
                        <option value="51-200">51–200 Employees</option>
                        <option value="200+">200+ Employees</option>
                      </select>
                    </div>
                  )}

                  {/* Conditional Field - Account ID */}
                  {selectedOption === 'billing' && (
                    <div className="mb-3">
                      <input 
                        type="text" 
                        name="accountId"
                        placeholder="Account ID (if applicable)"
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  )}

                  {/* Conditional Field - Customer ID */}
                  {selectedOption === 'technical' && (
                    <div className="mb-3">
                      <input 
                        type="text" 
                        name="customerId"
                        placeholder="Customer ID / Registered Number"
                        style={{
                          width: '100%',
                          padding: '1rem 1.5rem',
                          border: '2px solid #000',
                          borderRadius: '8px',
                          fontSize: '1.05rem',
                          background: '#e6f2ff',
                          color: '#000'
                        }}
                      />
                    </div>
                  )}

                  {/* Dynamic Message Textarea */}
                  <div className="mb-3">
                    <textarea 
                      name="message"
                      placeholder={
                        selectedOption === 'home-broadband' ? "Tell us about your area or preferred plan." :
                        selectedOption === 'business-enterprise' ? "Share your business connectivity needs or location." :
                        selectedOption === 'leased-line' ? "Tell us about your location and bandwidth need." :
                        selectedOption === 'consultation' ? "Share your business requirements or let us know what kind of connectivity you're looking for." :
                        selectedOption === 'billing' ? "Please mention your Account ID or describe your billing concern." :
                        selectedOption === 'technical' ? "Describe your issue briefly (e.g., no internet, low speed)." :
                        selectedOption === 'other' ? "Share your query or feedback." :
                        "Message"
                      }
                      rows="5"
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        border: '2px solid #000',
                        borderRadius: '8px',
                        fontSize: '1.05rem',
                        background: '#e6f2ff',
                        color: '#000',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem' }}>
                    By clicking Submit, you have read and agreed to our Data Use Policy.
                  </p>

                  <div className="text-center">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        padding: '1rem 3rem',
                        background: 'linear-gradient(135deg, #ff8c00 0%, #ff6f00 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(255, 140, 0, 0.3)'
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit!'}
                    </button>
                    {status.state === "success" && (
                      <p style={{ color: '#0b9c66', marginTop: '12px', fontWeight: 600 }}>
                        {status.message}
                      </p>
                    )}
                    {status.state === "error" && (
                      <p style={{ color: '#d00', marginTop: '12px', fontWeight: 600 }}>
                        {status.message}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards Section */}
      <section style={{ 
        padding: '30px 0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
      }}>
        <div className="container">
          <div className="row g-4 mb-5">
            {/* Hotline Card */}
            <div className="col-lg-4 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '2px solid transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(253, 147, 48, 0.2)';
                e.currentTarget.style.borderColor = '#fd9330';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 20px rgba(253, 147, 48, 0.3)'
                }}>
                  <i className="fas fa-phone-alt" style={{ fontSize: '1.8rem', color: '#fff' }}></i>
                </div>
                
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  Hotline
                </h3>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h5 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    marginBottom: '1rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    For General Enquiries
                  </h5>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.8rem' }}>
                    (Office Hours Only)
                  </p>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <a href="tel:+917799906341" style={{ 
                      fontSize: '1.2rem', 
                      color: '#333', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'block',
                      marginBottom: '0.3rem'
                    }}>
                      +91 7799906341
                    </a>
                    <a href="tel:04042027737" style={{ 
                      fontSize: '1.2rem', 
                      color: '#333', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'block'
                    }}>
                      040-42027737
                    </a>
                  </div>
                </div>

                <div style={{
                  borderTop: '2px solid #f0f0f0',
                  paddingTop: '1.5rem'
                }}>
                  <h5 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    marginBottom: '1rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Technical Support 24/7
                  </h5>
                  <a href="tel:+917799906341" style={{ 
                    fontSize: '1.2rem', 
                    color: '#333', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>
                    +91 7799906341
                  </a>
                  <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
                    Available 24 hours for urgent technical issues
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="col-lg-4 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '2px solid transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(253, 147, 48, 0.2)';
                e.currentTarget.style.borderColor = '#fd9330';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 20px rgba(253, 147, 48, 0.3)'
                }}>
                  <i className="fas fa-map-marker-alt" style={{ fontSize: '1.8rem', color: '#fff' }}></i>
                </div>
                
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  Location
                </h3>
                
                <div style={{ marginBottom: '2rem' }}>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '700', 
                    marginBottom: '0.8rem',
                    color: '#333'
                  }}>
                    Jyothi Flora, 4th Floor
                  </p>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: '#666', 
                    lineHeight: '1.8',
                    marginBottom: 0
                  }}>
                    Kavuri Hills, Phase 2<br />
                    Madhapur<br />
                    Hyderabad, Telangana<br />
                    500033
                  </p>
                </div>

                <div style={{
                  borderTop: '2px solid #f0f0f0',
                  paddingTop: '1.5rem'
                }}>
                  <h5 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    marginBottom: '1rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Office Hours
                  </h5>
                  <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Mon – Sat: <span style={{ fontWeight: '400', color: '#666' }}>9:00 AM – 6:00 PM</span>
                  </p>
                  <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Sun & Holidays: <span style={{ fontWeight: '400', color: '#666' }}>Closed for Regular Office</span>
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, fontStyle: 'italic' }}>
                    (Technical support available 24/7)
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="col-lg-4 col-md-6">
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '2px solid transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(253, 147, 48, 0.2)';
                e.currentTarget.style.borderColor = '#fd9330';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 20px rgba(253, 147, 48, 0.3)'
                }}>
                  <i className="fas fa-envelope" style={{ fontSize: '1.8rem', color: '#fff' }}></i>
                </div>
                
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  Email
                </h3>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h5 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    marginBottom: '1rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    General Inquiries & Support
                  </h5>
                  <a 
                    href="mailto:info@bharatvoip.com" 
                    style={{ 
                      fontSize: '1.3rem', 
                      color: '#0066cc', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      display: 'block',
                      marginBottom: '1rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fd9330'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0066cc'}
                  >
                    info@bharatvoip.com
                  </a>
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                    We typically respond within 24 business hours
                  </p>
                </div>

                <div style={{
                  borderTop: '2px solid #f0f0f0',
                  paddingTop: '1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    gap: '1rem',
                    marginTop: '0.5rem'
                  }}>
                    <a 
                      href="https://wa.me/917799906341" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#25D366';
                        e.currentTarget.querySelector('i').style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f0f0f0';
                        e.currentTarget.querySelector('i').style.color = '#666';
                      }}>
                      <i className="fab fa-whatsapp" style={{ fontSize: '1.3rem', color: '#666', transition: 'color 0.3s ease' }}></i>
                    </a>
                    <a 
                      href="https://www.facebook.com/BharatFiberNetHyd?rdid=j4wsBerLi992ZsX9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BjhF4jETM%2F#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#1877F2';
                        e.currentTarget.querySelector('i').style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f0f0f0';
                        e.currentTarget.querySelector('i').style.color = '#666';
                      }}>
                      <i className="fab fa-facebook-f" style={{ fontSize: '1.3rem', color: '#666', transition: 'color 0.3s ease' }}></i>
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/bharatfibernet/?originalSubdomain=in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0A66C2';
                        e.currentTarget.querySelector('i').style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f0f0f0';
                        e.currentTarget.querySelector('i').style.color = '#666';
                      }}>
                      <i className="fab fa-linkedin-in" style={{ fontSize: '1.3rem', color: '#666', transition: 'color 0.3s ease' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Old Contact Section - Kept for reference
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Contact Us
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Don't Hessite to Contact <br />
                      Our Team Member
                    </h2>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Map Section Start */}
      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15315.42910867886!2d75.28290415000001!3d16.330235199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb91007a7a5d91%3A0xa35b4c55e725322d!2s4th%20Floor%2C%20Jyothi%20Flora%2C%20Kavuri%20Hills%20Phase%202%20Rd%2C%20Phase%202%2C%20Kavuri%20Hills%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500033!3m2!1d17.4384031!2d78.3938218!5e0!3m2!1sen!2sin!4v1764323158244!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </NextLayout>
  );
};

export default Page;
