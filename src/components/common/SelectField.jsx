import React from 'react';

/**
 * Editorial SelectField Component
 * Clean integrated select input with small technical uppercase label
 * and active accent underline indicator.
 */
export default function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  className = '',
}) {
  return (
    <div className={`form-field-group ${className}`}>
      <div className="form-label-row">
        <label htmlFor={name} className="form-label">
          {label} {required && <span className="label-required">*</span>}
        </label>
      </div>
      <div className="input-wrapper-editorial">
        <select
          id={name}
          name={name}
          value={value ?? ''}
          onChange={onChange}
          required={required}
          className="form-select"
        >
          {options.map((opt) => {
            const optValue = typeof opt === 'object' ? opt.value : opt;
            const optLabel = typeof opt === 'object' ? opt.label : opt;
            return (
              <option key={optValue} value={optValue}>
                {optLabel}
              </option>
            );
          })}
        </select>
        <div className="editorial-accent-line" />
      </div>
    </div>
  );
}
