import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../common/Button';

/**
 * Abstract Identity Seal Visual
 * Procedural SVG rings, rotating arcs, and biometric alignment marks.
 */
function IdentitySealVisual() {
  return (
    <div className="hero-seal-wrapper" aria-hidden="true">
      <div className="seal-glow-backdrop" />
      <svg
        className="hero-seal-svg"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outermost slow dashed orbit */}
        <circle
          cx="160"
          cy="160"
          r="148"
          stroke="var(--border-subtle)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="seal-rotate-cw-slow"
        />

        {/* Second Ring with Incomplete Arc */}
        <circle
          cx="160"
          cy="160"
          r="128"
          stroke="var(--accent-gold)"
          strokeWidth="1.2"
          strokeDasharray="160 80 40 40"
          strokeOpacity="0.45"
          className="seal-rotate-ccw-medium"
        />

        {/* Alignment Crosshairs */}
        <line x1="160" y1="18" x2="160" y2="40" stroke="var(--accent-jade)" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="160" y1="280" x2="160" y2="302" stroke="var(--accent-jade)" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="18" y1="160" x2="40" y2="160" stroke="var(--accent-jade)" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="280" y1="160" x2="302" y2="160" stroke="var(--accent-jade)" strokeWidth="1.5" strokeOpacity="0.6" />

        {/* Middle Ring with Biometric Hash Ticks */}
        <circle
          cx="160"
          cy="160"
          r="104"
          stroke="var(--border-medium)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Dynamic Jade Arc */}
        <circle
          cx="160"
          cy="160"
          r="84"
          stroke="var(--accent-jade)"
          strokeWidth="1.6"
          strokeDasharray="90 180"
          strokeLinecap="round"
          strokeOpacity="0.8"
          className="seal-rotate-cw-fast"
        />

        {/* Inner Gold Arc */}
        <circle
          cx="160"
          cy="160"
          r="64"
          stroke="var(--accent-gold)"
          strokeWidth="1.8"
          strokeDasharray="50 90"
          strokeLinecap="round"
          strokeOpacity="0.9"
          className="seal-rotate-ccw-medium"
        />

        {/* Central Monogram Core */}
        <circle
          cx="160"
          cy="160"
          r="42"
          fill="var(--bg-surface)"
          stroke="var(--border-medium)"
          strokeWidth="1"
        />
        <circle
          cx="160"
          cy="160"
          r="38"
          fill="none"
          stroke="var(--accent-gold)"
          strokeWidth="1"
          strokeDasharray="2 4"
          strokeOpacity="0.5"
        />

        {/* NOVA Central Glyph */}
        <path
          d="M148 174V146L172 174V146"
          stroke="var(--text-primary)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="172" cy="146" r="2.5" fill="var(--accent-cyan)" />

        {/* Technical micro text elements */}
        <text x="160" y="96" textAnchor="middle" fill="var(--text-tertiary)" fontSize="6" fontFamily="var(--font-mono)" letterSpacing="0.2em">
          IDENTITY SEAL // SPEC 01
        </text>
        <text x="160" y="232" textAnchor="middle" fill="var(--accent-gold)" fontSize="6" fontFamily="var(--font-mono)" letterSpacing="0.25em" opacity="0.8">
          AUTHENTICATED ✦
        </text>
      </svg>
    </div>
  );
}

/**
 * Redesigned Hero Component
 * Minimal, emotional, creative, spacious.
 * Zero technical descriptions or React concept tags.
 */
export default function Hero({ onEnterStudio, onLoadShowcase }) {
  return (
    <section className="hero-section">
      <div className="hero-content-col">
        <div className="hero-eyebrow">
          <span>NOVA ID / IDENTITY STUDIO</span>
        </div>

        <h1 className="hero-headline">
          Your identity.<br />
          <span className="serif-signature">Your signature.</span>
        </h1>

        <p className="hero-tagline">
          Create a digital identity that feels unmistakably yours.
        </p>

        <div className="hero-cta-group">
          <Button
            variant="primary"
            onClick={onEnterStudio}
            icon={ArrowRight}
          >
            ENTER STUDIO →
          </Button>

          <Button
            variant="accent"
            onClick={onLoadShowcase}
            icon={Sparkles}
          >
            LOAD SHOWCASE ✦
          </Button>
        </div>
      </div>

      <div className="hero-visual-col">
        <IdentitySealVisual />
      </div>
    </section>
  );
}
