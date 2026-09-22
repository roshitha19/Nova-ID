import React from 'react';
import { Sparkles, CheckCircle, Info } from 'lucide-react';

/**
 * Reusable Toast Notification Component
 * Renders subtle floating status signals.
 */
export default function Toast({ toasts = [] }) {
  if (!toasts.length) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-item">
          {toast.type === 'showcase' ? (
            <Sparkles size={16} color="var(--accent-copper)" />
          ) : toast.type === 'success' ? (
            <CheckCircle size={16} color="var(--accent-green)" />
          ) : (
            <Info size={16} color="var(--accent-cyan)" />
          )}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
