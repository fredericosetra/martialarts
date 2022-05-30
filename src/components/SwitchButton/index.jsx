import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Context } from '../../context/Global/context';

export default function CollapseButton() {
  const [sideBarCollapse, setSideBarCollapse] = React.useContext(Context);

  const collapseMenu = () => {
    setSideBarCollapse(!sideBarCollapse);
  };

  return <Switch defaultChecked onChange={() => collapseMenu()} />;
}
