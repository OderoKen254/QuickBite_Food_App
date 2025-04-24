import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/core-components/NavBar';
import Footer from './components/core-components/Footer';
import Loader from './components/core-components/Loader';


function App() {

   const [loading, setLoading] = useState(true);
   React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);



  return (
    <Router>
      {loading ? (
        <Loader size="large" text="Loading application..." />
      ) : (
        <div className="app-container">
          <NavBar />
          <main className="content">
            <Routes>
              <Route path="/" element={<h1>Welcome to QuickBite!</h1>} />
              <Route path="/cart" element={<h2>Shopping Cart</h2>} />
              <Route path="/menu" element={<h2>Our Menu</h2>} />
              <Route path="/about" element={<h2>About Us</h2>} />
              <Route path="/contact" element={<h2>Contact Us</h2>} />
              <Route path="/user-profile" element={<h2>User Profile</h2>} />
              <Route path="/user-profile/edit" element={<h2>Edit Profile</h2>} />
              <Route path="/user-profile/orders" element={<h2>Order History</h2>} />
              <Route path="/user-profile/settings" element={<h2>Settings</h2>} />
    
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;