import React, { Component } from 'react';
import MemeInput from './MemeInput';
import MemeDisplay from './MemeDisplay';

export default class App extends Component {
  state = {
    top: '',
    imageURL: '',
    bottom: ''
  }



  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }


  render() {
    const { top, imageURL, bottom } = this.state; 
    return (
      <>
       <MemeInput top={top} imageURL={imageURL} bottom={bottom} handleChange={this.handleChange}/>
        <MemeDisplay  top={top} imageURL={imageURL} bottom={bottom}/>
      </>
    );
  }
}
  
