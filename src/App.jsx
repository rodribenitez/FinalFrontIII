import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useEffect, useContext } from 'react';

import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { ContextGlobal } from './Components/utils/global.context';

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useContext(ContextGlobal)

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/home");
    }
  });
  return (
    <div className="App">
        <Navbar />
        <main>
        <Outlet />
      </main>
        <Footer />
    </div>
  );
}

export default App;
