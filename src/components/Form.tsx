"use client";

import { useState } from "react";

interface Props {
  onGenerate: (data: {
    topic: string;
    tone: string;
    wordCount: number;
  }) => void;
  loading: boolean;
}

export default function Form({ onGenerate, loading }: Props) {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Professional");
  const [wordCount, setWordCount] = useState(400);

  const isDisabled = !topic.trim() || loading;

  return (
    <div className="card">
      <h2 className="card-title">🎯 Generate Content</h2>
      
      {/* Topic */}
      <div className="form-group">
        <label className="label">📝 Topic</label>
        <input
          type="text"
          placeholder="e.g. The future of remote work"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="input"
        />
      </div>

      {/* Row */}
      <div className="row">
        <div className="form-group">
          <label className="label">📄 Content Type</label>
          <select className="input select-input">
            <option>Blog Post</option>
            <option>Email</option>
            <option>Social Media Caption</option>
            <option>Product Description</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label">💬 Tone</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="input select-input"
          >
            <option>Professional</option>
            <option>Casual</option>
            <option>Friendly</option>
            <option>Creative</option>
            <option>Technical</option>
          </select>
        </div>
      </div>

      {/* Slider */}
      <div className="slider-container">
        <div className="slider-label">
          <span className="slider-title">📏 Word Count</span>
          <span className="word-count-badge">~{wordCount} words</span>
        </div>

        <input
          type="range"
          min={100}
          max={1000}
          value={wordCount}
          onChange={(e) => setWordCount(Number(e.target.value))}
          className="slider"
        />

        <div className="slider-values">
          <span>100</span>
          <span>400</span>
          <span>1000</span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => onGenerate({ topic, tone, wordCount })}
        disabled={isDisabled}
        className={`btn ${loading ? "btn-loading" : "btn-default"}`}
      >
        {loading ? (
          <>
            <span className="loader"></span>
            Generating...
          </>
        ) : (
          <>✨ Generate Content</>
        )}
      </button>
    </div>
  );
}