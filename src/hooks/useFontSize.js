import { useState, useEffect } from "react";

const isTablet = () => {
  return window.innerWidth >= 541 && window.innerWidth <= 800;
};

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState(() => {
    const savedSize = localStorage.getItem("fontSize");
    return savedSize === "font-large" ? "large" : "medium";
  });

  // Aplicar o quitar la clase DIRECTAMENTE al main-content
  useEffect(() => {
    const applyFontSize = () => {
      const mainContent = document.querySelector(".main-content");

      if (!mainContent) return;

      if (isTablet() && fontSize === "large") {
        mainContent.classList.add("font-large");
      } else {
        mainContent.classList.remove("font-large");
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

        if (isTablet() && fontSize === "large") {
          mainContent.classList.add("font-large");
        } else {
          mainContent.classList.remove("font-large");
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
