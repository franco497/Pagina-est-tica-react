// hooks/useFontSize.js - VERSIÓN CORREGIDA
import { useState, useEffect } from "react";

// Función para detectar tablet
const isTablet = () => {
  return window.innerWidth >= 541 && window.innerWidth <= 900;
};

// Función para leer el tamaño guardado
const getSavedFontSize = () => {
  const savedSize = localStorage.getItem("fontSize");
  if (savedSize === "font-large") return "large";
  if (savedSize === "font-xlarge") return "xlarge";
  return "medium";
};

// Función para aplicar el tamaño de fuente
const applyFontSizeToMainContent = (fontSize) => {
  const mainContent = document.querySelector(".main-content");
  
  if (!mainContent) return false;
  
  mainContent.classList.remove("font-large", "font-xlarge");
  
  if (isTablet()) {
    if (fontSize === "large") {
      mainContent.classList.add("font-large");
    } else if (fontSize === "xlarge") {
      mainContent.classList.add("font-xlarge");
    }
  }
  return true;
};

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState(getSavedFontSize);

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    let storageValue = "font-medium";
    if (fontSize === "large") storageValue = "font-large";
    if (fontSize === "xlarge") storageValue = "font-xlarge";
    localStorage.setItem("fontSize", storageValue);
    console.log("💾 Guardado en localStorage:", storageValue);
  }, [fontSize]);

  // 👈 CORREGIDO: Sincronizar con localStorage en CADA RENDERIZADO
  // Esto asegura que si localStorage cambia externamente, se actualice
  useEffect(() => {
    const currentSavedSize = getSavedFontSize();
    
    // Solo actualizar si es diferente y no estamos en medio de un cambio
    if (currentSavedSize !== fontSize) {
      console.log("🔄 Sincronizando desde localStorage:", currentSavedSize, "→ actual:", fontSize);
      setFontSize(currentSavedSize);
    }
  }); // 👈 SIN dependencias - se ejecuta en cada renderizado

  // Intentar aplicar el estilo repetidamente
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20;
    
    const tryApplyFontSize = () => {
      const applied = applyFontSizeToMainContent(fontSize);
      
      if (!applied && attempts < maxAttempts) {
        attempts++;
        setTimeout(tryApplyFontSize, 100);
      }
    };
    
    tryApplyFontSize();
  }, [fontSize]);

  // Manejar resize
  useEffect(() => {
    const handleResize = () => {
      applyFontSizeToMainContent(fontSize);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fontSize]);

  const changeFontSize = (size) => {
    console.log("🖱️ Cambiando fontSize a:", size);
    setFontSize(size);
  };

  return {
    fontSize,
    changeFontSize,
    isTablet: isTablet(),
  };
};