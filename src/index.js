import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// router obj decides what react component we need to render
// history obj tells how to interpret changes to url
import { Router, browserHistory } from 'react-router';
import routes from './routes'
import reducers from './reducers';
import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
