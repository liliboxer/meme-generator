import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  }
  render() {    
    return (
      <>
        <label>
          <p>{this.props.label}</p>
          <input type="text"></input>
        </label>
      </>
    );
  }
}
