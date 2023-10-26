// import axios from 'axios';

// export const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8000/',
// });
import axios from 'axios';

const placeholderApi = axios.create({
  baseURL: 'http://localhost:8000',
});

export default placeholderApi;
