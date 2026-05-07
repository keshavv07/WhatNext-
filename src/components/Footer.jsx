import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <span className="font-bold">WhatNext?</span> © 2026 All rights reserved.
        </div>
        
        <div className="footer-center">
          <span>35+ combinations</span>
          <span className="dot-separator">·</span>
          <span>3 education levels</span>
          <span className="dot-separator">·</span>
          <span>150+ career paths</span>
          <span className="dot-separator">·</span>
          <span>Works offline</span>
        </div>
        
        <div className="footer-right">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
