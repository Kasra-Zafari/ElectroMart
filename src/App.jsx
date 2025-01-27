// import './App.css'
import HomePage from "./components/HomePage"
import Products from "./components/Products"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import ContactDetails from "./components/ContactDetails"

function App() {

  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<Products/>}/>
          {/* <Route path="/contacts/:id" element={<ContactDetails/>}/> */}
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
