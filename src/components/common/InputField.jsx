import React from 'react';

/**
 * Editorial InputField Component
 * Clean integrated input with small technical uppercase label,
 * active accent underline indicator on focus, and zero bulky borders.
 */
export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  hint = '',
  required = false,
  className = '',
  maxLength,
}) {
  const isFilled = Boolean(value && value.toString().trim().length > 0);

  return (
    <div className={`form-field-group ${className}`}>
      <div className="form-label-row">
        <label htmlFor={name} className="form-label">
          {label} {required && <span className="label-required">*</span>}
        </label>
        {isFilled && <span className="field-indicator-dot" title="Synchronized" />}
      </div>
      <div className="input-wrapper-editorial">
        <input
          id={name}
          name={name}
          type={type}
          value={value ?? ''}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          className="form-input"
          autoComplete="off"
        />
        <div className="editorial-accent-line" />
      </div>
      {hint && <span className="form-hint">{hint}</span>}
    </div>
  );
}
