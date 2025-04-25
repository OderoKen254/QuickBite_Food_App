import { Routes, Route } from 'react-router-dom';
import Navbar from './components/core-components/NavBar';
import Footer from './components/core-components/Footer';
import HomePage from './components/ui-components/HomePage';
import MenuPage from './components/ui-components/MenuItem';
import Cart from './components/cart-checkout flow/Cart';
import Checkout from './components/cart-checkout flow/Checkout';
import OrderConfirmation from './components/order-conf-feedback/OrderConfirmation';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<NavBar />} />
          <Route path="/menu/:restaurantId" element={<MenuPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation/:status" element={<OrderConfirmation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
