import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  const [navComponentSelected, setNavComponentSelected] = useState('about');

  return (
    <div>
      <Nav
        navComponentSelected={navComponentSelected}
        setNavComponentSelected={setNavComponentSelected}
      ></Nav>
      <main>
          {{
            'about': (
              <About></About>
            ),
            'contact': (
              <ContactForm></ContactForm>
            ),
            'portfolio': (
              <Portfolio></Portfolio>
            )
          }[navComponentSelected]}
      </main>
    </div>
  );
}

export default App;
