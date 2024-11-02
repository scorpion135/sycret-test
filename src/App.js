import React from 'react';
import './App.css';
import './sass/app.scss';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/payment/Payment";
import Contacts from "./pages/contacts/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="contacts"
        element={
          <Contacts />
        }
      />
      <Route
        path="payment"
        element={
          <Cart />
        }
      />
    </Routes>
  );
}
export default App;
