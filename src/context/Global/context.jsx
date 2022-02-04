import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const Provider = (props) => {
  const [sideBarCollapse, setSideBarCollapse] = useState(true);

  return (
    <AppContext.Provider value={[sideBarCollapse, setSideBarCollapse]}>
      {props.children}
    </AppContext.Provider>
  );
};
