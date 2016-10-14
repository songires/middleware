import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from './Logo.js';
import theme from './PurpleAppBar.scss';

const PurpleAppBar = ({ children, ...other }) => (
  <AppBar {...other} theme={theme}>
     <h3><i className="mdi mdi-weather-lightning"></i>  Omega </h3>
    {children}
  </AppBar>
);

PurpleAppBar.propTypes = {
  children: PropTypes.node
};

export default PurpleAppBar;
