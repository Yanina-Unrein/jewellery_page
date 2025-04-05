import { useState, useEffect } from 'react';
import { loadTranslations, getLocalizedAnchor } from "../../i18n/ui";
import './navbar.css';

const NavbarReact = ({ lang, children }) => {
  const translations = loadTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('menu-open');
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <nav className="navbar">
      {/* Navbar Mobile */}
      <div className="navbar-mobile">
        <a href={`#${getLocalizedAnchor('home', lang)}`} className="logo-container-navbar-mobile">
          <img src={translations.navbar.logo} alt={translations.navbar.alt} className="logo-navbar-mobile" />
        </a>
        <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <img
            src={isOpen ? translations.navbar["icon-burger-close"] : translations.navbar["icon-burger"]}
            alt={isOpen ? translations.navbar["alt-icon-burger-close"] : translations.navbar["alt-icon-burger"]}
            width="30"
            height="30"
          />
        </button>
      </div>

      {/* Menú Mobile */}
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li><a href={`#${getLocalizedAnchor('home', lang)}`} onClick={closeMenu}>{translations.navbar.home}</a></li>
        <li><a href={`#${getLocalizedAnchor('about', lang)}`} onClick={closeMenu}>{translations.navbar.about}</a></li>
        <li><a href={`#${getLocalizedAnchor('gallery', lang)}`} onClick={closeMenu}>{translations.navbar.gallery}</a></li>
        <li><a href={`#${getLocalizedAnchor('contact', lang)}`} onClick={closeMenu}>{translations.navbar.contact}</a></li>
        {isMobile && <li className="language-button">{children}</li>}
      </ul>

      {/* Navbar Desktop */}
      <div className="navbar-desktop">
        <ul className="menu-left">
          <li><a href={`#${getLocalizedAnchor('home', lang)}`}>{translations.navbar.home}</a></li>
          <li><a href={`#${getLocalizedAnchor('about', lang)}`}>{translations.navbar.about}</a></li>
        </ul>
        <a href={`#${getLocalizedAnchor('home', lang)}`} className="logo-container-navbar">
          <img src={translations.navbar.logo} alt={translations.navbar.alt} className="logo-navbar" />
        </a>
        <div className="navbar-right">
          <ul className="menu-right">
            <li><a href={`#${getLocalizedAnchor('gallery', lang)}`}>{translations.navbar.gallery}</a></li>
            <li><a href={`#${getLocalizedAnchor('contact', lang)}`}>{translations.navbar.contact}</a></li>
          </ul>
          <div className="language-selector-desktop">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarReact;