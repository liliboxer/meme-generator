import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class Header extends Component {
  render() {
    return (
      <section>
        <Input label="header"/>
      </section>
    );
  }
}
