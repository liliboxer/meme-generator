import React, { Component } from 'react';

import MemeInput from './MemeInput';
import MemeDisplay from './MemeDisplay';
import Download from './Download';

import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

export default class App extends Component {
  state = {
    top: '',
    imageURL: '',
    bottom: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  downloadMeme = () => {
    let node = document.getElementById('meme');

    domtoimage.toJpeg(node)
      .then(function(dataURL) {
        let img = new Image();
        img.src = dataURL;
        FileSaver.saveAs(img.src, 'saved-meme');
      })
      .catch(function(error) {
        console.error('stop messing everything up', error);
      });
  }


  render() {
    const { top, imageURL, bottom } = this.state; 
    return (
      <>
        <MemeInput top={top} imageURL={imageURL} bottom={bottom} handleChange={this.handleChange}/>
        <MemeDisplay  top={top} imageURL={imageURL} bottom={bottom}/>
        <Download downloadMeme={this.downloadMeme}/>
      </>
    );
  }
}
  
