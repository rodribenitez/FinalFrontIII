import React, { useState, useEffect} from 'react'
import Card from '../Components/Card'
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
// import { ContextProvider } from "./Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [data, setData] = useState(null);
  // const { state, dispatch } = useContext(DarkModeContext);


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res =>{ 
    setData(res.data)
  })
    .catch(err => console.log(err))
},[])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}

   {data ?( data.map(item =>(<Card key = {item.id} name={item.name} username = {item.username} id={item.id} />
   )    
    )) : (<CircularProgress color="secondary" />)}
      </div>
    </main>
  )
}

export default Home