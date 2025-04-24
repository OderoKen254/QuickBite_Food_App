import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/core-components/NavBar';
import Footer from './components/core-components/Footer';
import Loader from './components/core-components/Loader';


function App() {

  // const [loading, setLoading] = useState(true);
  return (
    <div>
      <h1>Welcome to QuickBite!</h1>
    </div>
  );
}

export default App;