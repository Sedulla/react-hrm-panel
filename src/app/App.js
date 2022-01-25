import './App.css';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { selectUser } from '../features/auth/userSlice';

const App = () => {
  // const { isAuthenticated } = useSelector(selectUser);
  const isAuthenticated = false;

  const routing = useRoutes(routes(isAuthenticated));

  return <>{routing}</>;
};

export default App;
