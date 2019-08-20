import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeDisplay.css';

function MemeDisplay({ imageURL, file, color, formattedText, font }) {
  return (
    <section className={styles.MemeDisplay} id="meme">
      <pre
        style={{ color: color } }
        className={styles.centeredTop}>
        {formattedText}
      </pre>
      <img src={imageURL || file } ></img>
      <pre
        style={{ 
          color: color,
          fontFamily: font
        }}
        className={styles.centeredBottom}>
        {formattedText}
      </pre>
    </section>
  );
}

MemeDisplay.propTypes = {
  imageURL: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([null, PropTypes.object]),
  color: PropTypes.string.isRequired,
  formattedText: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired
};

export default MemeDisplay;
