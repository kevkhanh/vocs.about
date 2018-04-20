import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const Header = () => (
  <AppBar
    title="VOCS"
    className="unique-color-dark"
    iconElementLeft={<IconButton/>}
    iconElementRight={<a className="purple-gradient btn-sm btn-floating" href="https://vocs.io"><i className="fa fa-home"></i></a>}
  />
);

export default Header;
