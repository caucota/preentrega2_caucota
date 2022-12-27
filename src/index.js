import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from "./Context/CartContext";


const firebaseConfig = {
  apiKey: "AIzaSyApoiQjYcCru6se1AwrlrCtN7mjmYWpWj8",
  authDomain: "pizzeriailmondo-caucota.firebaseapp.com",
  projectId: "pizzeriailmondo-caucota",
  storageBucket: "pizzeriailmondo-caucota.appspot.com",
  messagingSenderId: "363418592611",
  appId: "1:363418592611:web:3dc361379207be28e15f56",
  measurementId: "G-YBV7E5R6BY"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
