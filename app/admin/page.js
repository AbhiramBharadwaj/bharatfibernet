"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import NextLayout from "@/layouts/NextLayout";
import "react-quill/dist/quill.snow.css";

const JOB_CATEGORY_OPTIONS = ["Sales", "Technical", "Administration"];
const POST_STATUS_OPTIONS = ["draft", "published", "scheduled"];

const initialFormState = {
  title: "",
  slug: "",
  excerpt: "",
  category: "",
  status: "draft",
  image: "",
  date: "",
  content: "",
};

const normalizeCategoryName = (value) =>
  String(value || "")
    .trim()
    .replace(/\s+/g, " ");

const formatDateTime = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 16);
};

const normalizeStatus = (value) => String(value || "").toLowerCase();

const formatStatusLabel = (value) => {
  const normalized = normalizeStatus(value);
  if (!normalized) return "Published";
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
};

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const editorModules = {
  toolbar: [
    [{ font: [] }, { size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "clean"],
  ],
};

const editorFormats = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
];

export default function AdminPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("knowledge");
  const [formState, setFormState] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [categoryStatus, setCategoryStatus] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [listSearch, setListSearch] = useState("");
  const [listCategory, setListCategory] = useState("all");
  const [listStatus, setListStatus] = useState("all");
  const [listSort, setListSort] = useState("newest");
  const [selectedPostIds, setSelectedPostIds] = useState([]);
  const [bulkAction, setBulkAction] = useState("");
  const [showContentPreview, setShowContentPreview] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [jobFormState, setJobFormState] = useState({
    title: "",
    category: JOB_CATEGORY_OPTIONS[0],
  });
  const [editingJobId, setEditingJobId] = useState(null);
  const [jobStatus, setJobStatus] = useState("");
  const [jobError, setJobError] = useState("");

  const inputStyle = {
    padding: "0.8rem 0.9rem",
    borderRadius: "10px",
    border: "1px solid #cfd4dc",
    color: "#111",
    background: "#fff",
    fontSize: "0.98rem",
  };
  const textareaStyle = {
    marginTop: "1rem",
    width: "100%",
    padding: "0.9rem",
    borderRadius: "12px",
    border: "1px solid #cfd4dc",
    color: "#111",
    background: "#fff",
    fontSize: "0.98rem",
  };
  const cardStyle = {
    border: "1px solid #e3e7ee",
    borderRadius: "18px",
    padding: "1.8rem",
    background: "linear-gradient(135deg, #ffffff 0%, #f9fbff 100%)",
    boxShadow: "0 20px 50px rgba(20, 33, 61, 0.08)",
  };

  const fetchPosts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/posts?includeAll=true");
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (err) {
      setError("Unable to load posts.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    setCategoryError("");
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
      setCategories(uniqueNames);
    } catch (err) {
      setCategories([]);
      setCategoryError(err.message || "Unable to load categories.");
    }
  };

  const fetchJobs = async () => {
    setJobsLoading(true);
    setJobError("");
    try {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      setJobs(data.jobs || []);
    } catch (err) {
      setJobError("Unable to load job openings.");
    } finally {
      setJobsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
    fetchJobs();
  }, []);

  useEffect(() => {
    if (!categories.length) return;
    setFormState((prev) => {
      if (prev.category && categories.includes(prev.category)) {
        return prev;
      }
      return { ...prev, category: categories[0] };
    });
  }, [categories]);

  const filteredPosts = useMemo(() => {
    const normalizedSearch = listSearch.trim().toLowerCase();
    const copy = posts.filter((post) => {
      const normalizedCategory = normalizeCategoryName(post?.category);
      const normalizedPostStatus = normalizeStatus(post?.status || "published");

      if (listCategory !== "all" && normalizedCategory !== listCategory) {
        return false;
      }
      if (listStatus !== "all" && normalizedPostStatus !== listStatus) {
        return false;
      }
      if (normalizedSearch) {
        const haystack =
          `${post?.title || ""} ${post?.excerpt || ""}`.toLowerCase();
        if (!haystack.includes(normalizedSearch)) {
          return false;
        }
      }
      return true;
    });

    copy.sort((a, b) => {
      const aTime = new Date(a.date).getTime() || 0;
      const bTime = new Date(b.date).getTime() || 0;
      return listSort === "oldest" ? aTime - bTime : bTime - aTime;
    });
    return copy;
  }, [listCategory, listSearch, listSort, listStatus, posts]);

  useEffect(() => {
    const validIds = new Set(filteredPosts.map((post) => post._id));
    setSelectedPostIds((prev) => prev.filter((id) => validIds.has(id)));
  }, [filteredPosts]);

  const postCategoryOptions = useMemo(() => {
    const merged = [...categories, formState.category].filter(Boolean);
    return Array.from(new Set(merged));
  }, [categories, formState.category]);

  const listCategoryOptions = useMemo(() => {
    const fromPosts = posts
      .map((post) => normalizeCategoryName(post?.category))
      .filter(Boolean);
    return Array.from(new Set([...categories, ...fromPosts]));
  }, [categories, posts]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (post) => {
    setEditingId(post._id);
    setFormState({
      title: post.title || "",
      slug: post.slug || "",
      excerpt: post.excerpt || "",
      category: post.category || categories[0] || "",
      status: normalizeStatus(post.status || "published"),
      image: post.image || "",
      date: formatDateTime(post.date),
      content: post.content || "",
    });
    setStatus("");
    setError("");
  };

  const resetForm = () => {
    setEditingId(null);
    setFormState((prev) => ({
      ...initialFormState,
      category: categories[0] || prev.category || "",
    }));
  };

  const handleCreateCategory = async (event) => {
    event.preventDefault();
    setCategoryStatus("");
    setCategoryError("");

    const normalizedName = normalizeCategoryName(newCategory);
    if (!normalizedName) {
      setCategoryError("Category name is required.");
      return;
    }

    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: normalizedName }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Unable to create category.");
      }

      const savedName =
        normalizeCategoryName(data?.category?.name) || normalizedName;

      const nextCategories = Array.from(
        new Set([
          ...categories,
          savedName,
        ])
      );
      setCategories(nextCategories);
      setFormState((prev) => ({ ...prev, category: savedName }));
      setNewCategory("");
      setCategoryStatus("Category added.");
    } catch (err) {
      setCategoryError(err.message || "Unable to create category.");
    }
  };

  const handleDeleteCategory = async (categoryName) => {
    const normalizedName = normalizeCategoryName(categoryName);
    if (!normalizedName) {
      return;
    }
    if (!confirm(`Delete category "${normalizedName}"?`)) {
      return;
    }

    setCategoryStatus("");
    setCategoryError("");

    const slug = normalizedName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    try {
      const response = await fetch(`/api/categories/${slug}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Unable to delete category.");
      }

      const nextCategories = categories.filter((item) => item !== normalizedName);
      setCategories(nextCategories);
      setFormState((prev) => {
        if (prev.category !== normalizedName) {
          return prev;
        }
        return {
          ...prev,
          category: nextCategories[0] || "",
        };
      });
      setCategoryStatus("Category deleted.");
    } catch (err) {
      setCategoryError(err.message || "Unable to delete category.");
    }
  };

  const toggleSelectPost = (postId) => {
    setSelectedPostIds((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const toggleSelectAllVisiblePosts = () => {
    const visibleIds = filteredPosts.map((post) => post._id);
    const allSelected =
      visibleIds.length > 0 && visibleIds.every((id) => selectedPostIds.includes(id));

    if (allSelected) {
      setSelectedPostIds((prev) => prev.filter((id) => !visibleIds.includes(id)));
      return;
    }
    setSelectedPostIds(Array.from(new Set([...selectedPostIds, ...visibleIds])));
  };

  const handleBulkAction = async () => {
    if (!selectedPostIds.length || !bulkAction) return;

    const actionToLabel = {
      delete: "delete",
      publish: "set to Published",
      draft: "set to Draft",
    };
    const confirmed = confirm(
      `Apply "${actionToLabel[bulkAction] || bulkAction}" to ${selectedPostIds.length} selected post(s)?`
    );
    if (!confirmed) return;

    setStatus("");
    setError("");

    const payload =
      bulkAction === "delete"
        ? { ids: selectedPostIds, action: "delete" }
        : {
            ids: selectedPostIds,
            action: "setStatus",
            status: bulkAction === "publish" ? "published" : "draft",
          };

    try {
      const response = await fetch("/api/posts/bulk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Bulk action failed.");
      }

      setBulkAction("");
      setSelectedPostIds([]);
      setStatus("Bulk action applied.");
      fetchPosts();
    } catch (err) {
      setError(err.message || "Bulk action failed.");
    }
  };

  const handleJobChange = (event) => {
    const { name, value } = event.target;
    setJobFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleJobEdit = (job) => {
    setEditingJobId(job._id);
    setJobFormState({
      title: job.title || "",
      category: job.category || JOB_CATEGORY_OPTIONS[0],
    });
    setJobStatus("");
    setJobError("");
  };

  const resetJobForm = () => {
    setEditingJobId(null);
    setJobFormState({ title: "", category: JOB_CATEGORY_OPTIONS[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");
    setError("");

    if (!formState.category) {
      setError("Please add a category before creating a post.");
      return;
    }
    if (formState.status === "scheduled" && !formState.date) {
      setError("Scheduled posts require a publish date.");
      return;
    }

    const payload = {
      ...formState,
      date: formState.date ? new Date(formState.date).toISOString() : "",
      status: normalizeStatus(formState.status || "draft"),
    };

    try {
      const response = await fetch(
        editingId ? `/api/posts/${editingId}` : "/api/posts",
        {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Request failed.");
      }

      setStatus(editingId ? "Post updated." : "Post created.");
      resetForm();
      fetchPosts();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

  const handleJobSubmit = async (event) => {
    event.preventDefault();
    setJobStatus("");
    setJobError("");

    try {
      const response = await fetch(
        editingJobId ? `/api/jobs/${editingJobId}` : "/api/jobs",
        {
          method: editingJobId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jobFormState),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Request failed.");
      }

      setJobStatus(editingJobId ? "Opening updated." : "Opening created.");
      resetJobForm();
      fetchJobs();
    } catch (err) {
      setJobError(err.message || "Something went wrong.");
    }
  };

  const handleDelete = async (postId) => {
    if (!confirm("Delete this post?")) return;

    setStatus("");
    setError("");
    try {
      const response = await fetch(`/api/posts/${postId}`, { method: "DELETE" });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Delete failed.");
      }
      setStatus("Post deleted.");
      fetchPosts();
    } catch (err) {
      setError(err.message || "Unable to delete.");
    }
  };

  const handleJobDelete = async (jobId) => {
    if (!confirm("Delete this opening?")) return;

    setJobStatus("");
    setJobError("");
    try {
      const response = await fetch(`/api/jobs/${jobId}`, { method: "DELETE" });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Delete failed.");
      }
      setJobStatus("Opening deleted.");
      fetchJobs();
    } catch (err) {
      setJobError(err.message || "Unable to delete.");
    }
  };

  return (
    <NextLayout header={1} footer={1}>
      <main
        style={{
          padding: "3.5rem 1.5rem 4.5rem",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            padding: "1.5rem 2rem",
            borderRadius: "18px",
            background: "linear-gradient(135deg, #eff7ff 0%, #f7fdf3 100%)",
            border: "1px solid #e3e7ee",
            marginBottom: "2.5rem",
          }}
        >
          <h1 style={{ fontSize: "2.4rem", fontWeight: 700, marginBottom: "0.6rem" }}>
            Admin Console
          </h1>
          <p style={{ color: "#3b4453", marginBottom: 0, fontSize: "1.05rem" }}>
            Manage Knowledge posts and Career openings.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.2rem", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => setActiveSection("knowledge")}
              style={{
                padding: "0.6rem 1.4rem",
                borderRadius: "999px",
                border: activeSection === "knowledge" ? "none" : "1px solid #cfd4dc",
                background: activeSection === "knowledge" ? "#28a745" : "#fff",
                color: activeSection === "knowledge" ? "#fff" : "#1f2937",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Knowledge
            </button>
            <button
              type="button"
              onClick={() => setActiveSection("career")}
              style={{
                padding: "0.6rem 1.4rem",
                borderRadius: "999px",
                border: activeSection === "career" ? "none" : "1px solid #cfd4dc",
                background: activeSection === "career" ? "#2563eb" : "#fff",
                color: activeSection === "career" ? "#fff" : "#1f2937",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Career Openings
            </button>
          </div>
        </div>

        {activeSection === "knowledge" ? (
          <>
            <section style={{ ...cardStyle, marginBottom: "2.8rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>
                Manage Categories
              </h2>
              <form
                onSubmit={handleCreateCategory}
                style={{ marginBottom: "2rem", display: "grid", gap: "0.75rem" }}
              >
                <div
                  style={{
                    display: "grid",
                    gap: "0.75rem",
                    gridTemplateColumns: "minmax(220px, 1fr) auto",
                    alignItems: "center",
                  }}
                >
                  <input
                    id="new-category"
                    name="new-category"
                    placeholder="New category name"
                    value={newCategory}
                    onChange={(event) => setNewCategory(event.target.value)}
                    style={inputStyle}
                  />
                  <button
                    type="submit"
                    style={{
                      background: "#111827",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      padding: "0.8rem 1.2rem",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Add Category
                  </button>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {categories.map((name) => (
                    <button
                      type="button"
                      key={name}
                      onClick={() => handleDeleteCategory(name)}
                      title={`Delete ${name}`}
                      style={{
                        padding: "0.3rem 0.75rem",
                        borderRadius: "999px",
                        background: "#f0f4ff",
                        color: "#1f7ae0",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        border: "1px solid #d6def4",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <span>{name}</span>
                      <span aria-hidden="true" style={{ color: "#d92d20" }}>
                        x
                      </span>
                    </button>
                  ))}
                </div>
                {categoryStatus && (
                  <p style={{ color: "#1a7f37", margin: 0 }}>{categoryStatus}</p>
                )}
                {categoryError && (
                  <p style={{ color: "#b42318", margin: 0 }}>{categoryError}</p>
                )}
              </form>

              <h2 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>
                {editingId ? "Edit Post" : "Create Post"}
              </h2>
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                  <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937" }}>
                    Title
                    <input
                      id="post-title"
                      name="title"
                      placeholder="Title"
                      value={formState.title}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </label>
                  <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937" }}>
                    Slug (optional)
                    <input
                      id="post-slug"
                      name="slug"
                      placeholder="Slug (optional)"
                      value={formState.slug}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </label>
                  <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937" }}>
                    Category
                    <select
                      id="post-category"
                      name="category"
                      value={formState.category}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    >
                      {!postCategoryOptions.length && (
                        <option value="" disabled>
                          No categories available
                        </option>
                      )}
                      {postCategoryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937" }}>
                    Status
                    <select
                      id="post-status"
                      name="status"
                      value={formState.status}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      {POST_STATUS_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {formatStatusLabel(option)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937" }}>
                    Image URL
                    <input
                      id="post-image"
                      name="image"
                      placeholder="Image URL"
                      value={formState.image}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </label>
                  <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937" }}>
                    Publish Date
                    <input
                      id="post-date"
                      name="date"
                      type="datetime-local"
                      value={formState.date}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </label>
                </div>
                {formState.status === "scheduled" && (
                  <p
                    style={{
                      margin: "0.35rem 0 0",
                      color: "#6b7280",
                      fontWeight: 500,
                    }}
                  >
                    This post will appear publicly at the selected date/time.
                  </p>
                )}
                <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937", marginTop: "1rem" }}>
                  Excerpt
                  <textarea
                    id="post-excerpt"
                    name="excerpt"
                    placeholder="Excerpt"
                    value={formState.excerpt}
                    onChange={handleChange}
                    required
                    rows={3}
                    style={textareaStyle}
                  />
                </label>
                <div style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937", marginTop: "1rem" }}>
                  <span>Content</span>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.35rem" }}>
                    <span style={{ fontSize: "0.9rem", color: "#64748b", fontWeight: 500 }}>
                      Write with the toolbar above.
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowContentPreview((prev) => !prev)}
                      style={{
                        background: "#fff",
                        border: "1px solid #cfd4dc",
                        borderRadius: "10px",
                        padding: "0.45rem 0.8rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#1f2937",
                        cursor: "pointer",
                      }}
                    >
                      {showContentPreview ? "Hide Preview" : "Show Preview"}
                    </button>
                  </div>
                  <div style={{ marginTop: "0.75rem" }}>
                    <ReactQuill
                      theme="snow"
                      value={formState.content}
                      onChange={(value) =>
                        setFormState((prev) => ({ ...prev, content: value }))
                      }
                      modules={editorModules}
                      formats={editorFormats}
                      placeholder="Write your article content..."
                      style={{ background: "#fff", borderRadius: "12px" }}
                    />
                  </div>
                  {showContentPreview && (
                    <div
                      style={{
                        marginTop: "0.9rem",
                        border: "1px solid #cfd4dc",
                        borderRadius: "12px",
                        background: "#fff",
                        padding: "1rem",
                        minHeight: "160px",
                      }}
                    >
                      <p style={{ margin: "0 0 0.6rem", color: "#64748b", fontSize: "0.82rem", fontWeight: 700 }}>
                        LIVE PREVIEW
                      </p>
                      <div
                        className="admin-rich-preview"
                        style={{ color: "#111827", lineHeight: 1.65 }}
                        dangerouslySetInnerHTML={{
                          __html:
                            formState.content?.trim() ||
                            "<p style='color:#94a3b8'>Your formatted content will appear here.</p>",
                        }}
                      />
                    </div>
                  )}
                </div>
                <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
                  <button
                    type="submit"
                    style={{
                      background: "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      padding: "0.8rem 1.6rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      boxShadow: "0 10px 22px rgba(40, 167, 69, 0.25)",
                    }}
                  >
                    {editingId ? "Update Post" : "Create Post"}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      style={{
                        background: "#fff",
                        border: "1px solid #cfd4dc",
                        borderRadius: "10px",
                        padding: "0.8rem 1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
                {status && <p style={{ color: "#1a7f37", marginTop: "0.75rem" }}>{status}</p>}
                {error && <p style={{ color: "#b42318", marginTop: "0.75rem" }}>{error}</p>}
              </form>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>
                Existing Posts
              </h2>
              <div
                style={{
                  border: "1px solid #e3e7ee",
                  borderRadius: "14px",
                  padding: "1rem",
                  marginBottom: "1rem",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gap: "0.75rem",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  }}
                >
                  <input
                    placeholder="Search title or excerpt"
                    value={listSearch}
                    onChange={(event) => setListSearch(event.target.value)}
                    style={inputStyle}
                  />
                  <select
                    value={listCategory}
                    onChange={(event) => setListCategory(event.target.value)}
                    style={inputStyle}
                  >
                    <option value="all">All categories</option>
                    {listCategoryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <select
                    value={listStatus}
                    onChange={(event) => setListStatus(event.target.value)}
                    style={inputStyle}
                  >
                    <option value="all">All statuses</option>
                    {POST_STATUS_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {formatStatusLabel(option)}
                      </option>
                    ))}
                  </select>
                  <select
                    value={listSort}
                    onChange={(event) => setListSort(event.target.value)}
                    style={inputStyle}
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                  </select>
                </div>

                <div
                  style={{
                    marginTop: "0.75rem",
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    type="button"
                    onClick={toggleSelectAllVisiblePosts}
                    style={{
                      ...inputStyle,
                      padding: "0.45rem 0.85rem",
                      cursor: "pointer",
                    }}
                  >
                    Select Visible
                  </button>
                  <select
                    value={bulkAction}
                    onChange={(event) => setBulkAction(event.target.value)}
                    style={{ ...inputStyle, minWidth: "170px" }}
                  >
                    <option value="">Bulk action</option>
                    <option value="publish">Mark as Published</option>
                    <option value="draft">Move to Draft</option>
                    <option value="delete">Delete Selected</option>
                  </select>
                  <button
                    type="button"
                    disabled={!selectedPostIds.length || !bulkAction}
                    onClick={handleBulkAction}
                    style={{
                      border: "none",
                      borderRadius: "10px",
                      padding: "0.5rem 1rem",
                      background:
                        !selectedPostIds.length || !bulkAction ? "#cfd4dc" : "#111827",
                      color: "#fff",
                      cursor:
                        !selectedPostIds.length || !bulkAction ? "not-allowed" : "pointer",
                    }}
                  >
                    Apply
                  </button>
                  <span style={{ color: "#6b7280", fontSize: "0.92rem" }}>
                    {selectedPostIds.length} selected
                  </span>
                </div>
              </div>
              {loading ? (
                <p>Loading posts...</p>
              ) : (
                <div style={{ display: "grid", gap: "1rem" }}>
                  {filteredPosts.map((post) => (
                    <div
                      key={post._id}
                      style={{
                        border: "1px solid #e3e7ee",
                        borderRadius: "14px",
                        padding: "1.2rem 1.4rem",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1.2rem",
                        alignItems: "center",
                        background: "#fff",
                        boxShadow: "0 10px 25px rgba(20, 33, 61, 0.06)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "0.9rem", alignItems: "center" }}>
                        <input
                          type="checkbox"
                          checked={selectedPostIds.includes(post._id)}
                          onChange={() => toggleSelectPost(post._id)}
                        />
                        <div>
                        <h3 style={{ margin: "0 0 0.25rem", fontSize: "1.1rem" }}>
                          {post.title}
                        </h3>
                        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                          <span
                            style={{
                              padding: "0.2rem 0.7rem",
                              borderRadius: "999px",
                              background: "#f0f4ff",
                              color: "#1f7ae0",
                              fontSize: "0.78rem",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.6px",
                            }}
                          >
                            {post.category}
                          </span>
                          <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>
                            {post.date ? new Date(post.date).toLocaleDateString() : "No date"}
                          </span>
                          <span
                            style={{
                              padding: "0.2rem 0.55rem",
                              borderRadius: "999px",
                              background:
                                normalizeStatus(post.status || "published") === "draft"
                                  ? "#fef3c7"
                                  : normalizeStatus(post.status || "published") === "scheduled"
                                  ? "#e0f2fe"
                                  : "#dcfce7",
                              color:
                                normalizeStatus(post.status || "published") === "draft"
                                  ? "#92400e"
                                  : normalizeStatus(post.status || "published") === "scheduled"
                                  ? "#0369a1"
                                  : "#166534",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {formatStatusLabel(post.status || "published")}
                          </span>
                        </div>
                      </div>
                      </div>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button
                          onClick={() => handleEdit(post)}
                          style={{
                            border: "1px solid #28a745",
                            background: "#fff",
                            color: "#28a745",
                            borderRadius: "10px",
                            padding: "0.5rem 1rem",
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post._id)}
                          style={{
                            border: "1px solid #d92d20",
                            background: "#fff",
                            color: "#d92d20",
                            borderRadius: "10px",
                            padding: "0.5rem 1rem",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                  {!filteredPosts.length && <p>No posts match current filters.</p>}
                </div>
              )}
            </section>
          </>
        ) : (
          <>
            <section style={{ ...cardStyle, marginBottom: "2.8rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>
                {editingJobId ? "Edit Opening" : "Create Opening"}
              </h2>
              <form onSubmit={handleJobSubmit}>
                <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                  <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937" }}>
                    Job Title
                    <input
                      name="title"
                      placeholder="Job title"
                      value={jobFormState.title}
                      onChange={handleJobChange}
                      required
                      style={inputStyle}
                    />
                  </label>
                  <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937" }}>
                    Category
                    <select
                      name="category"
                      value={jobFormState.category}
                      onChange={handleJobChange}
                      style={inputStyle}
                    >
                      {JOB_CATEGORY_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
                  <button
                    type="submit"
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      padding: "0.8rem 1.6rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      boxShadow: "0 10px 22px rgba(37, 99, 235, 0.25)",
                    }}
                  >
                    {editingJobId ? "Update Opening" : "Create Opening"}
                  </button>
                  {editingJobId && (
                    <button
                      type="button"
                      onClick={resetJobForm}
                      style={{
                        background: "#fff",
                        border: "1px solid #cfd4dc",
                        borderRadius: "10px",
                        padding: "0.8rem 1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
                {jobStatus && <p style={{ color: "#1a7f37", marginTop: "0.75rem" }}>{jobStatus}</p>}
                {jobError && <p style={{ color: "#b42318", marginTop: "0.75rem" }}>{jobError}</p>}
              </form>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>
                Current Openings
              </h2>
              {jobsLoading ? (
                <p>Loading openings...</p>
              ) : (
                <div style={{ display: "grid", gap: "1rem" }}>
                  {jobs.map((job) => (
                    <div
                      key={job._id}
                      style={{
                        border: "1px solid #e3e7ee",
                        borderRadius: "14px",
                        padding: "1.2rem 1.4rem",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1.2rem",
                        alignItems: "center",
                        background: "#fff",
                        boxShadow: "0 10px 25px rgba(20, 33, 61, 0.06)",
                      }}
                    >
                      <div>
                        <h3 style={{ margin: "0 0 0.25rem", fontSize: "1.1rem" }}>
                          {job.title}
                        </h3>
                        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                          <span
                            style={{
                              padding: "0.2rem 0.7rem",
                              borderRadius: "999px",
                              background: "#eef2ff",
                              color: "#1d4ed8",
                              fontSize: "0.78rem",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.6px",
                            }}
                          >
                            {job.category}
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button
                          onClick={() => handleJobEdit(job)}
                          style={{
                            border: "1px solid #2563eb",
                            background: "#fff",
                            color: "#2563eb",
                            borderRadius: "10px",
                            padding: "0.5rem 1rem",
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleJobDelete(job._id)}
                          style={{
                            border: "1px solid #d92d20",
                            background: "#fff",
                            color: "#d92d20",
                            borderRadius: "10px",
                            padding: "0.5rem 1rem",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                  {!jobs.length && <p>No openings yet.</p>}
                </div>
              )}
            </section>
          </>
        )}
      </main>
      <style jsx global>{`
        .admin-rich-preview p {
          margin: 0 0 0.8rem;
        }
        .admin-rich-preview ul,
        .admin-rich-preview ol {
          margin: 0.45rem 0 0.95rem;
          padding-left: 1.5rem;
        }
        .admin-rich-preview ul {
          list-style: disc;
        }
        .admin-rich-preview ol {
          list-style: decimal;
        }
        .admin-rich-preview li {
          margin-bottom: 0.35rem;
        }
        .admin-rich-preview h1,
        .admin-rich-preview h2,
        .admin-rich-preview h3 {
          margin: 0.5rem 0 0.7rem;
          line-height: 1.35;
        }
        .admin-rich-preview a {
          color: #1d4ed8;
          text-decoration: underline;
        }
        .admin-rich-preview .ql-size-small {
          font-size: 0.85em;
        }
        .admin-rich-preview .ql-size-large {
          font-size: 1.35em;
        }
        .admin-rich-preview .ql-size-huge {
          font-size: 1.8em;
        }
        .admin-rich-preview .ql-font-serif {
          font-family: Georgia, "Times New Roman", serif;
        }
        .admin-rich-preview .ql-font-monospace {
          font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
        }
      `}</style>
    </NextLayout>
  );
}
