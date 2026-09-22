import React, { useRef, useState } from 'react';
import { Camera, X, RefreshCw } from 'lucide-react';
import Button from '../common/Button';

/**
 * Redesigned PhotoUploader Component
 * Geometric portrait frame with authentic credential aesthetics.
 */
export default function PhotoUploader({ photoUrl, onPhotoChange, onPhotoRemove }) {
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onPhotoChange(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="form-field-group">
      <div className="form-label-row">
        <label className="form-label">PORTRAIT PHOTOGRAPH</label>
        {photoUrl && <span className="field-indicator-dot" title="Portrait loaded" />}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        accept="image/png, image/jpeg, image/webp"
        style={{ display: 'none' }}
      />

      <div
        className={`portrait-frame-zone ${isDragOver ? 'drag-over' : ''} ${photoUrl ? 'has-photo' : ''}`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInputRef.current?.click();
          }
        }}
      >
        <div className="portrait-geometric-box">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Uploaded student credential portrait"
              className="portrait-preview-img"
            />
          ) : (
            <div className="portrait-placeholder-content">
              <Camera size={20} color="var(--accent-gold)" />
              <span className="portrait-upload-cta">ADD PORTRAIT</span>
            </div>
          )}
          <span className="frame-tick tick-tl" />
          <span className="frame-tick tick-tr" />
          <span className="frame-tick tick-bl" />
          <span className="frame-tick tick-br" />
        </div>

        <div className="portrait-meta-info">
          <span className="portrait-title">
            {photoUrl ? 'Biometric Portrait Synchronized' : 'Visual Identity Capture'}
          </span>
          <span className="portrait-sub">
            {photoUrl
              ? 'Click to change or select a new photo'
              : 'Drag & drop image or click to browse (JPG, PNG, WebP)'}
          </span>

          {photoUrl && (
            <div className="portrait-action-btns" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="subtle"
                size="sm"
                icon={RefreshCw}
                onClick={() => fileInputRef.current?.click()}
                title="Replace photograph"
              >
                Change
              </Button>
              <Button
                variant="subtle"
                size="sm"
                icon={X}
                onClick={onPhotoRemove}
                title="Remove photograph"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
