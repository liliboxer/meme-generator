import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeDisplay.css';

function MemeDisplay({ top, bottom, imageURL, file, color, font }) {
  return (
    <section className={styles.MemeDisplay} id="meme">
      <pre
        style={{ 
          color: color,
          fontFamily: font
        }}
        className={styles.centeredTop}>
        {top}
      </pre>
      <img src={imageURL || file } ></img>
      <pre
        style={{ 
          color: color,
          fontFamily: font
        }}
        className={styles.centeredBottom}>
        {bottom}
      </pre>
    </section>
  );
}

MemeDisplay.propTypes = {
  imageURL: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([null, PropTypes.object]),
  color: PropTypes.string.isRequired,
  formattedText: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired
};

export default MemeDisplay;
