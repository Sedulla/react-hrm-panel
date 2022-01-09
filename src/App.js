import { Box } from '@mui/material';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { TopNav } from './components/TopNav/TopNav';
import { ProfileSettings } from './pages/Settings/ProfileSettings';
import { NavContextProvider } from './utils/providers/NavContextProvider';

const App = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavContextProvider>
          <TopNav />
          <Navigation />
          <ProfileSettings />
        </NavContextProvider>
      </Box>
    </>
  );
};

export default App;
