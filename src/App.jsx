import { Routes, Route } from 'react-router-dom';
import Navbar from './components/core/Navbar';
import Footer from './components/core/Footer';
import HomePage from './components/ui/HomePage';
import MenuPage from './components/ui/MenuPage';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import OrderConfirmation from './components/feedback/OrderConfirmation';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
