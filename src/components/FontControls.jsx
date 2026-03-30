// components/FontControls.jsx
import { useEffect, useState } from "react";
import { useFontSize } from "../hooks/useFontSize";

const FontControls = () => {
  const { fontSize, changeFontSize, isTablet } = useFontSize();
  const [isTabletState, setIsTabletState] = useState(isTablet);

  // Detectar cambios de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setIsTabletState(window.innerWidth >= 541 && window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Solo mostrar en tablet
  if (!isTabletState) return null;

  const handleChange = (e) => {
    changeFontSize(e.target.value);
  };

  return (
    <div className="font-controls">
      <label className="font-option">
        <input
          type="radio"
          name="font-size"
          value="medium"
          checked={fontSize === "medium"}
          onChange={handleChange}
        />
        <span>Estándar</span>
      </label>

      <label className="font-option">
        <input
          type="radio"
          name="font-size"
          value="large"
          checked={fontSize === "large"}
          onChange={handleChange}
        />
        <span>Grande</span>
      </label>
    </div>
  );
};

export default FontControls;
