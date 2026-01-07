'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import { useEffect, useMemo, useState } from "react";

const JOB_CATEGORIES = ["All", "Sales", "Technical", "Administration"];

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        const data = await response.json();
        if (isMounted) {
          setJobs(Array.isArray(data.jobs) ? data.jobs : []);
        }
      } catch (err) {
        if (isMounted) {
          setJobs([]);
        }
      } finally {
        if (isMounted) {
          setLoadingJobs(false);
        }
      }
    };

    loadJobs();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredJobs = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return jobs.filter((job) => {
      const jobCategory = (job.category || "").trim().toLowerCase();
      const activeCategoryNormalized = activeCategory.trim().toLowerCase();
      if (activeCategory !== "All" && jobCategory !== activeCategoryNormalized) {
        return false;
      }
      if (normalizedSearch && !job.title?.toLowerCase().includes(normalizedSearch)) {
        return false;
      }
      return true;
    });
  }, [activeCategory, jobs, searchTerm]);

  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Career" />

      {/* Screen 1 - Career Section */}
      <section className="about-section section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-content text-center">
                <h2 className="mb-5" style={{ fontSize: '3.5rem', fontWeight: '600', lineHeight: '1.2' }}>
                  Leading India's Next-Gen Internet Solutions
                </h2>
                
                <h3 className="mb-4" style={{ fontSize: '2rem', fontWeight: '600' }}>
                  Build the Future of Connectivity with Us
                </h3>
                
                <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '1100px', margin: '0 auto 1.5rem' }}>
                  At Bharat Fibernet, we believe great connections start with people. We keep <strong>Corporates, Small and Medium Enterprises, Communities, and Homes</strong> across Andhra Pradesh and Telangana connected to what matters most.
                </p>
                
                <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '1100px', margin: '0 auto 1.5rem' }}>
                  Whether it's staying connected at work or relaxing at home, our network keeps everything running seamlessly.
                </p>
                
                <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '1100px', margin: '0 auto 1.5rem' }}>
                  But behind every connection is a strong team that believes in making a difference — and you can help make it even stronger.
                </p>
                
                <p style={{ fontSize: '1.2rem', color: '#333', maxWidth: '1100px', margin: '2rem auto 2.5rem', fontWeight: '500' }}>
                  Come be part of a team that brings networks to life.
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                  <button
                    onClick={() => {
                      const jobSection = document.querySelector('.section-padding:nth-of-type(4)');
                      if (jobSection) {
                        jobSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    style={{ 
                      padding: '1rem 3rem',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #fd9330 0%, #ff7420 100%)',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    View Available Jobs
                  </button>
                  
                  <span style={{ fontSize: '2rem', color: '#ccc' }}>|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 2 - Join Our Team */}
      <section className="service-details-section section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-5" style={{ fontSize: '3rem', fontWeight: '600' }}>
                Join Our Team
              </h2>
              
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '1100px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
                If you're excited about staying ahead in technology, working smart in a dynamic environment, and collaborating with motivated, fun, and passionate people, Bharat Fibernet is the place for you.
              </p>
              
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '1100px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
                If there isn't a current opening that fits your profile, feel free to share your resume through the form below. We're always eager to meet energetic talent who want to be part of our journey.
              </p>
              
              <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: '1100px', margin: '0 auto', lineHeight: '1.8' }}>
                We'll reach out when a suitable position becomes available. Meanwhile, keep an eye on our Careers page for the latest opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3 - Your Career at Bharat Fibernet */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-5" style={{ fontSize: '3rem', fontWeight: '600' }}>
                Your Career at Bharat Fibernet
              </h2>
            </div>
          </div>
          
          {/* Three Value Cards */}
          <div className="row g-4 mb-5">
            <div className="col-lg-4">
              <div style={{ 
                border: '2px solid #000', 
                padding: '2.5rem 2rem', 
                height: '100%',
                background: 'white'
              }}>
                <div style={{ 
                  backgroundColor: '#ffc299', 
                  border: '1px solid #000', 
                  padding: '0.75rem 1.5rem', 
                  marginBottom: '1.5rem',
                  display: 'inline-block'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>Passionate</h3>
                </div>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', margin: 0, color: '#333' }}>
                  We're inspired by technology and the difference it can make in people's lives.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div style={{ 
                border: '2px solid #000', 
                padding: '2.5rem 2rem', 
                height: '100%',
                background: 'white'
              }}>
                <div style={{ 
                  backgroundColor: '#ffc299', 
                  border: '1px solid #000', 
                  padding: '0.75rem 1.5rem', 
                  marginBottom: '1.5rem',
                  display: 'inline-block'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>Collaborative</h3>
                </div>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', margin: 0, color: '#333' }}>
                  Teamwork helps us solve problems and achieve more than we could alone.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div style={{ 
                border: '2px solid #000', 
                padding: '2.5rem 2rem', 
                height: '100%',
                background: 'white'
              }}>
                <div style={{ 
                  backgroundColor: '#ffc299', 
                  border: '1px solid #000', 
                  padding: '0.75rem 1.5rem', 
                  marginBottom: '1.5rem',
                  display: 'inline-block'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>Welcoming</h3>
                </div>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', margin: 0, color: '#333' }}>
                  Diverse backgrounds, shared goals, one team supporting each other.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row">
            <div className="col-12 text-center" style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                Step In. Make an Impact
              </h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: 0, color: '#333' }}>
                Be part of a team that's shaping the future of connectivity in Andhra Pradesh and Telangana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 4 - Job Listings and Resume Form */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          {/* Job Categories and Search */}
          <div className="row mb-4">
            <div className="col-12">
              <div style={{ 
                border: '2px solid #000', 
                display: 'flex',
                marginBottom: '2rem'
              }}>
                {JOB_CATEGORIES.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    style={{ 
                      flex: 1, 
                      padding: '1rem', 
                      border: 'none', 
                      borderRight: index === JOB_CATEGORIES.length - 1 ? 'none' : '2px solid #000',
                      background: 'white',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <input 
                type="text" 
                placeholder="Search for a Job Title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '350px',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid #000',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  background: '#e6f2ff'
                }}
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="row mb-5">
            <div className="col-12">
              {loadingJobs ? (
                <p style={{ fontSize: '1.1rem', color: '#333' }}>Loading openings...</p>
              ) : filteredJobs.length ? (
                filteredJobs.map((job) => (
                  <div key={job._id} style={{ border: '2px solid #000', padding: '1.5rem 2rem', marginBottom: '1.5rem', background: 'white' }}>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>{job.title}</h4>
                  </div>
                ))
              ) : (
                <p style={{ fontSize: '1.1rem', color: '#333' }}>No openings match your search.</p>
              )}
            </div>
          </div>

          {/* Resume Submission Form */}
          <div className="row">
            <div className="col-12 text-center">
              <h2 style={{ fontSize: '3rem', fontWeight: '600', marginBottom: '1rem' }}>
                Submit Your Resume
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#333' }}>
                Take the first step toward a rewarding career.
              </p>
              
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <form style={{ border: '3px solid #000', padding: '3rem 2.5rem', background: 'white' }}>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <input 
                          type="text" 
                          placeholder="First Name *"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '1rem',
                            background: '#f0f8ff'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <input 
                          type="text" 
                          placeholder="Last Name *"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '1rem',
                            background: '#f0f8ff'
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <input 
                        type="tel" 
                        placeholder="Contact Number *"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '1rem',
                          background: '#f0f8ff'
                        }}
                      />
                    </div>
                    
                    <div className="mb-3">
                      <input 
                        type="email" 
                        placeholder="Email *"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '1rem',
                          background: '#f0f8ff'
                        }}
                      />
                    </div>
                    
                    <div className="mb-3">
                      <select 
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '1rem',
                          background: '#f0f8ff',
                          color: '#999'
                        }}
                      >
                        <option>Position you want to apply for</option>
                        {jobs.map((job) => (
                          <option key={job._id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="mb-3">
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem',
                        padding: '0.75rem 1rem',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        background: '#f0f8ff'
                      }}>
                        <span style={{ flex: 1, color: '#999', fontSize: '1rem' }}>Upload Files Here</span>
                        <button 
                          type="button"
                          style={{
                            padding: '0.5rem 1.5rem',
                            background: '#5ab9b9',
                            color: 'white',
                            border: 'none',
                            borderRadius: '20px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}
                        >
                          Upload File
                        </button>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.5rem', marginBottom: '0' }}>
                        Documents in PDF or word only. Please ensure file size is not more than 5MB.
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <input 
                        type="text" 
                        placeholder="Linkedin URL"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '1rem',
                          background: '#f0f8ff'
                        }}
                      />
                    </div>
                    
                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem' }}>
                      By submitting this form, you agree to our <a href="#" style={{ color: '#0066cc' }}>Data Use Policy</a>.
                    </p>
                    
                    <button 
                      type="submit"
                      style={{
                        padding: '0.75rem 3rem',
                        background: 'white',
                        color: '#000',
                        border: '2px solid #000',
                        borderRadius: '5px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Submit!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
}
