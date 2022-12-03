import React from 'react'
import { BrowserRouter, Route,Routes} from "react-router-dom" 
import Home from "../Routes/Home"
import ContactoPage from "../Routes/Contact"
import FavsPage from "../Routes/Favs"
import DetailPage from "../Routes/Detail"
import { Link } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}


      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
            <Route path="/Contacto" element={<ContactoPage />} />
            <Route path="/Favs" element={<FavsPage />} />
            <Route path="/dentista/:id" element={<DetailPage />} />
            <Route path="/" element={<Home />} />
        </Routes>
            <Link to="/Home">Ir a Home</Link>
            <Link to="/Contacto">Ir a Contacto</Link>
            <Link to="/Favs">Ir a Favs</Link>
    </BrowserRouter>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar