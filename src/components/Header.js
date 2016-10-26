// src/components/Header.js
/*
  external imports
*/

import React, { Component } from 'react';

/*
  internal imports
*/

// ...

/*
  component definition
*/

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="menu">
          <div className="menu-item">
            <h1>About</h1>
          </div>
          <div className="menu-item">
            <h1>Work</h1>
          </div>
          <div className="menu-item">
            <h1>Contacts</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;