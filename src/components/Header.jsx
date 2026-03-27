import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <button
          className={`hamburger-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className="main-navbar">
          <ul id="main-nav-list" className={isMenuOpen ? "show" : ""}>
            <li>
              <a href="/" onClick={closeMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="/introduccion" onClick={closeMenu}>
                Introducción
              </a>
            </li>
            <li>
              <a href="/primeros-pasos" onClick={closeMenu}>
                Primeros pasos
              </a>
            </li>
            <li>
              <a href="/tecnicas" onClick={closeMenu}>
                Técnicas
              </a>
            </li>
            <li>
              <a href="/actividades" onClick={closeMenu}>
                Actividades
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
