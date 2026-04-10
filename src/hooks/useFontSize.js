import { useState, useEffect } from "react";

// Función para detectar tablet
const isTablet = () => {
  return window.innerWidth >= 541 && window.innerWidth <= 800;
};

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState(() => {
    const savedSize = localStorage.getItem("fontSize");
    // Soporte para tres tamaños: medium, large, xlarge
    if (savedSize === "font-large") return "large";
    if (savedSize === "font-xlarge") return "xlarge";
    return "medium";
  });

  // Aplicar o quitar la clase DIRECTAMENTE al main-content
  useEffect(() => {
    const applyFontSize = () => {
      const mainContent = document.querySelector(".main-content");

      if (!mainContent) return;

      // Remover todas las clases de tamaño
      mainContent.classList.remove("font-large", "font-xlarge");

      // Aplicar la clase correspondiente solo si es tablet
      if (isTablet()) {
        if (fontSize === "large") {
          mainContent.classList.add("font-large");
        } else if (fontSize === "xlarge") {
          mainContent.classList.add("font-xlarge");
        }
      }
    };

    applyFontSize();
  }, [fontSize]);

  // Manejar resize de ventana
  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const mainContent = document.querySelector(".main-content");

        if (!mainContent) return;

        mainContent.classList.remove("font-large", "font-xlarge");

        if (isTablet()) {
          if (fontSize === "large") {
            mainContent.classList.add("font-large");
          } else if (fontSize === "xlarge") {
            mainContent.classList.add("font-xlarge");
          }
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
