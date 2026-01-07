"use client";

import { useEffect, useMemo, useState } from "react";
import NextLayout from "@/layouts/NextLayout";

const CATEGORY_OPTIONS = [
  "Articles",
  "Case Studies",
  "Multimedia",
  "White Papers",
];

const initialFormState = {
  title: "",
  slug: "",
  excerpt: "",
  category: CATEGORY_OPTIONS[0],
  image: "",
  date: "",
  content: "",
};

const formatDateTime = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 16);
};

export default function AdminPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formState, setFormState] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

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
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (err) {
      setError("Unable to load posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const sortedPosts = useMemo(() => {
    const copy = [...posts];
    copy.sort((a, b) => {
      const aTime = new Date(a.date).getTime() || 0;
      const bTime = new Date(b.date).getTime() || 0;
      return bTime - aTime;
    });
    return copy;
  }, [posts]);

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
      category: post.category || CATEGORY_OPTIONS[0],
      image: post.image || "",
      date: formatDateTime(post.date),
      content: post.content || "",
    });
    setStatus("");
    setError("");
  };

  const resetForm = () => {
    setEditingId(null);
    setFormState(initialFormState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");
    setError("");

    const payload = {
      ...formState,
      date: formState.date ? new Date(formState.date).toISOString() : "",
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
            Knowledge Admin
          </h1>
          <p style={{ color: "#3b4453", marginBottom: 0, fontSize: "1.05rem" }}>
            Add, update, or delete Knowledge Center posts.
          </p>
        </div>

        <section
          style={{ ...cardStyle, marginBottom: "2.8rem" }}
        >
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
                  style={inputStyle}
                >
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
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
            <label style={{ display: "grid", gap: "0.35rem", fontWeight: 600, color: "#1f2937", marginTop: "1rem" }}>
              Content (optional)
              <textarea
                id="post-content"
                name="content"
                placeholder="Content (optional)"
                value={formState.content}
                onChange={handleChange}
                rows={6}
                style={textareaStyle}
              />
            </label>
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
          {loading ? (
            <p>Loading posts...</p>
          ) : (
            <div style={{ display: "grid", gap: "1rem" }}>
              {sortedPosts.map((post) => (
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
              {!sortedPosts.length && <p>No posts yet.</p>}
            </div>
          )}
        </section>
      </main>
    </NextLayout>
  );
}
