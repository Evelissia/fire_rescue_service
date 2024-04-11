import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPages from './pages/MainPages/MainPage.jsx';
import AboutPage from './pages/About/About.jsx';
import ServicesPage from './pages/ServicesPage/ServicesPage.jsx';
import Submit from './pages/Submit/Submit.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Reagistration/Registration.jsx';
import './assets/style.css';

import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
