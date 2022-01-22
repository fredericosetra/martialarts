import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { Menu, MenuItem, SubMenu, SidebarHeader } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import * as S from "./styled";

const Sidebar = () => {
  return (
    <>
      <S.CustomProSidebar>
        <SidebarHeader>LOGO HERE</SidebarHeader>
        <Menu iconShape="square">
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <SubMenu title="sou um submenu">
            <MenuItem>
              <Link to="/login">login</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/studentregistration">studentregistration</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </S.CustomProSidebar>
    </>
  );
};

export default Sidebar;
