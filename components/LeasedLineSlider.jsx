"use client";

import { useState } from "react";
import Link from "next/link";

const LeasedLineSlider = () => {
  const [selectedSpeed, setSelectedSpeed] = useState(100);
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  // Pricing based on speed
  const getPricing = (speed) => {
    const pricing = {
      100: 25000,
      200: 40000,
      300: 55000,
      400: 70000,
      500: 85000,
      1000: 150000
    };
    return pricing[speed] || 25000;
  };

  const speeds = [100, 200, 300, 400, 500, 1000];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to contact page
    window.location.href = '/contact';
  };

  return (
    <section 
      className="leased-line-slider-section fix"
      style={{
        background: 'linear-gradient(135deg, #2d5a3d 0%, #1a3d2b 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 0'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Title */}
        <div className="text-center mb-3">
          <h2 
            className="wow fadeInUp" 
            data-wow-delay=".2s"
            style={{
              color: '#ffffff',
              fontSize: '28px',
              fontWeight: '700',
              textTransform: 'uppercase',
              marginBottom: '8px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            CHOOSE YOUR LEASED LINE PLAN
          </h2>
          <p 
            className="wow fadeInUp" 
            data-wow-delay=".3s"
            style={{
              color: '#ffffff',
              fontSize: '14px',
              opacity: 0.9,
              marginBottom: 0
            }}
          >
            Move the slider to select your bandwidth and see pricing instantly.
          </p>
        </div>

        {/* Slider Card */}
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div 
              className="leased-line-card wow fadeInUp"
              data-wow-delay=".4s"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '25px 30px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Speed Markers */}
              <div 
                className="speed-markers"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                  paddingLeft: '5px',
                  paddingRight: '5px'
                }}
              >
                {speeds.map((speed, index) => (
                  <div 
                    key={index}
                    style={{
                      color: selectedSpeed === speed ? '#ff8c00' : '#ffffff',
                      fontSize: '16px',
                      fontWeight: selectedSpeed === speed ? '700' : '500',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedSpeed(speed)}
                  >
                    {speed >= 1000 ? `${speed / 1000} Gbps` : `${speed} Mbps`}
                  </div>
                ))}
              </div>

              {/* Slider */}
              <div style={{ marginBottom: '25px', position: 'relative' }}>
                <input
                  type="range"
                  min="0"
                  max={speeds.length - 1}
                  value={speeds.indexOf(selectedSpeed)}
                  onChange={(e) => setSelectedSpeed(speeds[parseInt(e.target.value)])}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '5px',
                    background: `linear-gradient(to right, #ff8c00 0%, #ff8c00 ${(speeds.indexOf(selectedSpeed) / (speeds.length - 1)) * 100}%, #4a4a4a ${(speeds.indexOf(selectedSpeed) / (speeds.length - 1)) * 100}%, #4a4a4a 100%)`,
                    outline: 'none',
                    cursor: 'pointer',
                    WebkitAppearance: 'none',
                    appearance: 'none'
                  }}
                  className="custom-slider"
                />
              </div>

              {/* Selected Speed Display */}
              <div className="text-center mb-3">
                <div style={{ color: '#ffffff', fontSize: '16px', marginBottom: '8px' }}>
                  Selected Speed: <span style={{ color: '#ff8c00', fontSize: '24px', fontWeight: '700' }}>
                    {selectedSpeed >= 1000 ? `${selectedSpeed / 1000} Gbps` : `${selectedSpeed} Mbps`}
                  </span>
                </div>
                <div style={{ color: '#ffffff', fontSize: '16px' }}>
                  Monthly Price: <span style={{ color: '#ff8c00', fontSize: '28px', fontWeight: '700' }}>
                    ₹{getPricing(selectedSpeed).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        color: '#333333'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        color: '#333333'
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        padding: '14px',
                        background: 'linear-gradient(135deg, #ff8c00 0%, #ff6f00 100%)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 10px 30px rgba(255, 140, 0, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Get Special Offer →
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(255, 140, 0, 0.6);
          transition: all 0.3s ease;
        }

        .custom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 16px rgba(255, 140, 0, 0.8);
        }

        .custom-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(255, 140, 0, 0.6);
          transition: all 0.3s ease;
        }

        .custom-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 16px rgba(255, 140, 0, 0.8);
        }

        @media (max-width: 768px) {
          .speed-markers {
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LeasedLineSlider;
