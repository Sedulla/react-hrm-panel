import axios from 'axios';

export const axiosInstance = axios.create({
  //   baseURL: 'http://localhost:3000/api',
  //   timeout: 1000,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   },
});

axiosInstance.interceptors.request.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);
