import React from 'react';

/**
 * Reusable Button Component
 * Supports multiple variants conforming to Quiet Futurism aesthetics.
 */
export default function Button({
  children,
  onClick,
  variant = 'secondary',
  size = 'md',
  icon: Icon,
  disabled = false,
  type = 'button',
  className = '',
  title,
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'sm' ? 'btn-sm' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : 16} />}
      {children}
    </button>
  );
}
