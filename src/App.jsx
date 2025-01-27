import './App.css'
import HomePage from "./components/HomePage"
// import Contacts from "./components/Contacts"
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
          {/* <Route path="/contacts" element={<Contacts/>}/> */}
          {/* <Route path="/contacts/:id" element={<ContactDetails/>}/> */}
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
