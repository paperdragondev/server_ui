import axios from 'axios';

const baseURL = process.env.REACT_APP_FILE_BASE_URL;

export default axios.create({
  baseURL: baseURL,
  timeout: 30000,
});
