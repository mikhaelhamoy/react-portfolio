import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [navComponentSelected, setNavComponentSelected] = useState('about');

  return (
    <div>
      <Nav
        navComponentSelected={navComponentSelected}
        setNavComponentSelected={setNavComponentSelected}
      ></Nav>
      <main>
          <About></About>
      </main>
    </div>
  );
}

export default App;
