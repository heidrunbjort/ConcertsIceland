import React from 'react';
import Header from './components/Header';
import ConcertList from './components/ConcertList';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import concerts from './reducers';

const store = createStore(concerts, applyMiddleware(thunk));

const styles = {
  container: {
    flex: 0.9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

render(
  <Provider store={store}>
    <div>
    	<Header/>
    	<ConcertList style={styles.container}/>
    </div>
  </Provider>,
  document.getElementById('app')
)
