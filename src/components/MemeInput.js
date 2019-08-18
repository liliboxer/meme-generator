import React from 'react';
import PropTypes from 'prop-types';

function MemeInput({ top, bottom, handleChange }) {
  return (
    <>
      <form>
        <input name="top" value={top} placeholder="top text" onChange={(event) => handleChange(event)}></input>
        <input name="bottom" value={bottom}placeholder="bottom text" onChange={(event) => handleChange(event)}></input>
      </form>
    </>
  );
}

MemeInput.propTypes = {
  top: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default MemeInput;
