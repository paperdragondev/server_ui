import React from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader';
import { useHistory } from 'react-router-dom';

const fileUploadIP: string = process.env.REACT_APP_FILE_UPLOAD_IP || '';

function FileUploader() {
  let history = useHistory();

  const getUploadParams: IDropzoneProps['getUploadParams'] = ({ meta }) => {
    return { url: fileUploadIP };
  };

  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = (
    { meta, file },
    status
  ) => {
    console.log(status, meta, file);
  };

  const handleSubmit: IDropzoneProps['onSubmit'] = (files) => {
    console.log(files.map((f) => f.meta));
    history.push('/file/retrieve');
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="*"
      submitButtonContent="To File Retrieve"
      styles={{
        dropzone: {
          minHeight: 300,
        },
      }}
    />
  );
}

export default FileUploader;
