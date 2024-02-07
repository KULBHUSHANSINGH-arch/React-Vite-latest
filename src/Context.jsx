// import { Children, useContext, useReducer } from "react";
// import React from "react";
import reducer from "./reducer"
import React, { createContext, useContext, useReducer } from "react";

// const AppContext = React.createContext();
const AppContext = createContext();

const initialState = {
     name : "",
     image: "",
};

const AppProvider = ({children})=>{
    const [ state , dispatch] = useReducer(reducer, initialState);
    const updateHomePage = () =>{
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name : "Kulbhushan",
                    image: "./images/hero.svg",
                },
            });
    };
    
    const updateAboutPage = () =>{
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name : "Developer",
                    image: "./images/about1.svg",
                },
            });
    };
   
    return (
        <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
          {children}
        </AppContext.Provider>
      );
};

// global custom hook 

const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };