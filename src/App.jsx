// import './App.css'
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;