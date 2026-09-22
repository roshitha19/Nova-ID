import React, { useState } from 'react';
import IdentityTab from './IdentityTab';
import AcademicTab from './AcademicTab';
import ContactTab from './ContactTab';
import AppearanceTab from './AppearanceTab';
import CompletionRing from './CompletionRing';

/**
 * IdentityBuilder Component
 * Refined editorial workspace with elegant numbered navigation tabs:
 * 01 IDENTITY • 02 ACADEMICS • 03 CONTACT • 04 STYLE
 */
export default function IdentityBuilder({
  formData,
  onChange,
  onPhotoChange,
  onPhotoRemove,
  activeTheme,
  onThemeChange,
  themeMode,
  onToggleThemeMode,
  completionPercentage,
}) {
  const [activeTab, setActiveTab] = useState('identity');

  const tabs = [
    { id: 'identity', number: '01', label: 'IDENTITY' },
    { id: 'academics', number: '02', label: 'ACADEMICS' },
    { id: 'contact', number: '03', label: 'CONTACT' },
    { id: 'appearance', number: '04', label: 'STYLE' },
  ];

  return (
    <section className="identity-builder-panel" aria-label="Identity Studio Workspace">
      <div className="builder-header">
        <div className="builder-title-group">
          <h2>CREATE YOUR IDENTITY</h2>
          <p>Shape the details. We'll handle the rest.</p>
        </div>
      </div>

      {/* Elegant Numbered Section Navigation */}
      <nav className="builder-tabs-nav" aria-label="Workspace Sections">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${isActive ? 'is-active' : ''}`}
            >
              <span className="tab-number">{tab.number}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Active Tab Pane */}
      <div className="builder-tab-body">
        {activeTab === 'identity' && (
          <IdentityTab
            formData={formData}
            onChange={onChange}
            onPhotoChange={onPhotoChange}
            onPhotoRemove={onPhotoRemove}
          />
        )}

        {activeTab === 'academics' && (
          <AcademicTab formData={formData} onChange={onChange} />
        )}

        {activeTab === 'contact' && (
          <ContactTab formData={formData} onChange={onChange} />
        )}

        {activeTab === 'appearance' && (
          <AppearanceTab
            activeTheme={activeTheme}
            onThemeChange={onThemeChange}
            themeMode={themeMode}
            onToggleThemeMode={onToggleThemeMode}
          />
        )}
      </div>

      {/* Identity Signal Completion Meter */}
      <CompletionRing percentage={completionPercentage} />
    </section>
  );
}
