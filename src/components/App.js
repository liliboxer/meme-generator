import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import Image from './Image';
import Footer from './Footer';

export default class App extends Component {
  state = {
    header: '',
    footer: '',
    imageURL: ''
  }

  render() {
    return (
      <>
        <h1>Bunnies!</h1>
        <Header/>
        <Image/>
        <Footer/>
      </>
    );
  }
}
  
