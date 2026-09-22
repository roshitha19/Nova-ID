import React from 'react';
import InputField from '../common/InputField';
import SelectField from '../common/SelectField';
import { DEPARTMENT_OPTIONS, YEAR_OPTIONS, SECTION_OPTIONS } from '../../data/showcaseData';

/**
 * AcademicTab Component
 * Controls university credentials, department, year, section, and skills.
 */
export default function AcademicTab({ formData, onChange }) {
  // Parse dynamic skill tags
  const skillList = formData.skills
    ? formData.skills
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="tab-content-pane">
      <InputField
        label="COLLEGE / UNIVERSITY"
        name="collegeName"
        value={formData.collegeName}
        onChange={onChange}
        placeholder="e.g. Nova Institute of Technology"
        required
      />

      <SelectField
        label="ACADEMIC DEPARTMENT"
        name="department"
        value={formData.department}
        onChange={onChange}
        options={DEPARTMENT_OPTIONS}
        required
      />

      <div className="form-grid-2col">
        <SelectField
          label="ACADEMIC YEAR"
          name="year"
          value={formData.year}
          onChange={onChange}
          options={YEAR_OPTIONS}
          required
        />

        <SelectField
          label="SECTION / COHORT"
          name="section"
          value={formData.section}
          onChange={onChange}
          options={SECTION_OPTIONS}
          required
        />
      </div>

      <div className="form-field-group">
        <InputField
          label="SPECIALIZATIONS / SKILLS"
          name="skills"
          value={formData.skills}
          onChange={onChange}
          placeholder="e.g. React, JavaScript, AI, Distributed Systems"
          hint="Separate skills with commas to generate credential capsules."
        />

        {skillList.length > 0 && (
          <div style={{ marginTop: '8px' }}>
            <span className="form-label" style={{ fontSize: '0.58rem', display: 'block', marginBottom: '6px' }}>
              CREDENTIAL SKILL TAGS
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {skillList.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="card-skill-capsule"
                  style={{ fontSize: '0.62rem', padding: '3px 8px' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
