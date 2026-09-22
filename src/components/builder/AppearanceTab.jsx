import React from 'react';
import { Sun, Moon, Check } from 'lucide-react';
import { THEMES } from '../../data/showcaseData';
import Button from '../common/Button';

/**
 * AppearanceTab Component
 * Controls visual credential identity moods:
 * 1. AURORA (Deep charcoal + jade + soft cyan)
 * 2. ARCHIVE (Warm ivory + antique gold + graphite)
 * 3. EMBER (Deep charcoal + dusty coral + copper)
 */
export default function AppearanceTab({
  activeTheme,
  onThemeChange,
  themeMode,
  onToggleThemeMode,
}) {
  return (
    <div className="tab-content-pane">
      <div className="form-field-group">
        <label className="form-label">IDENTITY MOOD</label>
        <span className="form-hint" style={{ marginBottom: '12px', display: 'block' }}>
          Select a bespoke cryptographic aesthetic for your credential:
        </span>

        <div className="theme-selector-grid">
          {THEMES.map((theme) => {
            const isSelected = activeTheme === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`theme-card-option ${isSelected ? 'is-selected' : ''}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onThemeChange(theme.id);
                  }
                }}
              >
                <div
                  className="theme-color-preview-bar"
                  style={{ background: theme.colorPreview }}
                />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="theme-title">{theme.name}</span>
                  {isSelected && <Check size={14} color="var(--accent-gold)" />}
                </div>
                <span className="theme-subtitle-tag">{theme.subtitle}</span>
                <span className="theme-desc">{theme.description}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mode-switch-group">
        <div>
          <span className="form-label" style={{ display: 'block', marginBottom: '2px' }}>
            AMBIENT LIGHTING
          </span>
          <span className="form-hint">
            {themeMode === 'dark' ? 'Chromatic Noir Dark Studio' : 'Warm Editorial Light Mode'}
          </span>
        </div>

        <Button
          variant="secondary"
          size="sm"
          icon={themeMode === 'dark' ? Sun : Moon}
          onClick={onToggleThemeMode}
        >
          {themeMode === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
        </Button>
      </div>
    </div>
  );
}
