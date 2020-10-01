import React from 'react';
import FileUploader from './FileUploader';

const styles = {
  container: {
    width: '95%',
    margin: 'auto',
  },
};

function Upload() {
  return (
    <div style={{ ...styles.container }}>
      <FileUploader />
    </div>
  );
}

export default Upload;
