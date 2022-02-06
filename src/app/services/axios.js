import axios from 'axios';
import { TokenService } from './token.service';

export const axiosInstance = axios.create({
  baseURL: 'http://188.166.133.164/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (
      originalConfig.url !== `${process.env.REACT_APP_API_URL}/auth/login` &&
      err.response
    ) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axiosInstance.post(
            `${process.env.REACT_APP_API_URL}/auth/token/refresh`,
            {
              refresh_token: TokenService.getLocalRefreshToken(),
            }
          );

          const { access_token } = rs.data;
          TokenService.updateLocalAccessToken(access_token);

          return axiosInstance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

// return await axiosInstance
// .post('/auth/login', {
//   username,
//   password,
// })
// .then((response) => {
//   if (response.data.access_token) {
//     TokenService.setUser(response.data);
//   }

//   return response.data;
// });
// };
