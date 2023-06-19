import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CaseStudy from './pages/caseStudy';
import CaseStudy2 from './pages/caseStudy2';
import Home from './pages/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='casestudy' element={<CaseStudy />} />
        <Route path='nrs-casestudy' element={<CaseStudy2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
