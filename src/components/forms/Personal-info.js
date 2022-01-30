import React from "react";

export default function PersonalInfo({ handleChange }) {
  return (
    <div className="personal-info form">
      <h2 className="title">Personal Information</h2>
      <div className="dual-field">
        <label htmlFor="firstName">
          First name
          <input
            type="text"
            autoComplete="new-password"
            name="firstName"
            id="first-name"
            placeholder="first name"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Last name
          <input
            type="text"
            autoComplete="new-password"
            name="lastName"
            id="last-name"
            placeholder="last name"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="dual-field">
        <label>
          Phone number
          <input
            name="phoneNumber"
            type="text"
            autoComplete="new-password"
            placeholder="Phone number"
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="text"
            autoComplete="new-password"
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>
          Website
          <input
            name="website"
            type="text"
            autoComplete="new-password"
            placeholder="Website"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>
          Job Title
          <input
            name="jobTitle"
            type="text"
            autoComplete="new-password"
            placeholder="Job title"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>
          Street
          <input
            name="street"
            type="text"
            autoComplete="new-password"
            placeholder="Street"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="dual-field">
        <label>
          Postcode
          <input
            name="postcode"
            type="text"
            autoComplete="new-password"
            placeholder="Postcode"
            onChange={handleChange}
          />
        </label>
        <label>
          City
          <input
            name="city"
            type="text"
            autoComplete="new-password"
            placeholder="City"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <label>
          Profile
          <textarea
            name="profile"
            placeholder="Describe yourself"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}
