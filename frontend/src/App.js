import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AltaClient from './pages/AltaClient/AltaClient';
//import AltaViaje from './pages/AltaViaje/AltaViaje';
import FormularioViaje from './pages/FormularioViaje/FormularioViaje';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="grid-container">
          <Navbar />

          <main className="main">
            <div className="content">
              <Routes>
                <Route path="/travel" element={<FormularioViaje />} />
                <Route path="/travel/:id" element={<FormularioViaje />} />
                <Route path="/newclient" element={<AltaClient />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
