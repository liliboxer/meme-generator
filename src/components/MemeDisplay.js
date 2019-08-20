import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeDisplay.css';

function MemeDisplay({ top, imageURL, bottom, file, color }) {
  return (
    <section className={styles.MemeDisplay} id="meme">
      <pre style={{ color: color } } className={styles.centeredTop}>{top}</pre>
      <img src={imageURL || file } ></img>
      <pre style={{ color: color } } className={styles.centeredBottom}>{bottom}</pre>
    </section>
  );
}

MemeDisplay.propTypes = {
  top: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([null, PropTypes.object]),
  color: PropTypes.string.isRequired
};

export default MemeDisplay;
