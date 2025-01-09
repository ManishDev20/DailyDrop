import React, { createContext } from "react";

const MainContext = createContext();
const AppContext = (props) => {
  return (
    <MainContext.Provider value={{}}>{props.children}</MainContext.Provider>
  );
};

export default AppContext;
