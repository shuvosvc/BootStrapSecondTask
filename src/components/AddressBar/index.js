import React from 'react';

const AddressBar = () => {
  return (
    <>
      <div className="mb-3">
        <label forHtmal="email">
          Email<span className="text-muted">(Optional)</span>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="you@example.com"
        />
        <div className="invalid-feedback">
          Please enter a valid email address for shipping updates.
        </div>
      </div>

      <div className="mb-3">
        <label forHtmal="address">Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="1234 Main St"
        />
        <div className="invalid-feedback">
          Please enter your shipping address.
        </div>
      </div>

      <div className="mb-3">
        <label forHtmal="address2">Address2</label>
        <input
          type="text"
          className="form-control"
          placeholder="Apartment or suitet"
        />
      </div>
    </>
  );
};

export default AddressBar;
