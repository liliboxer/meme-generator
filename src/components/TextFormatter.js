import React from 'react';
import PropTypes from 'prop-types';

function TextFormatter({ color, handleColorChange, font, handleFontChange }) {
  const fontArr = ['Arial', 'Helvetica', 'Times New Roman'];
  const mappedFonts = fontArr.map(font => {
    return <option key={font} value={font}>{font}</option>;
  });

  return (
    <form>
      <input type="color" name="color" value={color} onChange={(event) => handleColorChange(event)}></input>
      <select name="font" defaultValue={font} onChange={(event) => handleFontChange(event)}>{mappedFonts}</select>
    </form>
  
  );

}

TextFormatter.propTypes = {
  color: PropTypes.string.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  font: PropTypes.string.isRequired,
  handleFontChange: PropTypes.func.isRequired
};

export default TextFormatter;
