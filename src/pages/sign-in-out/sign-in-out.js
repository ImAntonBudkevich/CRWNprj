import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-in-out.scss';

export const SignInOut = () => {
  return (
    <div className='signinout'>
      <SignIn />
      <SignUp />
    </div>
  );
};
