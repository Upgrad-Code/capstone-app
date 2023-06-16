import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/navigation-bar/navigation-bar.component';
import Home from './routes/home/home.component';
import Countries from './routes/countries/countries.component';
import Country from './routes/country/country.component';
import NotFound from './routes/not-found/not-found.component';

import './style.css';

export default function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
