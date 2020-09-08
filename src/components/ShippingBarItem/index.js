import React from 'react';

const ShippingBarItem = (props) => {
  const { discription } = props;
  return (
    <div class="form-check al">
      <input
        class="form-check-input "
        type="checkbox"
        value=""
        id="defaultCheck1"
        style={{ width: '1rem', height: '1rem' }}
      />
      <label class="form-check-label " for="defaultCheck1">
        {discription}
      </label>
    </div>
  );
};

export default ShippingBarItem;
