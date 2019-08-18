import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeDisplay.css';

function MemeDisplay({ top, imageURL, bottom, file }) {
  return (
    <section className={styles.MemeDisplay} id="meme">
      <p className={styles.centeredTop}>{top}</p>
      <img src={imageURL || file } ></img>
      <p className={styles.centeredBottom}>{bottom}</p>
    </section>
  );
}

MemeDisplay.propTypes = {
  top: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
  file: PropTypes.oneOfType([null, PropTypes.object])
};

export default MemeDisplay;
