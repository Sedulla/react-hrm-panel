import './App.css';
import { ThemeProvider } from '@mui/material';
import { muiTheme } from './theme/muiTheme';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import { AllPages } from './routes/routes';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  const all_pages = useRoutes(AllPages());

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <AuthProvider>
            {all_pages}
            <Routes>
              <Route path="/" element={<Navigate to="/homepage" />} />
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
