import React from 'react';
import PropTypes from 'prop-types';

function TextFormatter({ color, handleColorChange }) {
  return (
    <form>
      <input type="color" name="color" value={color} onChange={(event) => handleColorChange(event)}></input>
    </form>
  
  );

}

TextFormatter.propTypes = {
  color: PropTypes.string.isRequired,
  handleColorChange: PropTypes.func.isRequired
};

export default TextFormatter;
