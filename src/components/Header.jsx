import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  // Función para determinar si un enlace está activo
  const isActiveLink = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
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
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-main-link" : ""
                }
                end
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/introduccion"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-main-link" : ""
                }
              >
                Introducción
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/primeros-pasos"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-main-link" : ""
                }
              >
                Primeros pasos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tecnicas"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-main-link" : ""
                }
              >
                Técnicas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/actividades"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-main-link" : ""
                }
              >
                Actividades
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
