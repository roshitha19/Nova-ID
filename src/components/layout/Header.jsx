import React from 'react';
import { Sun, Moon, Printer, Sparkles, RotateCcw, Info } from 'lucide-react';
import Button from '../common/Button';

/**
 * Redesigned Header Component
 * Simplified, premium, and clean with no technical jargon in the UI.
 */
export default function Header({
  themeMode,
  onToggleThemeMode,
  onLoadShowcase,
  onReset,
  onPrint,
  onOpenAbout,
}) {
  return (
    <header className="app-header">
      <div className="brand-section">
        <div className="brand-logo-mark" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="brand-meta">
          <h1 className="brand-title">NOVA ID</h1>
          <span className="brand-subtitle">Digital Identity Studio</span>
        </div>
      </div>

      <div className="engine-status-pill">
        <span className="status-beacon-pulse" />
        <span>Identity Engine Active</span>
      </div>

      <div className="header-actions">
        <Button
          variant="subtle"
          size="sm"
          icon={Info}
          onClick={onOpenAbout}
          title="About Nova ID Digital Identity Studio"
        >
          About
        </Button>

        <Button
          variant="accent"
          size="sm"
          icon={Sparkles}
          onClick={onLoadShowcase}
          title="Load showcase identity"
        >
          Showcase
        </Button>

        <Button
          variant="secondary"
          size="sm"
          icon={RotateCcw}
          onClick={onReset}
          title="Reset profile"
        >
          Reset
        </Button>

        <Button
          variant="primary"
          size="sm"
          icon={Printer}
          onClick={onPrint}
          title="Print or Save as PDF"
        >
          Print / PDF
        </Button>

        <Button
          variant="secondary"
          size="sm"
          icon={themeMode === 'dark' ? Sun : Moon}
          onClick={onToggleThemeMode}
          title={`Switch to ${themeMode === 'dark' ? 'Warm Light' : 'Dark'} Mode`}
        >
          {themeMode === 'dark' ? 'Light' : 'Dark'}
        </Button>
      </div>
    </header>
  );
}
