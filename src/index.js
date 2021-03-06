import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store';
import './index.css';
import ApolloProvider from './ApolloProvider';
import { AuthProvider } from './context/auth'; // TODO: Rework into redux toolkit
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider>
      <AuthProvider>
        <ReduxProvider store={store}>
          <Router>
            <App />
          </Router>
        </ReduxProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
