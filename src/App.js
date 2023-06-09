import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Countries from './routes/countries/countries.component';
import Country from './routes/country/country.component';
import NotFound from './routes/not-found/not-found.component';

import './style.css';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
