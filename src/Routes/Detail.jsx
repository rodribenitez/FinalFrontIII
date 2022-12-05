import React from 'react'
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [odontologo, setOdontologo] = useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res =>{ {
      setOdontologo(res.data) 
    }
  })
    .catch(err => console.log(err))
},[id])
  {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        console.log(odontologo);
  return (
    <>
     {odontologo ? (
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Sitio web</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              
            >
              <TableCell component="th" scope="row">
                {odontologo.name}
              </TableCell>
              <TableCell align="right">{odontologo.email}</TableCell>
              <TableCell align="right">{odontologo.phone}</TableCell>
              <TableCell align="right">{odontologo.website}</TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
   ) : null}
    </>
  )
}

export default Detail