import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './components/Redux/moduels';
import rootReducer from './components/ReduxMiddle';
import { composeWithDevTools } from 'redux-devtools-extension';
// import myLogger from './components/ReduxMiddle/myLogger';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import { BrowserRouter} from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
