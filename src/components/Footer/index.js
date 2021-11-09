import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

function Footer() {

  return (
    <footer>
      <a className="mx-1 myLink" href="https://github.com/mikhaelhamoy" target="_blank" rel="noreferrer noopener"><FaGithub /></a>
      <a className="mx-1 myLink" href="https://linkedin.com/in/mikhaelhamoy917" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
      <a className="mx-1 myLink" href="https://twitter.com/gagz092" target="_blank" rel="noreferrer noopener"><FaTwitterSquare /></a>
    </footer>
  );
}

export default Footer;