import React, { useState } from 'react';
import { CustomButton } from '../custom-button/customButton';
import { FormInput } from '../form-input/formInput';

import './sign-in.scss';
import {
  googleSignInStart as googleSignInStartAC,
  emailSignInStart as emailSignInStartAC,
} from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn = (props) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = props;

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const { googleSignInStart } = props;
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='E-mail'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStartAC()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStartAC({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
