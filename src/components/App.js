import React, { Component } from 'react';

import MemeInput from './MemeInput';
import MemeDisplay from './MemeDisplay';
import Download from './Download';

import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
import UploadImage from './UploadImage';


export default class App extends Component {
  state = {
    top: '',
    imageURL: '',
    bottom: '',
    file: null
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleUpload = (event) => {
    this.setState({ file: URL.createObjectURL(event.target.files[0]) });
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
    const { top, imageURL, bottom, file } = this.state; 
    return (
      <>
        <MemeInput
          top={top}
          imageURL={imageURL}
          bottom={bottom}
          handleChange={this.handleChange}
        />

        <UploadImage 
          handleUpload={this.handleUpload}
        />

        <MemeDisplay
          top={top}
          imageURL={imageURL}
          bottom={bottom}
          file={file}
        />

        <Download 
          downloadMeme={this.downloadMeme}
        />
      </>
    );
  }
}
  
