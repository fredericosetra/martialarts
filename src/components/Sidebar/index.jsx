import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import PasswordIcon from '@mui/icons-material/Password';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Global/context';
import * as S from './styled';

function Sidebar() {
  const [sideBarCollapse] = React.useContext(Context);

  return (
    <S.CustomProSidebar collapsed={sideBarCollapse}>
      <Menu>
        <MenuItem icon={<HomeIcon />}>
          <Link to='/'>Home</Link>
        </MenuItem>

        <SubMenu title='sou um submenu' icon={<MenuIcon />}>
          <MenuItem icon={<PasswordIcon />}>
            <Link to='/login'>login</Link>
          </MenuItem>

          <MenuItem icon={<HowToRegIcon />}>
            <Link to='/studentregistration'>Cadastro de Alunos</Link>
          </MenuItem>
        </SubMenu>

        <SubMenu title='Relatórios' icon={<AssessmentOutlinedIcon />}>
          <MenuItem icon={<PersonAddIcon />}>
            <Link to='/relatorios/alunoativos'>Alunos Ativos</Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </S.CustomProSidebar>
  );
}

export default Sidebar;
