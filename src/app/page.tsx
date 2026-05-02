"use client";

import { useState } from "react";
import Form from "../components/Form";
import Output from "../components/Output";

export default function Home() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (data: any) => {
    try {
      setLoading(true);
      setContent("");
      setError("");

      const res = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setContent(result.content);
    } catch (err) {
      console.error(err);
      setError("Failed to generate content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main ">
      {/* HEADER */}
      <header className="header">
        <div className="header-container">
          <div className="logo">✨ Content Generator Pro</div>
          <p className="header-subtitle">Powered by Advanced AI</p>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">⚡ Powered by AI</div>
        <h1 className="hero-title">
          Write anything, <span>instantly.</span>
        </h1>
        <p className="hero-subtitle">
          Generate polished blog posts, captions, emails, and product copy —
          tuned to your tone and length.
        </p>
      </section>

      {/* GRID */}
      <section className="grid">
        <Form onGenerate={handleGenerate} loading={loading} />
        <Output content={content} />
      </section>
    </main>
  );
}