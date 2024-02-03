import { HelmetProvider } from 'react-helmet-async';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Navbar from './Navbar';
import PrivacyPolicy from './PrivacyPolicy';
import { createTheme , ThemeProvider} from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Helvetica Neue',
    }
  });
  return (
    <div style={{backgroundColor:'#001D46'}}>
      <HelmetProvider>
        <HashRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
        <Routes>
        <Route path="/" element= {<MainPage/>}/>
        <Route path="/PrivacyPolicy" element= {<PrivacyPolicy />}/>
        </Routes>
        </ThemeProvider>
        </HashRouter>
        </HelmetProvider>
    </div>
  );
}

export default App;
