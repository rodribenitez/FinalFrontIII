import * as React from "react";
import { useContext } from "react";
import CardMUI from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import { useState } from "react";
import { useEffect } from "react";
import { setFavInStorage } from "./utils/localStorage";

import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    setFavInStorage({ name, username, id });
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card" style={{ bgColor : state.bgColor }}>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {
        <CardMUI sx={{ maxWidth: 345,  bgcolor : state.bgColor}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={process.env.PUBLIC_URL + "images/doctor.jpg"}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link to={`/dentista/${id}`} style ={{color : state.ftColor}} >{name}</Link>
              </Typography>
              <Typography variant="body2" color= {state.ftColor}>
                {username}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <button onClick={addFav} className="favButton">
              <GradeIcon />
            </button>
          </CardActions>
        </CardMUI>
      }
    </div>
  );
};

export default Card;
