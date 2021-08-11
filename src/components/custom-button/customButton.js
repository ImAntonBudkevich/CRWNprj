import React from 'react';

import './customButton.scss';

export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...restProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${
        inverted ? 'inverted' : ''
      } custom-button`}
      {...restProps}
    >
      {children}
    </button>
  );
};
