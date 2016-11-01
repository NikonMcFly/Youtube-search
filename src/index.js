import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import routes from './routes';
// import promise from 'redux-promise'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './components/App';
import SearchBar from './components/search_bar'



const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);


const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory } >
        <Route path="/" component={ App } >
        </Route>
      </Router>
  </Provider>
  , app);
