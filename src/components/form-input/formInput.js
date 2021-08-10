import React from 'react';

import './formInput.scss';

export const FormInput = ({ handleChange, label, ...restProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...restProps} />
      {label ? (
        <label
          className={`${
            restProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
