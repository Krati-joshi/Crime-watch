import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import MapView from './components/Map/MapView';
import ReportForm from './components/Reports/ReportForm';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ProfilePage from './components/Reports/profile'; // Ensure correct import path and filename

const App = () => {
  return (
    <div style={{ backgroundColor: '#121212' }}>
      <Header />
      <Routes>
        <Route path="/" element={<MapView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* Correctly routes to ProfilePage */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
