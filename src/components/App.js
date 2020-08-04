import React, { useState , useEffect } from 'react';
import '../scss/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Users from './Users';
import Form from './Form';
import { createStore,  applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import { userReducer } from '../reducers/reducers';
import { devToolsEnhancer} from 'redux-devtools-extension';

const store = createStore(userReducer, devToolsEnhancer() );

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/register'>
          <Form />
        </Route>
        <Route path='/update/:userid'>
          <Form />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
