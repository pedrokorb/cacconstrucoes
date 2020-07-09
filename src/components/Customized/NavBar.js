import React, { useState } from 'react';
import { stringToSlug } from "../../utils/utils";

import PropTypes from 'prop-types';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Menu from '@material-ui/core/Menu';

import MenuIcon from '@material-ui/icons/Menu';

import Logo from './../../../content/assets/logoclaro.png';

const menus = [
  'Como Funciona',
  'Outros Serviços',
  'Contato'
]

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function NavBar(props) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      { menus.map(menu => (
        <MenuItem>
          <Button
            style={{ color: props.backgroundColor }}
            href={`/#${stringToSlug(menu)}`}
            className="m-5"
            // startIcon={<MailIcon>E-mail</MailIcon>}
          >
            {menu}
          </Button>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: props.backgroundColor }}>
          {/* style={{ color: 'transparent' }} */}
          <Toolbar className="flex justify-between container">
            {/* Se quiser adicionar um logo na navbar */}
            <a href="/">
              <img className="m-4" src={Logo} alt="logo" />
            </a>
            {/* <Typography variant="h6">{'<PedroKorb />'}</Typography> */}
            <div className="hidden md:flex justify-end">
              {menus.map(menu => (
                <Button
                  style={{ color: props.textColor, marginRight: '8px' }}
                  href={`/#${stringToSlug(menu)}`}
                >
                  {menu}
                </Button>
              ))}
            </div>
            <div className="flex md:hidden justify-end">
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {renderMobileMenu}

    </>
  );
}