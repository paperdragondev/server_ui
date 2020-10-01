import api from './api';

export const getFileNames = (userDir) => {
  return api.get('/names', { params: { user: userDir } });
};

export const getFile = (filePath) => {
  return api.get('/getFile', { params: { path: filePath } });
};
