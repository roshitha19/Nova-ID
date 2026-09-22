import React, { useMemo } from 'react';
import QRVisual, { BarcodeVisual } from './QRVisual';
import HolographicFoil from './HolographicFoil';

/**
 * CardBack Component
 * Reverse credential face with high-coercivity magnetic stripe,
 * authorized signature strip, QR visual, contact matrix, terms, and barcode.
 */
export default function CardBack({
  formData,
  themeClass,
  glareState,
}) {
  // Format Date of Birth for clean display
  const formattedDob = useMemo(() => {
    if (!formData.dob) return '2004-06-18';
    try {
      const d = new Date(formData.dob);
      return isNaN(d.getTime()) ? formData.dob : d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return formData.dob;
    }
  }, [formData.dob]);

  return (
    <div className={`card-face card-face-back ${themeClass}`}>
      {/* Micro-grid layer */}
      <div className="card-grid-layer" />

      {/* Abstract Background Identity Watermark */}
      <div className="card-abstract-watermark" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.3" />
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="1" strokeDasharray="40 60" opacity="0.4" />
        </svg>
      </div>

      {/* Corner Ticks */}
      <span className="card-corner-tick tick-tl" />
      <span className="card-corner-tick tick-tr" />
      <span className="card-corner-tick tick-bl" />
      <span className="card-corner-tick tick-br" />

      {/* Specular glare */}
      <HolographicFoil
        glareX={glareState.x}
        glareY={glareState.y}
        isHovered={glareState.isHovered}
      />

      <div className="card-back-content">
        {/* High-coercivity magnetic stripe simulation */}
        <div className="card-mag-stripe" />

        <div className="card-back-body">
          {/* Authorized Signature Area */}
          <div className="signature-section">
            <div className="signature-strip">
              <span className="signature-script">
                {formData.fullName || 'Authorized Signature'}
              </span>
              <span className="signature-security-code">
                SEC-{(formData.studentId || '1042').slice(-4)}
              </span>
            </div>
            <span className="signature-label">
              AUTHORIZED CREDENTIAL HOLDER SIGNATURE
            </span>
          </div>

          {/* Procedural QR visual and verified contact records */}
          <div className="card-back-grid">
            <QRVisual studentId={formData.studentId || 'VU26CSE1042'} size={78} />

            <div className="back-contact-list">
              <div className="back-contact-item">
                <span className="back-contact-label">INSTITUTIONAL EMAIL</span>
                <span className="back-contact-val" title={formData.email}>
                  {formData.email || 'student@novatech.edu'}
                </span>
              </div>

              <div className="back-contact-item">
                <span className="back-contact-label">EMERGENCY TELEPHONE</span>
                <span className="back-contact-val">
                  {formData.phone || '+1 (555) 234-8901'}
                </span>
              </div>

              <div className="back-contact-item">
                <span className="back-contact-label">DOB / LOCATION</span>
                <span className="back-contact-val">
                  {formattedDob} • {formData.city ? formData.city.split('/')[0].trim() : 'Campus'}
                </span>
              </div>
            </div>
          </div>

          {/* Institutional disclaimer and legal notice */}
          <div className="card-terms-block">
            <p>
              This digital credential remains the property of {formData.collegeName || 'Nova Institute of Technology'}.
              Non-transferable. Valid only when presented by authorized bearer with matching biometric cryptographic record.
            </p>
          </div>

          {/* Machine-Readable Barcode Strip */}
          <BarcodeVisual code={formData.studentId || 'VU26CSE1042'} />
        </div>
      </div>
    </div>
  );
}
