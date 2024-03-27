import { Header } from './components/header/Header.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPages from './pages/MainPages/MainPage.jsx';
import AboutPage from './pages/About/About.jsx';
import ServicesPage from './pages/ServicesPage/ServicesPage.jsx';
import Submit from './pages/Submit/Submit.jsx';
import StatusSubmit from './pages/StatusSupmit/StatusSubmit.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<MainPages />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/status" element={<StatusSubmit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
