import React, { Component } from 'react';

import { HomePage } from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import { Header } from './components/header/header';
import { SignInOut } from './pages/sign-in-out/sign-in-out';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
