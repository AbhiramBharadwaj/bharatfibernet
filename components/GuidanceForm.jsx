"use client";
import React, { useState } from "react";

const GuidanceForm = () => {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });
    setIsSubmitting(true);

    const form = new FormData(e.target);
    const phone = (form.get("phone") || "").trim();
    const email = (form.get("email") || "").trim();

    if (!phone || !email) {
      setStatus({ state: "error", message: "Please enter both phone and email." });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Need Guidance Lead",
          email,
          phone,
          message: "Lead from Need Guidance section",
          type: "guidance-lead",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus({ state: "success", message: "Thank you! We will reach out shortly." });
      e.target.reset();
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="guidance-section section-padding"
      style={{
        backgroundImage: 'url("/assets/img/4.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="guidance-title" style={{ color: '#1a1a1a', fontWeight: '700', fontSize: '2.5rem', textShadow: '0 2px 4px rgba(255,255,255,0.3)' }}>Need Guidance?</h2>
          <p className="guidance-subtitle" style={{ color: '#2c2c2c', fontSize: '1.1rem', fontWeight: '500' }}>We'd love to help you.</p>
        </div>

        {/* Labels Row */}
        <div className="guidance-labels">
          <span style={{ color: '#1a1a1a', fontWeight: '600', fontSize: '1.1rem' }}>Enquire</span>
          <span style={{ color: '#1a1a1a', fontWeight: '600', fontSize: '1.1rem' }}>Email</span>
          <span style={{ color: '#ff6f00', fontWeight: '700', fontSize: '1.1rem' }}>Call Us</span>
        </div>

        {/* Form */}
        <form className="guidance-form-container" onSubmit={handleSubmit} style={{ position: "relative" }}>
          <input
            type="text"
            name="phone"
            className="guidance-input"
            placeholder="Mobile Number"
            required
          />

          <input
            type="email"
            name="email"
            className="guidance-input"
            placeholder="Email Address"
            required
          />

          <button className="guidance-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Let's Connect!"}
          </button>
          {status.state === "success" && (
            <p style={{ marginTop: "10px", color: "#0b9c66", fontWeight: 600 }}>{status.message}</p>
          )}
          {status.state === "error" && (
            <p style={{ marginTop: "10px", color: "#d00", fontWeight: 600 }}>{status.message}</p>
          )}
          {isSubmitting && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(255,255,255,0.78)",
                borderRadius: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              Sending...
            </div>
          )}
        </form>

      </div>
    </section>
  );
};

export default GuidanceForm;
