// FontControls.jsx
import { useEffect, useState } from "react";
import { useFontSize } from "../hooks/useFontSize";

const FontControls = () => {
  const { fontSize, changeFontSize, isTablet } = useFontSize();
  const [isTabletState, setIsTabletState] = useState(isTablet);

  // Detectar cambios de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      const tablet = window.innerWidth >= 541 && window.innerWidth <= 900;
      setIsTabletState(tablet);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👈 NUEVO: Debug para ver el estado actual
  useEffect(() => {
    console.log("FontControls - fontSize actual:", fontSize);
  }, [fontSize]);

  // Solo mostrar en tablet
  if (!isTabletState) return null;

  return (
    <div className="font-controls">
      <div className="font-controls-title">Tamaño de texto</div>
      <div className="font-controls-buttons">
        <label className="font-option">
          <input
            type="radio"
            name="font-size"
            value="medium"
            checked={fontSize === "medium"}
            onChange={() => changeFontSize("medium")}
          />
          <span>Estándar</span>
        </label>

        <label className="font-option">
          <input
            type="radio"
            name="font-size"
            value="large"
            checked={fontSize === "large"}
            onChange={() => changeFontSize("large")}
          />
          <span>Grande</span>
        </label>

        <label className="font-option">
          <input
            type="radio"
            name="font-size"
            value="xlarge"
            checked={fontSize === "xlarge"}
            onChange={() => changeFontSize("xlarge")}
          />
          <span>Muy grande</span>
        </label>
      </div>
    </div>
  );
};

export default FontControls;