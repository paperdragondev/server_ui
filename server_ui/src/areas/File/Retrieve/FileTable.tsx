import React from 'react';
import MaterialTable, { Column } from 'material-table';
import Icons from './TableIcons';
import { GetFileNamesDTO } from '../../../types';
import { getFile } from '../../../proxies/File';

const baseUrl: string = process.env.REACT_APP_FILE_BASE_URL || '';

interface Props {
  files: GetFileNamesDTO[];
}

function FileTable({ files }: Props) {
  const retreaveFile = (fileObject: GetFileNamesDTO) => () => {
    const { rootDir, fileDir, fileName } = fileObject;

    window.open(`${baseUrl}/getFile?path=${rootDir}/${fileDir}/${fileName}`);
  };

  const fileNameColumn: Column<GetFileNamesDTO> = {
    title: 'Name',
    field: 'fileName',
    render: (rowData) => {
      const { fileName } = rowData;

      return (
        <div style={{ cursor: 'pointer' }} onClick={retreaveFile(rowData)}>
          {fileName}
        </div>
      );
    },
  };

  return (
    <div style={{ maxWidth: '95%', paddingTop: 15, margin: 'auto' }}>
      <MaterialTable
        columns={[
          { title: 'User', field: 'rootDir' },
          { title: 'Directory', field: 'fileDir' },
          fileNameColumn,
        ]}
        data={files}
        options={{
          search: false,
          showTitle: false,
        }}
        // detailPanel={[
        //   {
        //     render: (rowData) => {
        //       return (
        //         <div>
        //           <h1>{rowData.fileName}</h1>
        //         </div>
        //       );
        //     },
        //   },
        // ]}
        icons={Icons}
      />
    </div>
  );
}

export default FileTable;
