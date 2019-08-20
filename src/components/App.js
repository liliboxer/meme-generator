import React, { Component } from 'react';

import MemeInput from './MemeInput';
import MemeDisplay from './MemeDisplay';
import Download from './Download';

import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
import UploadImage from './UploadImage';
import TextFormatter from './TextFormatter';

export default class App extends Component {
  state = {
    top: '',
    imageURL: '',
    bottom: '',
    file: null,
    color: '',
    font: 'Times New Roman',
    formattedText: ''
  }


  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  handleFontChange = (event) => {
    event.preventDefault();
    this.setState(state => ({
      font: state.font
    }));
    console.log(this.state);
  }

  handleUpload = (event) => {
    this.setState({ file: URL.createObjectURL(event.target.files[0]) });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      return ({
        top: state.top,
        bottom: state.bottom
      });
    });
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
        console.error('nothing is working!', error);
      });
  }

  render() {
    const { top, imageURL, bottom, file, color, font, formattedText } = this.state; 
    return (
      <>
        <MemeInput
          top={top}
          bottom={bottom}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <UploadImage 
          handleUpload={this.handleUpload}
          handleChange={this.handleChange}
          imageURL={imageURL}
        />

        <TextFormatter
          color={color}
          handleColorChange={this.handleColorChange}
          font={font}
          handleFontChange={this.handleFontChange}
        />

        <MemeDisplay
          imageURL={imageURL}
          file={file}
          color={color}
          formattedText={formattedText}
          font={font}
        />

        <Download 
          downloadMeme={this.downloadMeme}
        />
      </>
    );
  }
}
  
