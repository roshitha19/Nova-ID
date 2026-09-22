import React from 'react';

/**
 * CompletionRing Component
 * Minimal orbital indicator tracking the real-time identity signal strength.
 */
export default function CompletionRing({ percentage = 0 }) {
  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const isComplete = percentage >= 100;

  return (
    <div className="completion-widget">
      <div className="ring-svg-wrapper">
        <svg width="48" height="48" viewBox="0 0 48 48">
          {/* Faint Outer Ring */}
          <circle
            cx="24"
            cy="24"
            r={radius + 3}
            fill="none"
            stroke="var(--border-subtle)"
            strokeWidth="0.8"
            strokeDasharray="2 4"
          />
          {/* Background Track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="var(--border-subtle)"
            strokeWidth="3"
          />
          {/* Active Progress */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke={isComplete ? 'var(--accent-jade)' : 'var(--accent-gold)'}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 24 24)"
            style={{
              transition: 'stroke-dashoffset 450ms cubic-bezier(0.16, 1, 0.3, 1), stroke 400ms ease',
            }}
          />
        </svg>
      </div>

      <div className="completion-meta">
        <span className="completion-label">IDENTITY SIGNAL</span>
        <div className="completion-score">
          <span>{percentage}%</span>
          {isComplete && <span className="ready-badge">IDENTITY READY ✦</span>}
        </div>
      </div>
    </div>
  );
}
