import { Header } from './components/header/Header.jsx';
import React from 'react';
import { Footer } from './components/footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPages from './pages/MainPages/MainPage.jsx';
import AboutPage from './pages/About/About.jsx';
import ServicesPage from './pages/ServicesPage/ServicesPage.jsx';
import Submit from './pages/Submit/Submit.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Reagistration/Registration.jsx';
import AdminPage from './pages/Admin/AdminPage.jsx';
import './assets/style.css';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth.js';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

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
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
