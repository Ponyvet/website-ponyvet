import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';

const AppRotuer = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/redirect" element={<Navigate to="/error-page" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRotuer;
