import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './header.scss';
import CartIcon from '../cart-icon/CartIcon';
import Cart from '../cart-dropdown/CardDrop';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contacts'>
          CONTACTS
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            {' '}
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <Cart />}
    </div>
  );
};

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  hidden: cart.hidden,
});

export default connect(mapStateToProps)(Header);
