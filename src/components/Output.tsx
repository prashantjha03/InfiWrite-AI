"use client";

import { useState } from "react";

interface Props {
  content: string;
}

export default function Output({ content }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="output">
      {!content ? (
        <div className="placeholder">
          <div className="placeholder-icon">📄</div>
          <h3 className="placeholder-title">Your content will appear here</h3>
          <p className="placeholder-text">Fill in the form and click Generate to begin.</p>
        </div>
      ) : (
        <div className="result">
          <div className="result-header">
            <h3>✨ Generated Content</h3>
            <button
              onClick={handleCopy}
              className={`copy-btn ${copied ? "copied" : ""}`}
            >
              {copied ? "✓ Copied!" : "📋 Copy"}
            </button>
          </div>
          <div className="result-content">
            {content.split("\n").map((line, i) => (
              <p key={i} className="result-line">
                {line || <br />}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}