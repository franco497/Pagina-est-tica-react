// hooks/useFontSize.js
import { useState, useEffect } from "react";

// Función para detectar tablet
const isTablet = () => {
  return window.innerWidth >= 541 && window.innerWidth <= 800;
};

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState(() => {
    const savedSize = localStorage.getItem("fontSize");
    return savedSize === "font-large" ? "large" : "medium";
  });

  // Aplicar clases al body
  useEffect(() => {
    const applyFontSize = () => {
      if (isTablet()) {
        document.body.classList.remove("font-medium", "font-large");
        const sizeClass = fontSize === "large" ? "font-large" : "font-medium";
        document.body.classList.add(sizeClass);
      } else {
        // Si no es tablet, remover clases
        document.body.classList.remove("font-medium", "font-large");
      }
    };

    applyFontSize();
  }, [fontSize]);

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("fontSize", `font-${fontSize}`);
  }, [fontSize]);

  // Manejar resize de ventana
  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (isTablet()) {
          // Re-aplicar el tamaño actual
          document.body.classList.remove("font-medium", "font-large");
          const sizeClass = fontSize === "large" ? "font-large" : "font-medium";
          document.body.classList.add(sizeClass);
        } else {
          // Remover clases si no es tablet
          document.body.classList.remove("font-medium", "font-large");
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [fontSize]);

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  return {
    fontSize,
    changeFontSize,
    isTablet: isTablet(),
  };
};
