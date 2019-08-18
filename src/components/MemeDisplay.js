import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeDisplay.css';

function MemeDisplay({ top, imageURL, bottom }) {
  return (
    <section className={styles.MemeDisplay} id="meme">
      <p className={styles.centeredTop}>{top}</p>
      <img src={imageURL}></img>
      <p className={styles.centeredBottom}>{bottom}</p>
    </section>
  );
}

MemeDisplay.propTypes = {
  top: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired
};

export default MemeDisplay;
