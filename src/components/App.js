import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
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
        <h1>Hello World</h1>
        <Header />
        <Footer/>
      </>
    );
  }
}
  
