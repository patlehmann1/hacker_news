import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/app';
import Footer from './components/footer'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <div>
  <div className='app_wrapper'>
    <App />
  </div>
  <Footer />
  </div>
  </Provider>
  , document.querySelector('.container'));
