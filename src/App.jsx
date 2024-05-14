import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/CartPage";
import PlaceOrder from "./pages/PlaceOrderPage";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import Login from "./components/LoginAndSignUp/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
