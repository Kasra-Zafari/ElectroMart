// import './App.css'
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

