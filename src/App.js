// src/App.js
import React from 'react';
import Header from './components/Header';
import PersonalityInfo from './components/PersonalityInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // You can create this file for custom styles if needed

function App() {
  return (
    <div>
      <Header />
      <PersonalityInfo />
    </div>
  );
}

export default App;
