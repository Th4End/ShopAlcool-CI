/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import UserCreate from './pages/UserCreate';
import UserLogin from './pages/UserLogin';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Error404 from './pages/Error404';
import { Box } from '@mui/material';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/create-account" element={<UserCreate />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </CartProvider>
    </Router>
  );
}

export default App;
