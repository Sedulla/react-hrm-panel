import { Box} from '@mui/material';
import './App.css';
import { MainContent } from './components/MainContent/MainContent';
import { Navigation } from './components/Navigation/Navigation';
import { TopNav } from './components/TopNav/TopNav';
import { NavContextProvider } from './utils/providers/NavContextProvider';

const App = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <NavContextProvider>
          <TopNav />
          <Navigation />
          <MainContent />
        </NavContextProvider>
      </Box>
    </>
  );
};

export default App;
