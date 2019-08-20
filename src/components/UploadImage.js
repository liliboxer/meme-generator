import React from 'react';
import PropTypes from 'prop-types';

function UploadImage({ handleUpload, handleChange, imageURL  }) {
  return (
    <section>
      <input type="file" onChange={handleUpload}/>
      <input name="imageURL" value={imageURL}placeholder="image URL" onChange={(event) => handleChange(event)}></input>
    </section>
  );
}

UploadImage.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired
};

export default UploadImage;
