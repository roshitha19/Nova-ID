import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import IdentityBuilder from './components/builder/IdentityBuilder';
import DigitalIDCard from './components/card/DigitalIDCard';
import AboutModal from './components/common/AboutModal';
import Toast from './components/common/Toast';
import { SHOWCASE_PROFILE, EMPTY_PROFILE } from './data/showcaseData';
import './styles/main.css';

/**
 * NOVA ID — Digital Identity Studio
 * Redesigned in Chromatic Noir.
 * Demonstrates: Controlled Forms, Props, State, Reusable Components, Dynamic Rendering.
 */
export default function App() {
  // Master state for controlled identity fields
  const [formData, setFormData] = useState(SHOWCASE_PROFILE);

  // Bespoke identity mood themes: 'aurora' | 'archive' | 'ember'
  const [activeTheme, setActiveTheme] = useState('aurora');
  const [themeMode, setThemeMode] = useState('dark');

  // Product information modal (replaces technical inspector)
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Non-intrusive floating status feedback
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }, []);

  // Controlled form input handler
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // Portrait photo handlers
  const handlePhotoChange = useCallback((photoUrl) => {
    setFormData((prev) => ({ ...prev, photoUrl }));
    addToast('Portrait synchronized ✦', 'success');
  }, [addToast]);

  const handlePhotoRemove = useCallback(() => {
    setFormData((prev) => ({ ...prev, photoUrl: '' }));
    addToast('Portrait removed • Dynamic monogram restored', 'info');
  }, [addToast]);

  // Theme mood switcher
  const handleThemeChange = useCallback((themeId) => {
    setActiveTheme(themeId);
    const themeName = themeId.charAt(0).toUpperCase() + themeId.slice(1);
    addToast(`${themeName} mood activated ✦`, 'info');
  }, [addToast]);

  // Ambient lighting toggle
  const handleToggleThemeMode = useCallback(() => {
    setThemeMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme-mode', next);
      return next;
    });
  }, []);

  // Load showcase profile & scroll smoothly to the live credential
  const handleLoadShowcase = useCallback(() => {
    setFormData(SHOWCASE_PROFILE);
    setActiveTheme('aurora');
    addToast('Identity loaded ✦', 'showcase');

    setTimeout(() => {
      const cardEl = document.getElementById('live-credential-card');
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 120);
  }, [addToast]);

  // Reset profile action
  const handleReset = useCallback(() => {
    setFormData(EMPTY_PROFILE);
    setActiveTheme('aurora');
    addToast('Identity reset ✦', 'info');
  }, [addToast]);

  // Clean physical print / PDF isolation
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Smooth scroll to studio workspace
  const handleEnterStudio = useCallback(() => {
    const studioEl = document.getElementById('studio-workspace');
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Derived identity signal completeness percentage
  const completionPercentage = useMemo(() => {
    const fields = [
      { val: formData.fullName, weight: 15 },
      { val: formData.studentId, weight: 15 },
      { val: formData.role, weight: 10 },
      { val: formData.collegeName, weight: 10 },
      { val: formData.department, weight: 10 },
      { val: formData.year, weight: 10 },
      { val: formData.section, weight: 5 },
      { val: formData.email, weight: 10 },
      { val: formData.skills, weight: 5 },
      { val: formData.photoUrl, weight: 5 },
      { val: formData.tagline, weight: 5 },
    ];

    const total = fields.reduce((acc, curr) => {
      return curr.val && curr.val.toString().trim().length > 0
        ? acc + curr.weight
        : acc;
    }, 0);

    return Math.min(100, Math.round(total));
  }, [formData]);

  return (
    <div className="app-layout" data-theme-mode={themeMode}>
      {/* Ambient background layers */}
      <div className="bg-ambient-layer" aria-hidden="true">
        <div className="bg-ambient-grid" />
        <div className="bg-orbital-shape orbital-1" />
        <div className="bg-orbital-shape orbital-2" />
      </div>

      {/* Simplified Editorial Header */}
      <Header
        themeMode={themeMode}
        onToggleThemeMode={handleToggleThemeMode}
        onLoadShowcase={handleLoadShowcase}
        onReset={handleReset}
        onPrint={handlePrint}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      <main>
        {/* Creative Editorial Hero with Animated Identity Seal */}
        <Hero
          onEnterStudio={handleEnterStudio}
          onLoadShowcase={handleLoadShowcase}
        />

        {/* Identity Studio Workspace */}
        <div id="studio-workspace" className="workspace-container">
          <div className="workspace-grid">
            {/* Left Column: CREATE YOUR IDENTITY */}
            <IdentityBuilder
              formData={formData}
              onChange={handleInputChange}
              onPhotoChange={handlePhotoChange}
              onPhotoRemove={handlePhotoRemove}
              activeTheme={activeTheme}
              onThemeChange={handleThemeChange}
              themeMode={themeMode}
              onToggleThemeMode={handleToggleThemeMode}
              completionPercentage={completionPercentage}
            />

            {/* Right Column: Live Floating 3D Credential (The Star) */}
            <div id="live-credential-card" className="card-stage-wrapper">
              <DigitalIDCard
                formData={formData}
                activeTheme={activeTheme}
                onPrint={handlePrint}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Refined Product Footer */}
      <footer className="app-footer no-print">
        <span>NOVA ID • DIGITAL IDENTITY STUDIO • CHROMATIC NOIR SPECIFICATION</span>
      </footer>

      {/* Non-intrusive Product Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Floating Status Toasts */}
      <Toast toasts={toasts} />
    </div>
  );
}
