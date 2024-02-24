import React from 'react'
import Home from "./Components/Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Components/Authentication/Login'
import Signup from "./Components/Authentication/Signup"
import Header from "./Components/Pages/Header/Header"
import Footer from "./Components/Pages/Footer/Footer"
import ProductDetail from './Components/Pages/Product-Detail/ProductDetail'
import BrandBanner from './Components/Pages/Brand-Banner/Brand-Banner'
import Cart from './Components/Pages/Cart/Cart'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <BrandBanner />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <ProductDetail />
                <BrandBanner />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
