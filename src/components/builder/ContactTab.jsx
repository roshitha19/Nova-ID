import React from 'react';
import InputField from '../common/InputField';

/**
 * ContactTab Component
 * Controls institutional email, telephone, and campus location.
 */
export default function ContactTab({ formData, onChange }) {
  return (
    <div className="tab-content-pane">
      <InputField
        label="INSTITUTIONAL EMAIL"
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        placeholder="e.g. roshitha.g@novatech.edu"
        required
      />

      <InputField
        label="CONTACT TELEPHONE"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={onChange}
        placeholder="e.g. +1 (555) 234-8901"
      />

      <InputField
        label="CAMPUS / CITY LOCATION"
        name="city"
        value={formData.city}
        onChange={onChange}
        placeholder="e.g. San Francisco Campus / Innovation Hub"
      />
    </div>
  );
}
