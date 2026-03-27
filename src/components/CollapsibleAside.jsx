import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navigationData, getCurrentSection } from "../data/navigationData";

const CollapsibleAside = () => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("asideCollapsed");
    return saved === "true";
  });

  const location = useLocation();
  const currentSection = getCurrentSection(location.pathname);
  const sectionData = navigationData[currentSection];

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
        <h2>{sectionData.title}</h2>
        <nav>
          <ul>
            {sectionData.links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default CollapsibleAside;
