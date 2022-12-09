import React, { createContext, useReducer, useEffect, useMemo} from "react";
import { actions, initialState, reducer } from "./reducer.service";

// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';




export const ContextGlobal = createContext();

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "dark":
      return {
        bgFlag: "light",
        navbgColor: "#1f1f20",
        bgColor:"#393944",
        bgColorImg : "#eee",
        ftColor: "#eee",
        data: state.data
      }
      case "light":
        return {
          bgFlag: "dark",
          ftColor: "#393944",
          navbgColor: "#0bd7e6",
          bgColorImg : "#393944",
          bgColor: "#eee", 
          data: state.data
        }
      case "data":
        return { ...state, data: action.payload}
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // const inicialState = createTheme({
  //   palette: {
  //     mode: 'light',
  //   },
  // })
  const initalState = { bgFlag: "dark",navbgColor: "#0bd7e6", ftColor: "#393944", bgColor: "#eee", data: []}
  const [state, dispatch] = useReducer(reducerFunction, initalState);


  



    const aplicacion = {
      state,
      dispatch,
    };
  return (
    <ContextGlobal.Provider value={aplicacion}>
      <div style={{ backgroundColor: `${state.bgColor}` , height : "115vh", minHeight : "100%", color: `${state.ftColor}` }}>

        {children}
      </div>

    </ContextGlobal.Provider>
  );
};

export default ContextProvider