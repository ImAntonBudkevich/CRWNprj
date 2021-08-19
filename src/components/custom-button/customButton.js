import React from 'react';

import { CustomButtonContainer } from './customButton.styles';

export const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};
