import { HelmetProvider } from 'react-helmet-async';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Navbar from './Navbar';

function App() {

  return (
    <div style={{backgroundColor:'#001D46'}}>
      <HelmetProvider>
        <HashRouter>
          <Navbar />
        <Routes>
        <Route path="/" element= {<MainPage/>}/>
        </Routes>
        </HashRouter>
        </HelmetProvider>
    </div>
  );
}

export default App;
