import React, { createContext, useMemo, useReducer} from "react";

import { actions, initialState, reducer } from "./reducer.service";

export const initialStates = {theme: "", data: []};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState = useMemo(
    () => ({
      theme: state.theme,
      setDarkTheme: () => {
        dispatch({ type: actions.SET_THEME_DARK });
      },
      setLightTheme: () => {
        dispatch({ type: actions.SET_THEME_LIGHT });
      },
    }),
    [ state.theme]
  );
  return (
    <ContextGlobal.Provider value={{providerState}}>
      {children}
    </ContextGlobal.Provider>
  );
};
