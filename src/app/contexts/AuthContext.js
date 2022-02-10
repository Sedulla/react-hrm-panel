import { createContext, useEffect, useReducer } from 'react';
// import { Loadable } from '../components/Loadable/Loadable';
import { axiosInstance } from '../services/axios';
import { TokenService } from '../services/token.service';
import { Loadable } from '../components/Loadable/Loadable';
import jwtDecode from 'jwt-decode';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const isValidToken = (access_token) => {
  if (!access_token) {
    return false;
  }

  const decodedToken = jwtDecode(access_token);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp > currentTime;
};

const setSession = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${access_token}`;
  } else {
    localStorage.removeItem('access_token');
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
      };
    }
    case 'LOGIN': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    case 'REGISTER': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const AuthContext = createContext({
  ...initialState,
  method: 'JWT',
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (username, password) => {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    const response = await axiosInstance.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      params
    );
    const { access_token, refresh_token, user } = response.data;

    setSession(access_token, refresh_token);

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  // useEffect(() => {
  //   const access_token = TokenService.getLocalAccessToken();
  //   const refresh_token = TokenService.getLocalRefreshToken();

  //   if (access_token) {
  //     axiosInstance.defaults.headers.common[
  //       'Authorization'
  //     ] = `Bearer ${access_token}`;

  //     axiosInstance
  //       .get(`${process.env.REACT_APP_API_URL}/user`)
  //       .then((response) => {
  //         dispatch({
  //           type: 'INIT',
  //           payload: {
  //             isAuthenticated: true,
  //             user: response.data,
  //           },
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else if (refresh_token) {
  //     axiosInstance
  //       .post(`${process.env.REACT_APP_API_URL}/auth/token/refresh`, {
  //         refresh_token,
  //       })
  //       .then((response) => {
  //         TokenService.setUser(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     dispatch({
  //       type: 'INIT',
  //       payload: {
  //         isAuthenticated: false,
  //         user: null,
  //       },
  //     });
  //   }
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = window.localStorage.getItem('access_token');

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await axiosInstance.get(
            `${process.env.REACT_APP_API_URL}/user/id/2`
          );
          console.log(response);
          console.log(response.data);

          const { user } = response.data;

          dispatch({
            type: 'INIT',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
          // here it is refresh access not valid then, check refresh
        } else {
          dispatch({
            type: 'INIT',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INIT',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    })();
  }, []);

  // if (!state.isInitialized) {
  //   return <Loadable />;
  // }

  return (
    <>
      <AuthContext.Provider
        value={{
          ...state,
          method: 'JWT',
          login,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
