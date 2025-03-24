import { useState, useEffect } from 'react';
import { loadTranslations } from "../../i18n/ui";
import './navbar.css';

const NavbarReact = ({ lang, children }) => {
  const translations = loadTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Estado para saber si es móvil
  const [isClient, setIsClient] = useState(false); // Estado para controlar la renderización en cliente

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Solo ejecutar esta lógica en el cliente
    setIsClient(true); // Habilita la renderización en cliente

    // Actualizar el estado cuando cambie el tamaño de la ventana
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar al resize para ajustar al tamaño inicial
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Este efecto solo se ejecutará una vez después del primer renderizado en el cliente

  // Evitar renderizar nada hasta que sea en el cliente (para evitar problemas de hidratación)
  if (!isClient) {
    return null;
  }

  return (
    <nav className="navbar">
      {/* Navbar Mobile */}
      <div className="navbar-mobile">
        <a href="#" className="logo-container-navbar-mobile">
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
        <li><a href="#">{translations.navbar.home}</a></li>
        <li><a href="#">{translations.navbar.about}</a></li>
        <li><a href="#">{translations.navbar.gallery}</a></li>
        <li><a href="#">{translations.navbar.contact}</a></li>
        {isMobile && <li className="language-button">{children}</li>}
      </ul>

      {/* Navbar Desktop */}
      <div className="navbar-desktop">
        <ul className="menu-left">
          <li><a href="#">{translations.navbar.home}</a></li>
          <li><a href="#">{translations.navbar.about}</a></li>
        </ul>
        <a href="#" className="logo-container-navbar">
          <img src={translations.navbar.logo} alt={translations.navbar.alt} className="logo-navbar" />
        </a>
        <div className="navbar-right">
          <ul className="menu-right">
            <li><a href="#">{translations.navbar.gallery}</a></li>
            <li><a href="#">{translations.navbar.contact}</a></li>
          </ul>
          {/* Selector de idioma en Desktop */}
          <div className="language-selector-desktop">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarReact;