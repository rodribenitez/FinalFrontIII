import React, {useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { NavBar, divNav, uls} from "./styled_component/nav";

import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  return (
    
    <nav style={{bgColor : state.bgColor, color : state.ftColor , width:"100%" , padding : "0" , margin : "0"}} >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

            {/* <divNav>
             <span style={{color: "red"}}>D</span>H ODONTO
            </divNav>
            <divNav>
              <uls>
                    <Link to="/Home">Home</Link>

      
                  <Link to="/Contacto">Contacto</Link>
          
               
                    <Link to="/Favs">Favs</Link>
         
                  <button onClick={() => dispatch({ modo: state.bgFlag })}  >Change theme</button>
                </uls>
            </divNav> */}

    <AppBar sx = {{margin : "0" , padding : "0", bgColor : state.ftColor, color : state.ftColor}} position="static">
          <Toolbar style={{bgColor : state.bgColor, color : state.ftColor}}>
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
            <button onClick={() => dispatch({ modo: state.bgFlag })}>Change theme</button>
          </Toolbar>
        </AppBar>
    </nav>
  );
};

export default Navbar;
