import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const App = () => (
  <Router>
    <Routes>
      <Route path="/">
        {/* <Route index element={<Home />} /> */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
