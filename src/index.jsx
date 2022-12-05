import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import ContactoPage from "./Routes/Contact";
import FavsPage from "./Routes/Favs";
import DetailPage from "./Routes/Detail";
import { ContextProvider } from "./Components/utils/global.context";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index path="/Home" element={<Home />} />
            <Route path="/Contacto" element={<ContactoPage />} />
            <Route path="/dentista/:id" element={<DetailPage />} />
            <Route path="/Favs" element={<FavsPage />} />
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


