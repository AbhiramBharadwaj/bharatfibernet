"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Login failed.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem 1.5rem",
        background:
          "radial-gradient(circle at top, rgba(37,99,235,0.14), transparent 35%), linear-gradient(135deg, #f5f7fb 0%, #edf6ff 100%)",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "#fff",
          border: "1px solid #d9e2ef",
          borderRadius: "24px",
          padding: "2rem",
          boxShadow: "0 24px 60px rgba(15, 23, 42, 0.10)",
        }}
      >
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <img
            src="/assets/img/logo/logo.png"
            alt="Bharat Fibernet"
            style={{ width: "54px", height: "54px", objectFit: "contain" }}
          />
          <p
            style={{
              margin: 0,
              color: "#2563eb",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.78rem",
            }}
          >
            Bharat Fibernet
          </p>
        </a>
          <h1 style={{ margin: "0.8rem 0 0.4rem", fontSize: "2rem", fontWeight: 700 }}>
            Admin Login
          </h1>
          <p style={{ margin: 0, color: "#475569", lineHeight: 1.6 }}>
            Sign in to manage blogs, categories, and career openings.
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: "1.75rem" }}>
            <label
              htmlFor="username"
              style={{ display: "block", marginBottom: "0.45rem", fontWeight: 600 }}
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
              autoComplete="username"
              required
              style={{
                width: "100%",
                padding: "0.9rem 1rem",
                borderRadius: "14px",
                border: "1px solid #cbd5e1",
                marginBottom: "1rem",
                color: "#111827",
                backgroundColor: "#ffffff",
                caretColor: "#111827",
              }}
            />

            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "0.45rem", fontWeight: 600 }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
              style={{
                width: "100%",
                padding: "0.9rem 1rem",
                borderRadius: "14px",
                border: "1px solid #cbd5e1",
                color: "#111827",
                backgroundColor: "#ffffff",
                caretColor: "#111827",
              }}
            />

            {error ? (
              <p style={{ color: "#b91c1c", margin: "0.9rem 0 0" }}>{error}</p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                marginTop: "1.25rem",
                padding: "0.95rem 1rem",
                borderRadius: "14px",
                border: "none",
                background: submitting ? "#93c5fd" : "#2563eb",
                color: "#fff",
                fontWeight: 700,
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              {submitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
      </section>
    </main>
  );
}
