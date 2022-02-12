import * as React from "react";
import { Context } from "../../context/Global/context";
import Switch from "@mui/material/Switch";

export default function CollapseButton() {
  const [sideBarCollapse, setSideBarCollapse] = React.useContext(Context);

  const collapseMenu = () => {
    setSideBarCollapse(!sideBarCollapse);
  };

  return (
    <>
      <Switch defaultChecked onChange={() => collapseMenu()} />
    </>
  );
}
