import React from 'react';
import PropTypes from 'prop-types';

function UploadImage({ handleUpload }) {
  return (
    <section>
      <input type="file" onChange={handleUpload}/>
    </section>
  );
}

UploadImage.propTypes = {
  handleUpload: PropTypes.func.isRequired
};

export default UploadImage;
