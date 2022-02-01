import './App.css';
import { ThemeProvider } from '@mui/material';
import { muiTheme } from './theme/muiTheme';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import { selectUser } from './redux/auth/userSlice';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import { AllPages } from './routes/routes';

const App = () => {
  const all_pages = useRoutes(AllPages());

  // const { isAuthenticated } = useSelector(selectUser);
  const isAuthenticated = false;

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          {/* <AuthProvider> */}
          {all_pages}
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />
          </Routes>
          {/* </AuthProvider> */}
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
