import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart as signUpStartAC } from '../../redux/user/user.actions';
import { CustomButton } from '../custom-button/customButton';
import { FormInput } from '../form-input/formInput';

import './sign-up.scss';

const SignUp = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { signUpStart } = props;

    if (password !== confirmPassword) {
      alert('password dont match');
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Name'
          required
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='E-mail'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm password'
          required
        ></FormInput>
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (newUser) => dispatch(signUpStartAC(newUser)),
});

export default connect(null, mapDispatchToProps)(SignUp);
