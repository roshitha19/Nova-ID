import React from 'react';

/**
 * HolographicFoil Component
 * Refined specular sheen utilizing restrained Chromatic Noir tones:
 * Warm white, antique gold, muted jade, and dusty coral.
 * Zero rainbow gaming RGB. Only visible upon cursor interaction.
 */
export default function HolographicFoil({ glareX = 50, glareY = 50, isHovered = false }) {
  if (!isHovered) return null;

  return (
    <div
      className="card-glare"
      style={{
        background: `radial-gradient(
          circle 240px at ${glareX}% ${glareY}%,
          rgba(244, 240, 230, 0.4) 0%,
          rgba(214, 168, 95, 0.22) 28%,
          rgba(134, 168, 151, 0.18) 50%,
          rgba(215, 140, 120, 0.12) 68%,
          transparent 82%
        )`,
        opacity: isHovered ? 0.8 : 0,
      }}
      aria-hidden="true"
    />
  );
}
