import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import UserCreate from "./components/UserCreate";
import UserLogin from "./components/UserLogin";
import Shop from "./pages/Shop";
import Cart from "./components/Cart";
import Error404 from "./pages/Error404";
import { Box } from "@mui/material";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Router>
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
        </Router>
      </Box>
    </CartProvider>
  );
}

export default App;