import React, {useContext} from "react";

import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  // const { state, dispatch } = useContext(ContextGlobal);
  return (
    
    <nav style= {{width : "100%"}}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

        <AppBar sx = {{margin : "0" , padding : "0"}} position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              DH ODONTO
            </Typography>
            <Link to="/Home">Home</Link>
            <Link to="/Contacto">Contacto</Link>
            <Link to="/Favs">Favs</Link>
            <button >Change theme</button>
          </Toolbar>
        </AppBar>
    </nav>
  );
};

export default Navbar;
