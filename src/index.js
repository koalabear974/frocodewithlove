import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './styles/index.css';

const firebaseConfig = {
  apiKey: "AIzaSyBubrZuE8MsJXp2wsOD5mpyEDkfkrWPRto",
  authDomain: "from-code-with-love.firebaseapp.com",
  projectId: "from-code-with-love",
  storageBucket: "from-code-with-love.appspot.com",
  messagingSenderId: "866466732220",
  appId: "1:866466732220:web:ceb0413054ed7fd64398b9",
  measurementId: "G-W5Z2Z673NJ"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
