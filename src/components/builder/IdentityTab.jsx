import React from 'react';
import InputField from '../common/InputField';
import SelectField from '../common/SelectField';
import PhotoUploader from './PhotoUploader';
import { ROLE_OPTIONS, BLOOD_GROUPS } from '../../data/showcaseData';

/**
 * IdentityTab Component
 * Controlled personal credentials in Chromatic Noir format.
 */
export default function IdentityTab({
  formData,
  onChange,
  onPhotoChange,
  onPhotoRemove,
}) {
  return (
    <div className="tab-content-pane">
      <div className="form-grid-2col">
        <InputField
          label="FULL NAME"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          placeholder="e.g. Roshitha Gandla"
          required
        />

        <InputField
          label="STUDENT ID"
          name="studentId"
          value={formData.studentId}
          onChange={onChange}
          placeholder="e.g. VU26CSE1042"
          required
        />
      </div>

      <div className="form-grid-2col">
        <SelectField
          label="CREDENTIAL ROLE"
          name="role"
          value={formData.role}
          onChange={onChange}
          options={ROLE_OPTIONS}
          required
        />

        <InputField
          label="DATE OF BIRTH"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={onChange}
        />
      </div>

      <div className="form-grid-2col">
        <SelectField
          label="BLOOD GROUP"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={onChange}
          options={BLOOD_GROUPS}
        />

        <InputField
          label="PERSONAL TAGLINE"
          name="tagline"
          value={formData.tagline}
          onChange={onChange}
          placeholder="e.g. Create. Explore. Impact."
          maxLength={45}
        />
      </div>

      <PhotoUploader
        photoUrl={formData.photoUrl}
        onPhotoChange={onPhotoChange}
        onPhotoRemove={onPhotoRemove}
      />
    </div>
  );
}
