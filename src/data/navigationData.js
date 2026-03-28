// Datos de navegación para el menú secundario
export const navigationData = {
  // Sección de introducción
  introduccion: {
    title: "Introducción",
    basePath: "/introduccion",
    links: [
      { path: "/introduccion", name: "Los sueños lúcidos, ¿qué son?" },
      {
        path: "/introduccion/etapas-del-sueño",
        name: "¿Porqué dormimos? Las etapas del sueño",
      },
      { path: "/introduccion/por-que-soñamos", name: "¿Por qué soñamos?" },
      {
        path: "/introduccion/niveles-de-lucidez",
        name: "Los niveles de lucidez onírica",
      },
      {
        path: "/introduccion/historia-de-los-sueños-lucidos",
        name: "Historia de los sueños lúcidos",
      },
      {
        path: "/introduccion/ciencia-y-los-sueños",
        name: "La ciencia y los sueños lúcidos",
      },
    ],
  },

  // Sección de primeros pasos
  primerosPasos: {
    title: "Primeros pasos",
    basePath: "/primeros-pasos",
    links: [
      { path: "/primeros-pasos", name: "Como recordar los sueños" },
      {
        path: "/primeros-pasos/diario-de-sueños",
        name: "Escribe un diario de sueños",
      },
      {
        path: "/primeros-pasos/reconoce-los-signos",
        name: "Reconoce los signos ¡estas soñando!",
      },
    ],
  },

  // Sección de técnicas
  tecnicas: {
    title: "Técnicas",
    basePath: "/tecnicas",
    links: [
      { path: "/tecnicas", name: "Consejos y tips antes de comenzar" },
      { path: "/tecnicas/tecnica-MILD", name: "Técnica MILD" },
      {
        path: "/tecnicas/quedarnos-dormidos-concientemente",
        name: "WILD, o quedarnos dormidos concientemente",
      },
      { path: "/tecnicas/chequeo-realidad", name: "Chequeo de la realidad" },
      { path: "/tecnicas/WBTB", name: "WBTB, o de vuelta a la cama..." },
      {
        path: "/tecnicas/tecnologia-al-servicio",
        name: "Novadreamer, la tecnologia al servicio de los sueños",
      },
      {
        path: "/tecnicas/mas-alla-de-las-tecnicas",
        name: "Mas alla de las tecnicas...",
      },
    ],
  },

  // Sección de actividades
  actividades: {
    title: "Actividades",
    basePath: "/actividades",
    links: [
      {
        path: "/actividades",
        name: "Volar en los sueños la actividad favorita",
      },
      {
        path: "/actividades/prolongar-la-lucidez",
        name: "Prolongar la lucidez",
      },
      {
        path: "/actividades/enfrentar-miedos",
        name: "Enfrentar miedos, conquistar pesadillas",
      },
      {
        path: "/actividades/explorar-y-divertirnos",
        name: "Explorar y divertirnos",
      },
    ],
  },

  // Home (sección principal)
  home: {
    title: "Información",
    basePath: "/",
    links: [
      { path: "/introduccion", name: "Introducción" },
      { path: "/primeros-pasos", name: "Primeros pasos" },
      { path: "/tecnicas", name: "Técnicas" },
      { path: "/actividades", name: "Actividades" },
    ],
  },
};

// Función para determinar en qué sección estás según la ruta
export const getCurrentSection = (pathname) => {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/introduccion")) return "introduccion";
  if (pathname.startsWith("/primeros-pasos")) return "primerosPasos";
  if (pathname.startsWith("/tecnicas")) return "tecnicas";
  if (pathname.startsWith("/actividades")) return "actividades";
  return "home";
};
