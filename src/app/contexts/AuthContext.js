import { createContext, useEffect, useReducer } from 'react';
// import { Loadable } from '../components/Loadable/Loadable';
import { axiosInstance } from '../services/axios';
import { TokenService } from '../services/token.service';
import { Loadable } from '../components/Loadable/Loadable';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
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
  login: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (username, password) => {
    return await axiosInstance
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.access_token) {
          TokenService.setUser(response.data);

          dispatch({
            type: 'LOGIN',
            payload: {
              user: response.data,
            },
          });
        }
        return response.data;
      });
  };

  const logout = () => {
    TokenService.removeUser();

    dispatch({
      type: 'LOGOUT',
    });
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

  // if (!state.isInitialized) {
  //   return <Loadable />;
  // }

  return (
    <>
      <AuthContext.Provider
        value={{
          ...state,
          login,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
