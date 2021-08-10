import React from 'react';

import './customButton.scss';

export const CustomButton = ({ children, isGoogleSignIn, ...restProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...restProps}
    >
      {children}
    </button>
  );
};
