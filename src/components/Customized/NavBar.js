import React, { useState } from 'react';

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

import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from './../../../content/assets/logobranco.png';

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
  const icon = './../images/delfuego.png';

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
      <MenuItem>
        <Button
          style={{ color: '#2D2A7E' }}
          // style={{ color: 'transparent' }}
          className="m-5"
          startIcon={<MailIcon>E-mail</MailIcon>}
        >
          E-mail
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          style={{ color: '#2D2A7E' }}
          // style={{ color: 'transparent' }}
          className="m-5"
          startIcon={<MailIcon>E-mail</MailIcon>}
        >
          E-mail
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: '#2D2A7E' }}>
          {/* style={{ color: 'transparent' }} */}
          <Toolbar className="flex justify-between">
            {/* Se quiser adicionar um logo na navbar */}
            <img className="w-26 h-16 m-2" src={Logo} alt="logo" />
            {/* <Typography variant="h6">{'<PedroKorb />'}</Typography> */}
            <div className="hidden md:flex justify-end">
              <Button
                style={{ color: '#FFF' }}
                className="m-5"
                startIcon={<MailIcon>E-mail</MailIcon>}
              >
                E-mail
              </Button>
              <Button
                style={{ color: '#FFF' }}
                className="m-5"
                startIcon={<MailIcon>E-mail</MailIcon>}
              >
                E-mail
              </Button>
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

    </React.Fragment>
  );
}