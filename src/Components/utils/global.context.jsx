import React, { createContext, useReducer} from "react";
import { actions, initialState, reducer } from "./reducer.service";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';


export const initialStates = {theme: "", data: []};

export const ContextGlobal = createContext();

const reducerFunction = (state, { modo }) => {
  switch (modo) {
    case "dark":
      return {
        bgFlag: "light",
        bgColor: "#393944",
        ftColor: "#eee"
      }
      case "light":
        return {
          bgFlag: "dark",
          ftColor: "#393944",
          bgColor: "#eee"
        }
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
  const initalState = { bgFlag: "dark", ftColor: "#393944", bgColor: "#eee" }
  const [state, dispatch] = useReducer(reducerFunction, initalState);


  const aplicacion = {
    state,
    dispatch,
  };

  return (
    <ContextGlobal.Provider value={aplicacion}>
      <div style={{ backgroundColor: `${state.bgColor}`, width: "100%", height: "100vh", minHeight: "100%", color: `${state.ftColor}` }}>

        {children}
      </div>

    </ContextGlobal.Provider>
  );
};

export default ContextProvider