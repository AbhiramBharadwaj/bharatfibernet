'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

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

const CATEGORY_PALETTE = [
  "#28a745",
  "#fd9330",
  "#1f7ae0",
  "#0f766e",
  "#dc2626",
  "#7c3aed",
  "#0ea5e9",
  "#ca8a04",
];

const normalizeCategoryName = (value) =>
  String(value || "")
    .trim()
    .replace(/\s+/g, " ");

const getCategoryColor = (category) => {
  const value = normalizeCategoryName(category).toLowerCase();
  if (!value) return CATEGORY_PALETTE[0];

  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return CATEGORY_PALETTE[hash % CATEGORY_PALETTE.length];
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
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) {
          throw new Error("Unable to load categories.");
        }
        const data = await response.json();
        const names = Array.isArray(data.categories)
          ? data.categories
              .map((item) => normalizeCategoryName(item?.name))
              .filter(Boolean)
          : [];
        const uniqueNames = Array.from(new Set(names));
        if (isMounted) {
          setCategories(uniqueNames);
        }
      } catch (err) {
        if (isMounted) {
          setCategories([]);
        }
      }
    };

    loadCategories();
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

  const categoryOptions = useMemo(() => {
    const postCategories = posts
      .map((post) => normalizeCategoryName(post.category))
      .filter(Boolean);
    const merged = ["All", ...categories, ...postCategories];
    return Array.from(new Set(merged));
  }, [categories, posts]);

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

  useEffect(() => {
    if (!categoryOptions.includes(activeCategory)) {
      setActiveCategory("All");
    }
  }, [activeCategory, categoryOptions]);

  const recentPost = newestPosts[0];
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );
  const filterControlStyle = {
    width: "100%",
    height: "56px",
    border: "1px solid #cbd5e1",
    borderRadius: "12px",
    padding: "0 0.9rem",
    background: "#f8fafc",
    fontSize: "1rem",
    color: "#0f172a",
  };

  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Knowledge Center" />

      <section
        className="section-padding"
        style={{
          background:
            "radial-gradient(circle at 10% 10%, #fef9c3 0%, rgba(254,249,195,0.2) 35%, transparent 36%), radial-gradient(circle at 85% 25%, #dbeafe 0%, rgba(219,234,254,0.25) 30%, transparent 31%), linear-gradient(130deg, #0f172a 0%, #1e293b 65%, #334155 100%)",
          paddingTop: "90px",
          paddingBottom: "90px",
          color: "#f8fafc",
          fontFamily: "Sora, Manrope, sans-serif",
        }}
      >
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <p
                style={{
                  marginBottom: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "1.2px",
                  color: "#f59e0b",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                }}
              >
                Insights Hub
              </p>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4.2vw, 3.8rem)",
                  lineHeight: 1.1,
                  marginBottom: "1rem",
                  fontWeight: 800,
                }}
              >
                Bold ideas for better networks and smarter growth.
              </h1>
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "1.08rem",
                  lineHeight: 1.8,
                  maxWidth: "680px",
                  marginBottom: "0",
                }}
              >
                Browse deep dives, implementation stories, and practical guides from our
                team. Every article is crafted to help decision-makers move faster.
              </p>
            </div>

            <div className="col-lg-5">
              <div
                style={{
                  height: "100%",
                  minHeight: "280px",
                  borderRadius: "22px",
                  padding: "1.4rem",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 100%)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 25px 65px rgba(15, 23, 42, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#fbbf24", fontWeight: 700, letterSpacing: "0.4px" }}>
                  Featured Right Now
                </span>
                {loading ? (
                  <h3 style={{ margin: 0, fontSize: "1.35rem" }}>Loading latest post...</h3>
                ) : recentPost ? (
                  <>
                    <h3 style={{ margin: "0.8rem 0", fontSize: "1.55rem", lineHeight: 1.3 }}>
                      {recentPost.title}
                    </h3>
                    <p style={{ margin: 0, color: "#cbd5e1" }}>
                      {recentPost.category} • {formatDate(recentPost.date)}
                    </p>
                    <Link
                      href={`/knowledge/${recentPost.slug || recentPost._id}`}
                      style={{
                        marginTop: "1rem",
                        width: "fit-content",
                        padding: "0.55rem 0.95rem",
                        borderRadius: "999px",
                        textDecoration: "none",
                        background: "#f8fafc",
                        color: "#0f172a",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                      }}
                    >
                      Read Highlight
                    </Link>
                  </>
                ) : (
                  <h3 style={{ margin: 0, fontSize: "1.35rem" }}>No posts published yet.</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "#f8fafc", fontFamily: "Sora, Manrope, sans-serif" }}>
        <div className="container">
          <div style={{ marginBottom: "1.3rem", display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
            {categoryOptions.map((category) => {
              const isActive = activeCategory === category;
              const color = category === "All" ? "#0f172a" : getCategoryColor(category);
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    border: "none",
                    borderRadius: "999px",
                    padding: "0.6rem 1rem",
                    background: isActive ? color : "#e2e8f0",
                    color: isActive ? "#fff" : "#0f172a",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "transform 180ms ease",
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dbe3ef",
              borderRadius: "20px",
              padding: "1.2rem",
              boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
              marginBottom: "1.5rem",
            }}
          >
            <div className="row g-3">
              <div className="col-lg-4">
                <input
                  type="text"
                  placeholder="Search by title or excerpt"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={filterControlStyle}
                />
              </div>
              <div className="col-lg-3 col-md-4">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  style={filterControlStyle}
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                </select>
              </div>
              <div className="col-lg-2 col-md-4">
                <select
                  value={filterMonth}
                  onChange={(e) => setFilterMonth(e.target.value)}
                  style={filterControlStyle}
                >
                  <option value="">Month</option>
                  {MONTH_OPTIONS.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-3 col-md-4">
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  style={filterControlStyle}
                >
                  <option value="">Year</option>
                  {YEAR_OPTIONS.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {loading ? (
              <div className="col-12 text-center">
                <p style={{ color: "#475569" }}>Loading posts...</p>
              </div>
            ) : paginatedPosts.length ? (
              paginatedPosts.map((post) => {
                const categoryColor = getCategoryColor(post.category);
                return (
                  <div className="col-lg-4 col-md-6" key={post._id}>
                    <Link href={`/knowledge/${post.slug || post._id}`} style={{ textDecoration: "none" }}>
                      <article
                        style={{
                          height: "100%",
                          background: "#fff",
                          borderRadius: "18px",
                          border: "1px solid #dbe3ef",
                          overflow: "hidden",
                          boxShadow: "0 15px 40px rgba(15, 23, 42, 0.08)",
                          transition: "transform 200ms ease, box-shadow 200ms ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-6px)";
                          e.currentTarget.style.boxShadow = "0 20px 50px rgba(15, 23, 42, 0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 15px 40px rgba(15, 23, 42, 0.08)";
                        }}
                      >
                        <div
                          style={{
                            height: "200px",
                            backgroundImage: `linear-gradient(140deg, rgba(15,23,42,0.2), rgba(15,23,42,0.35)), url(${post.image || "/assets/img/1.jpg"})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            padding: "0.9rem",
                          }}
                        >
                          <span
                            style={{
                              background: categoryColor,
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: "0.75rem",
                              textTransform: "uppercase",
                              letterSpacing: "0.45px",
                              borderRadius: "999px",
                              padding: "0.35rem 0.75rem",
                            }}
                          >
                            {post.category}
                          </span>
                          <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.82rem" }}>
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <div style={{ padding: "1.2rem 1.2rem 1.35rem" }}>
                          <h3
                            style={{
                              color: "#0f172a",
                              fontSize: "1.28rem",
                              lineHeight: 1.35,
                              marginBottom: "0.7rem",
                              fontWeight: 800,
                            }}
                          >
                            {post.title}
                          </h3>
                          <p style={{ color: "#475569", marginBottom: 0, lineHeight: 1.7 }}>
                            {(post.excerpt || "").slice(0, 130)}
                            {post.excerpt && post.excerpt.length > 130 ? "..." : ""}
                          </p>
                        </div>
                      </article>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center">
                <p style={{ color: "#475569" }}>No posts match your filters.</p>
              </div>
            )}
          </div>

          {filteredPosts.length > pageSize && (
            <div className="row">
              <div className="col-12">
                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "0.45rem",
                  }}
                >
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={safePage === 1}
                    style={{
                      border: "1px solid #cbd5e1",
                      background: "#fff",
                      color: safePage === 1 ? "#94a3b8" : "#0f172a",
                      borderRadius: "10px",
                      padding: "0.55rem 0.9rem",
                    }}
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    const isActive = safePage === page;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        style={{
                          border: "1px solid #cbd5e1",
                          borderRadius: "10px",
                          padding: "0.55rem 0.95rem",
                          background: isActive ? "#0f172a" : "#fff",
                          color: isActive ? "#fff" : "#0f172a",
                          fontWeight: 700,
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
                      border: "1px solid #cbd5e1",
                      background: "#fff",
                      color: safePage === totalPages ? "#94a3b8" : "#0f172a",
                      borderRadius: "10px",
                      padding: "0.55rem 0.9rem",
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

      <section
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(120deg, #0b1220 0%, #111827 60%, #1e293b 100%)",
          color: "#f8fafc",
          fontFamily: "Sora, Manrope, sans-serif",
        }}
      >
        <div className="container">
          <div
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "2rem 1.4rem",
              background: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p style={{ marginBottom: "0.4rem", color: "#fbbf24", fontWeight: 700 }}>
                Need Guidance?
              </p>
              <h3 style={{ margin: 0, fontSize: "1.8rem", fontWeight: 800 }}>
                Talk to our team and get tailored connectivity advice.
              </h3>
            </div>
            <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
              <a
                href="tel:+917799906341"
                style={{
                  textDecoration: "none",
                  background: "#f59e0b",
                  color: "#111827",
                  fontWeight: 700,
                  borderRadius: "999px",
                  padding: "0.7rem 1.1rem",
                }}
              >
                Call Us
              </a>
              <a
                href="mailto:info@bharatvoip.com"
                style={{
                  textDecoration: "none",
                  background: "#fff",
                  color: "#111827",
                  fontWeight: 700,
                  borderRadius: "999px",
                  padding: "0.7rem 1.1rem",
                }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </NextLayout>
  );
}
