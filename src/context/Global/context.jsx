import React, { useState } from "react";

export const Context = React.createContext({});

export const Provider = ({ children }) => {
  const [sideBarCollapse, setSideBarCollapse] = useState(false);

  return (
    <Context.Provider value={[sideBarCollapse, setSideBarCollapse]}>
      {children}
    </Context.Provider>
  );
};
