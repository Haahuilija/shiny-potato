import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        © {new Date().getFullYear()} Copyright - tuatahkapaa.com
      </p>
    </footer>
  );
};

export default Footer;
