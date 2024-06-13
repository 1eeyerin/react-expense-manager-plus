import axios from 'axios';

const apiClient = axios.create({
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
