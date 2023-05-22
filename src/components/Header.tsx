import React from 'react'
import { useEffect } from 'react';

const Header = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/enterprise.js?render=6Letzo8lAAAAAEV5hmLvRtKRenOEkLy8p0cgfh8A";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <header className="banner-image">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="header_h1">Tua Tähkäpää</h1>
        <h2 className="header_h2">Pienimuotoista tekstin selkeyttämistä ja kielenhuoltoa - suurella sydämellä!</h2>
      </div>
    </header>
  );
};

export default Header;
