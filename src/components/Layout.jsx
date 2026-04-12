// Layout.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFontSize } from "../hooks/useFontSize";
import Header from "./Header";
import Footer from "./Footer";
import CollapsibleAside from "./CollapsibleAside";

const Layout = ({ children }) => {
  const location = useLocation();
  const { fontSize } = useFontSize();

  // Función para aplicar el tamaño de fuente
  const applyFontSize = () => {
    const mainContent = document.querySelector(".main-content");
    
    if (!mainContent) {
      console.log("main-content no encontrado");
      return;
    }
    
    // Remover clases existentes
    mainContent.classList.remove("font-large", "font-xlarge");
    
    // Verificar si es tablet
    const isTablet = window.innerWidth >= 541 && window.innerWidth <= 900;
    
    console.log("Aplicando tamaño:", { fontSize, isTablet, path: location.pathname });
    
    // Aplicar la clase correspondiente solo si es tablet
    if (isTablet) {
      if (fontSize === "large") {
        mainContent.classList.add("font-large");
        console.log("Clase font-large agregada");
      } else if (fontSize === "xlarge") {
        mainContent.classList.add("font-xlarge");
        console.log("Clase font-xlarge agregada");
      } else {
        console.log("Tamaño medium, sin clase adicional");
      }
    }
  };

  // Reaplicar en cada cambio de ruta Y cuando cambia fontSize
  useEffect(() => {
    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      applyFontSize();
    }, 150);
    
    return () => clearTimeout(timer);
  }, [location.pathname, fontSize]); // Dependencias correctas

  // También reaplicar cuando la ventana cambie de tamaño
  useEffect(() => {
    const handleResize = () => {
      applyFontSize();
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fontSize]);

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <CollapsibleAside />
        <main className="main-content">{children}</main>
        <aside></aside>
      </div>
      <Footer />
    </>
  );
};

export default Layout;