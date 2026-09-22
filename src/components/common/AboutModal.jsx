import React from 'react';
import { X, ShieldCheck, Sparkles, Layers, Printer } from 'lucide-react';
import Button from './Button';

/**
 * AboutModal Component
 * Elegant, user-facing product modal providing studio information
 * without exposed technical jargon or academic concept lists.
 */
export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-eyebrow">DIGITAL IDENTITY STUDIO</span>
            <h3 className="modal-title">ABOUT NOVA ID</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-description">
            Nova ID reimagines the college identity credential as a personal signature.
            Combining editorial design with futuristic cryptographic aesthetics, the studio allows
            students and academic institutions to generate bespoke, print-isolated digital identities in real-time.
          </p>

          <div className="modal-features-grid">
            <div className="modal-feature-item">
              <ShieldCheck size={16} color="var(--accent-gold)" />
              <div>
                <strong>Cryptographic Precision</strong>
                <span>Deterministic 2D matrix visual and verified security checksum.</span>
              </div>
            </div>

            <div className="modal-feature-item">
              <Layers size={16} color="var(--accent-jade)" />
              <div>
                <strong>Physical 3D Spatial Depth</strong>
                <span>Fluid mouse-perspective tilting and seamless double-sided rotation.</span>
              </div>
            </div>

            <div className="modal-feature-item">
              <Sparkles size={16} color="var(--accent-coral)" />
              <div>
                <strong>Chromatic Noir Aesthetics</strong>
                <span>Three bespoke moods: Aurora (Jade), Archive (Gold), and Ember (Coral).</span>
              </div>
            </div>

            <div className="modal-feature-item">
              <Printer size={16} color="var(--accent-cyan)" />
              <div>
                <strong>Isolated Print Output</strong>
                <span>Zero-chrome high resolution printing calibrated with authentic crop marks.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <span className="modal-version">VERSION 2.4 // CHROMATIC NOIR</span>
          <Button variant="primary" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
