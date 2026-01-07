'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const CATEGORY_OPTIONS = [
  "All",
  "Articles",
  "Case Studies",
  "Multimedia",
  "White Papers",
];

const MONTH_OPTIONS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const YEAR_OPTIONS = ["2025", "2024", "2023", "2022", "2021"];

const CATEGORY_COLORS = {
  Articles: "#28a745",
  "Case Studies": "#fd9330",
  Multimedia: "#1f7ae0",
  "White Papers": "#0f766e",
};

const formatDate = (value) => {
  if (!value) return "No date";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "No date";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function Knowledge() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    let isMounted = true;

    const loadPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        if (isMounted) {
          setPosts(Array.isArray(data.posts) ? data.posts : []);
        }
      } catch (err) {
        if (isMounted) {
          setPosts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  const newestPosts = useMemo(() => {
    const copy = [...posts];
    copy.sort((a, b) => {
      const aTime = new Date(a.date).getTime() || 0;
      const bTime = new Date(b.date).getTime() || 0;
      return bTime - aTime;
    });
    return copy;
  }, [posts]);

  const sortedPosts = useMemo(() => {
    const copy = [...newestPosts];
    if (sortOrder === "oldest") {
      copy.reverse();
    }
    return copy;
  }, [newestPosts, sortOrder]);

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return sortedPosts.filter((post) => {
      if (activeCategory !== "All" && post.category !== activeCategory) {
        return false;
      }

      if (normalizedSearch) {
        const haystack = `${post.title || ""} ${post.excerpt || ""}`.toLowerCase();
        if (!haystack.includes(normalizedSearch)) {
          return false;
        }
      }

      if (filterMonth || filterYear) {
        const date = new Date(post.date);
        if (Number.isNaN(date.getTime())) {
          return false;
        }
        if (filterMonth) {
          const monthIndex = MONTH_OPTIONS.indexOf(filterMonth);
          if (monthIndex !== date.getMonth()) {
            return false;
          }
        }
        if (filterYear && String(date.getFullYear()) !== filterYear) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, filterMonth, filterYear, searchTerm, sortedPosts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, filterMonth, filterYear, searchTerm, sortOrder]);

  const recentPost = newestPosts[0];
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

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
                {loading ? (
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0',
                    color: '#000'
                  }}>
                    Loading recent post...
                  </h3>
                ) : recentPost ? (
                  <div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem',
                      color: '#000'
                    }}>
                      {recentPost.title}
                    </h3>
                    <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>
                      {recentPost.category} · {formatDate(recentPost.date)}
                    </p>
                  </div>
                ) : (
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0',
                    color: '#000'
                  }}>
                    No posts yet.
                  </h3>
                )}
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
                {CATEGORY_OPTIONS.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      style={{
                        padding: '0.875rem 2rem',
                        background: isActive
                          ? 'linear-gradient(135deg, #28a745 0%, #34d058 100%)'
                          : '#fff',
                        color: isActive ? '#fff' : '#28a745',
                        border: isActive ? 'none' : '2px solid #e0e0e0',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: isActive ? '0 4px 15px rgba(40, 167, 69, 0.3)' : 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderColor = '#28a745';
                          e.currentTarget.style.background = '#f0fff4';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.borderColor = '#e0e0e0';
                          e.currentTarget.style.background = '#fff';
                        }
                      }}
                    >
                      {category}
                    </button>
                  );
                })}
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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                    }}
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}>
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
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
                    }}
                    value={filterMonth}
                    onChange={(e) => setFilterMonth(e.target.value)}>
                      <option value="">Month</option>
                      {MONTH_OPTIONS.map((month) => (
                        <option key={month} value={month}>{month}</option>
                      ))}
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
                    }}
                    value={filterYear}
                    onChange={(e) => setFilterYear(e.target.value)}>
                      <option value="">Year</option>
                      {YEAR_OPTIONS.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="row g-4 mb-5">
            {loading ? (
              <div className="col-12 text-center">
                <p style={{ color: '#666' }}>Loading posts...</p>
              </div>
            ) : paginatedPosts.length ? (
              paginatedPosts.map((post) => {
                const categoryColor = CATEGORY_COLORS[post.category] || '#28a745';
                return (
                  <div className="col-lg-4 col-md-6" key={post._id}>
                    <Link href={`/knowledge/${post.slug || post._id}`} style={{ textDecoration: 'none' }}>
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
                          backgroundImage: `url(${post.image || '/assets/img/1.jpg'})`,
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
                            {post.category}
                          </span>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                          <span style={{
                            fontSize: '0.85rem',
                            color: categoryColor,
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            {post.category}
                          </span>
                          <h4 style={{
                            fontSize: '1.3rem',
                            fontWeight: '700',
                            marginTop: '0.5rem',
                            marginBottom: '0.75rem',
                            color: '#000',
                            lineHeight: '1.4'
                          }}>
                            {post.title}
                          </h4>
                          <p style={{
                            fontSize: '0.95rem',
                            color: '#666',
                            lineHeight: '1.6',
                            marginBottom: '1rem'
                          }}>
                            {post.excerpt}
                          </p>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '0.85rem',
                            color: '#999'
                          }}>
                            <span>{formatDate(post.date)}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center">
                <p style={{ color: '#666' }}>No posts match your filters.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredPosts.length > pageSize && (
            <div className="row">
              <div className="col-12">
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={safePage === 1}
                    style={{
                      padding: '0.75rem 1rem',
                      border: '2px solid #e0e0e0',
                      background: '#fff',
                      color: safePage === 1 ? '#bbb' : '#333',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: safePage === 1 ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    const isActive = page === safePage;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        style={{
                          padding: '0.75rem 1.25rem',
                          border: isActive ? '2px solid #28a745' : '2px solid #e0e0e0',
                          background: isActive ? '#28a745' : '#fff',
                          color: isActive ? '#fff' : '#333',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {page}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={safePage === totalPages}
                    style={{
                      padding: '0.75rem 1rem',
                      border: '2px solid #e0e0e0',
                      background: '#fff',
                      color: safePage === totalPages ? '#bbb' : '#333',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: safePage === totalPages ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Need Guidance Section */}
      <section 
        className="section-padding"
        style={{
          backgroundImage: 'url("/assets/img/4.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '80px 0'
        }}
      >
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 style={{ color: '#1a1a1a', fontWeight: '700', fontSize: '2.5rem', textShadow: '0 2px 4px rgba(255,255,255,0.3)' }}>
              Need Guidance?
            </h2>
            <p style={{ color: '#2c2c2c', fontSize: '1.1rem', fontWeight: '500' }}>
              We'd love to help you.
            </p>
          </div>

          {/* Labels Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <span style={{ color: '#1a1a1a', fontWeight: '600', fontSize: '1.1rem' }}>Enquire</span>
            <span style={{ color: '#1a1a1a', fontWeight: '600', fontSize: '1.1rem' }}>Email</span>
            <span style={{ color: '#ff6f00', fontWeight: '700', fontSize: '1.1rem' }}>Call Us</span>
          </div>

          {/* Form */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  required
                  style={{
                    width: '100%',
                    padding: '18px 25px',
                    borderRadius: '12px',
                    border: 'none',
                    fontSize: '16px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    color: '#333'
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  style={{
                    width: '100%',
                    padding: '18px 25px',
                    borderRadius: '12px',
                    border: 'none',
                    fontSize: '16px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    color: '#333'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '18px',
                    background: 'linear-gradient(135deg, #ff8c00 0%, #ff6f00 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 140, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Let's Connect!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </NextLayout>
  );
}
