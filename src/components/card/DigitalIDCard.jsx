import React, { useState, useRef, useCallback } from 'react';
import { RefreshCw, Sparkles, Printer } from 'lucide-react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Button from '../common/Button';

/**
 * DigitalIDCard Component
 * Implements 3D mouse tracking, spring damping, perspective tilt,
 * 180° backface flip, and restrained holographic glare calculations.
 */
export default function DigitalIDCard({
  formData,
  activeTheme = 'aurora',
  onPrint,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [glareState, setGlareState] = useState({ x: 50, y: 50, isHovered: false });
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 550ms cubic-bezier(0.16, 1, 0.3, 1)',
  });

  const cardRef = useRef(null);

  // Restrained 3D Mouse Tilt (max 8 degrees for physical editorial calm)
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setGlareState({ x: glareX, y: glareY, isHovered: true });
    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
      transition: 'transform 80ms ease-out',
    });
  }, []);

  const handleMouseEnter = () => {
    setGlareState((prev) => ({ ...prev, isHovered: true }));
  };

  const handleMouseLeave = () => {
    setGlareState({ x: 50, y: 50, isHovered: false });
    setTiltStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
    });
  };

  // Flip Toggle
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    if (!hasInteracted) setHasInteracted(true);
  };

  const themeClass = `theme-${activeTheme}`;

  return (
    <div className="credential-stage-panel">
      {/* Telemetry Stage Header */}
      <div className="stage-telemetry-header">
        <span>STUDENT IDENTITY NETWORK</span>
        <span className="telemetry-accent">● SECURE PREVIEW</span>
      </div>

      {/* 3D Perspective Card Scene */}
      <div
        ref={cardRef}
        className="card-scene"
        style={tiltStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleFlip}
        role="region"
        aria-label="Interactive 3D Digital Identity Credential"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleFlip();
          }
        }}
        title="Click to flip credential"
      >
        <div className={`card-flipper ${isFlipped ? 'is-flipped' : ''}`}>
          <CardFront
            formData={formData}
            themeClass={themeClass}
            glareState={glareState}
          />
          <CardBack
            formData={formData}
            themeClass={themeClass}
            glareState={glareState}
          />
        </div>
      </div>

      {/* Interactive Micro-hint */}
      {!hasInteracted ? (
        <span className="interactive-hint">
          <Sparkles size={12} />
          Click card to inspect reverse face
        </span>
      ) : (
        <span className="interactive-hint" style={{ opacity: 0.75 }}>
          {isFlipped ? 'Displaying Reverse (Verification & Legal Terms)' : 'Displaying Obverse (Biometrics & Identity)'}
        </span>
      )}

      {/* Stage Action Controls */}
      <div className="stage-action-toolbar no-print">
        <Button
          variant="secondary"
          size="sm"
          icon={RefreshCw}
          onClick={handleFlip}
        >
          {isFlipped ? 'Rotate to Obverse' : 'Rotate to Reverse'}
        </Button>

        <Button
          variant="primary"
          size="sm"
          icon={Printer}
          onClick={onPrint}
        >
          Print Credential
        </Button>
      </div>

      {/* Hidden print header for print isolation */}
      <div className="print-document-header">
        <div className="print-document-title">NOVA ID — Institutional Credential</div>
        <div className="print-document-sub">Generated via NOVA Digital Identity Studio • Chromatic Noir Output</div>
      </div>
    </div>
  );
}
