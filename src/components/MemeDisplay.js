import React from 'react';
import PropTypes from 'prop-types';

function MemeDisplay({ top, imageURL, bottom }) {
  return (
    <section>
      <p>{top}</p>
      <img src={imageURL}></img>
      <p>{bottom}</p>
    </section>
  );
}

MemeDisplay.propTypes = {
  top: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired
};

export default MemeDisplay;
