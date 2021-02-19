import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './redux/rootReducer';
import rootSaga from './sagas';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const env = process.env.NODE_ENV;
const store =
  env === 'production'
    ? createStore(reducer, applyMiddleware(sagaMiddleware, logger))
    : createStore(reducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
