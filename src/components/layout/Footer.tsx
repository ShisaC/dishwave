
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-4 text-center">
      <p className="text-sm text-muted-foreground">
        &copy; {year} TasteJourney. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

