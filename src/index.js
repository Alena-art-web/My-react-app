import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import store from './redux/store';
import { Provider } from 'react-redux';

const firebaseConfig = {
  apiKey: "AIzaSyCod6X5Z4IAK2DQnxCTxY1XJM1k9SG1Ik0",
  authDomain: "time-app-6e599.firebaseapp.com",
  databaseURL: "https://time-app-6e599-default-rtdb.firebaseio.com",
  projectId: "time-app-6e599",
  storageBucket: "time-app-6e599.appspot.com",
  messagingSenderId: "836009904086",
  appId: "1:836009904086:web:a6160b8f865f6fc3e30677",
  measurementId: "G-ZRGT53TSBT"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

