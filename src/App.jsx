import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Contacts from './Components/Contacts';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Home />

        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

