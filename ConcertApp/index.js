import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import concerts from './reducers';
import './reset.scss';
import 'typeface-roboto'
import './scss/styles.scss';
import App from './app';

const store = createStore(concerts, applyMiddleware(thunk));

render(
  <Provider store={store}>
  	<App/>
  </Provider>,
  document.getElementById('app')
)
