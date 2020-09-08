import React from 'react';

const UserName = () => {
  return (
    <div className="mb-3">
      <label forHtml="UserName">User Name</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">@</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          required
        />
        <div className="invalid-feedback w-100">Your username is required.</div>
      </div>
    </div>
  );
};

export default UserName;
