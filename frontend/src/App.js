import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AltaClient from './pages/AltaClient/AltaClient';
import AltaViaje from './pages/AltaViaje/AltaViaje';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/travel" element={<AltaViaje />} />
          <Route path="/newclient" element={<AltaClient />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
