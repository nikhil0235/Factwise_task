import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        <h2 className="text-xl md:text-2xl">Developed by Nikhil Raj</h2>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com/nikhil_rajput011/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon size="2x" icon={faInstagram} className="hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/nikhil-raj-18365a226/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon size="2x" icon={faLinkedin} className="hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a href="https://github.com/nikhil0235" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon size="2x" icon={faGithub} className="hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a href="https://nikhil-rajput01.netlify.app/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon size="2x" icon={faSnapchat} className="hover:text-gray-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
