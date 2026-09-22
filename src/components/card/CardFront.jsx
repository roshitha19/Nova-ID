import React, { useMemo } from 'react';
import { Wifi, ShieldCheck } from 'lucide-react';
import HolographicFoil from './HolographicFoil';

/**
 * CardFront Component
 * Asymmetrical editorial layout conforming to Chromatic Noir:
 * - Top: NOVA ID mark, Institution, STUDENT CREDENTIAL, verified indicator
 * - Middle: Biometric Portrait / Dynamic Monogram Initials, Student Name, Role, Tagline
 * - Bottom: Student ID, Department / Program, Year & Section, Blood Group, Skill capsules
 * - Subtle technical microprint around borders and abstract identity watermark.
 */
export default function CardFront({
  formData,
  themeClass,
  glareState,
}) {
  // Dynamic Initials Calculation from full name
  const initials = useMemo(() => {
    const raw = formData.fullName?.trim();
    if (!raw) return 'NO';
    const words = raw.split(/\s+/);
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }, [formData.fullName]);

  // Dynamic Skill Tags Parsing
  const skillTags = useMemo(() => {
    if (!formData.skills) return ['React', 'JavaScript', 'AI'];
    const tags = formData.skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    return tags.length > 0 ? tags.slice(0, 4) : ['React', 'JavaScript', 'AI'];
  }, [formData.skills]);

  // Derived Cryptographic Security Code
  const securityHash = useMemo(() => {
    const id = formData.studentId || 'VU26CSE1042';
    let val = 0;
    for (let i = 0; i < id.length; i++) {
      val = (val * 31 + id.charCodeAt(i)) % 99999999;
    }
    return `ID-HASH // ${val.toString(16).toUpperCase().padStart(8, '0')}`;
  }, [formData.studentId]);

  return (
    <div className={`card-face card-face-front ${themeClass}`}>
      {/* Precision Micro-grid background layer */}
      <div className="card-grid-layer" />

      {/* Abstract Background Identity Watermark */}
      <div className="card-abstract-watermark" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.3" />
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="1" strokeDasharray="40 60" opacity="0.4" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
          <path d="M100 10 L100 190 M10 100 L190 100" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.2" />
        </svg>
      </div>

      {/* Holographic Security Foil Strip */}
      <div className="holographic-strip" />

      {/* Subtle Microtext Edge Track */}
      <div className="card-edge-microprint" aria-hidden="true">
        <span>NOVA IDENTITY PROTOCOL // 256-BIT ENCRYPTED CREDENTIAL • ARCHIVAL SPECIFICATION</span>
      </div>

      {/* Precision Corner Ticks */}
      <span className="card-corner-tick tick-tl" />
      <span className="card-corner-tick tick-tr" />
      <span className="card-corner-tick tick-bl" />
      <span className="card-corner-tick tick-br" />

      {/* Dynamic Specular Glare */}
      <HolographicFoil
        glareX={glareState.x}
        glareY={glareState.y}
        isHovered={glareState.isHovered}
      />

      <div className="card-front-content">
        {/* ================= TOP SECTION ================= */}
        <div className="card-front-header">
          <div className="institution-block">
            <div className="nova-mark" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--card-highlight)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="institution-meta">
              <span className="institution-name">
                {formData.collegeName || 'Nova Institute of Technology'}
              </span>
              <span className="credential-tag">STUDENT CREDENTIAL</span>
            </div>
          </div>

          <div className="verified-pill">
            <span className="verified-dot" />
            <span>VERIFIED ✦</span>
          </div>
        </div>

        {/* ================= MIDDLE SECTION ================= */}
        <div className="card-middle-section">
          <div className="card-biometric-row">
            {/* Biometric Portrait Frame */}
            <div className="photo-frame-wrapper">
              <div className="photo-frame">
                {formData.photoUrl ? (
                  <img
                    src={formData.photoUrl}
                    alt={`Portrait of ${formData.fullName || 'Student'}`}
                    className="student-photo-img"
                  />
                ) : (
                  <div className="photo-initials-fallback">
                    <span className="initials-text">{initials}</span>
                    <span className="initials-caption">DIGITAL ID</span>
                  </div>
                )}
                <div className="photo-holo-overlay" />
              </div>
            </div>

            {/* Smart EMV Microchip & NFC Telemetry */}
            <div className="chip-telemetry-col">
              <div className="smart-chip-visual" title="Integrated Security Chip" />
              <div className="nfc-badge">
                <Wifi size={11} style={{ transform: 'rotate(90deg)' }} />
                <span>NFC 2.4GHz</span>
              </div>
              <div className="blood-group-badge" title="Blood Group">
                {formData.bloodGroup || 'O+'}
              </div>
            </div>
          </div>

          {/* Student Name & Role */}
          <div className="student-primary-info">
            <h3 className="student-name-text">
              {formData.fullName || 'STUDENT NAME'}
            </h3>
            <div className="student-role-line">
              <span className="role-badge">{formData.role || 'Student'}</span>
              <span className="role-sep">•</span>
              <span className="role-id-code">{formData.studentId || 'VU26CSE1042'}</span>
            </div>
            {formData.tagline && (
              <p className="student-tagline">"{formData.tagline}"</p>
            )}
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="card-bottom-section">
          <div className="academic-meta-grid">
            <div className="meta-field">
              <span className="meta-field-label">PROGRAM / DEPARTMENT</span>
              <span className="meta-field-value" title={formData.department}>
                {formData.department || 'Computer Science & Engineering'}
              </span>
            </div>

            <div className="meta-field">
              <span className="meta-field-label">CLASS / COHORT</span>
              <span className="meta-field-value">
                {formData.year || '3rd Year'} • SEC {formData.section || 'A'}
              </span>
            </div>
          </div>

          {/* Dynamic Skill Tag Capsules */}
          <div className="card-skills-row" aria-label="Student Specializations">
            {skillTags.map((skill, i) => (
              <span key={`${skill}-${i}`} className="card-skill-capsule">
                {skill}
              </span>
            ))}
          </div>

          {/* Card Footer Hash & ID Bar */}
          <div className="card-front-footer">
            <span className="id-code-mono">
              {formData.studentId || 'VU26CSE1042'}
            </span>
            <span className="security-hash">{securityHash}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
