import { useState, useEffect } from 'preact/hooks';
import { loadTranslations } from "../../i18n/ui";
import './navbar.css';

const NavbarReact = ({ lang, children }) => {
  const translations = loadTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Estado para saber si es móvil

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Solo ejecutar esta lógica en el cliente
    setIsMobile(window.innerWidth <= 800);

    // Actualizar el estado cuando cambie el tamaño de la ventana
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Este efecto solo se ejecutará una vez después del primer renderizado en el cliente

  return (
    <nav class="navbar">
      {/* Navbar Mobile */}
      <div class="navbar-mobile">
        <a href class="logo-container-navbar-mobile">
          <img src={translations.navbar.logo} alt={translations.navbar.alt} class="logo-navbar-mobile" />
        </a>
        <button class="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
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
      <div class="navbar-desktop">
        <ul class="menu-left">
          <li><a href="#">{translations.navbar.home}</a></li>
          <li><a href="#">{translations.navbar.about}</a></li>
        </ul>
        <a href class="logo-container-navbar">
          <img src={translations.navbar.logo} alt={translations.navbar.alt} class="logo-navbar" />
        </a>
        <div class="navbar-right">
          <ul class="menu-right">
            <li><a href="#">{translations.navbar.gallery}</a></li>
            <li><a href="#">{translations.navbar.contact}</a></li>
          </ul>
          {/* Selector de idioma en Desktop */}
          <div class="language-selector-desktop">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarReact;