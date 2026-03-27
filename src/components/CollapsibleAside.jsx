import { useState, useEffect } from "react";

const CollapsibleAside = () => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("asideCollapsed");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("asideCollapsed", isCollapsed);
  }, [isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`secondary-navbar collapsible-aside ${isCollapsed ? "collapsed" : ""}`}
    >
      <button
        className="collapse-btn"
        onClick={toggleCollapse}
        aria-label="Colapsar menú"
      >
        <svg
          className="collapse-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div className="aside-content">
        <h2>Información</h2>
        <nav>
          <ul>
            <li>
              <a href="/introduccion">Introducción</a>
            </li>
            <li>
              <a href="/primeros-pasos">Primeros pasos</a>
            </li>
            <li>
              <a href="/tecnicas">Técnicas</a>
            </li>
            <li>
              <a href="/actividades">Actividades</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default CollapsibleAside;
