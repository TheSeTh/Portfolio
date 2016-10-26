// src/components/Page.js
/*
  external imports
*/

import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

/*
  internal imports
*/

// ...

/*
  component definition
*/

class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />      
      </div>
    );
  }
};

export default Page;