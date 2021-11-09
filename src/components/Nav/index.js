import React from 'react';

function Nav(props) {
  const {
    navComponentSelected,
    setNavComponentSelected
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          MH
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${(navComponentSelected === 'about') && 'navActive'}`}>
            <span onClick={() => setNavComponentSelected('about')}>About me</span>
          </li>
          <li className={`mx-2 ${(navComponentSelected === 'contact') && 'navActive'}`}>
            <span onClick={() => setNavComponentSelected('contact')}>Contact</span>
          </li>
          <li className={`mx-2 ${(navComponentSelected === 'portfolio') && 'navActive'}`}>
            <span onClick={() => setNavComponentSelected('portfolio')}>Porfolio</span>
          </li>
          <li className={`mx-2 ${(navComponentSelected === 'resume') && 'navActive'}`}>
            <span onClick={() => setNavComponentSelected('resume')}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;