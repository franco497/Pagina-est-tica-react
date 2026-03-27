import { BrowserRouter, Routes, Route } from "react-router-dom";

// Página principal
import Home from "./pages/Home";

// Introducción
import Introduccion from "./pages/introduccion/Introduccion";
import CienciaYLosSueños from "./pages/introduccion/CienciaYLosSueños";
import EtapasDelSueño from "./pages/introduccion/EtapasDelSueño";
import HistoriaDeLosSueñosLucidoss from "./pages/introduccion/HistoriaDeLosSueñosLucidoss";
import NivelesDeLucidez from "./pages/introduccion/NivelesDeLucidez";
import PorQueSoñamos from "./pages/introduccion/PorQueSoñamos";

// Primeros Pasos
import PrimerosPasos from "./pages/primeros-pasos/PrimerosPasos";
import DiarioDeSueños from "./pages/primeros-pasos/DiarioDeSueños";
import ReconoceLosSignos from "./pages/primeros-pasos/ReconoceLosSignos";

// Técnicas
import ConsejosTips from "./pages/tecnicas/ConsejosTips";
import ChequeoRealidad from "./pages/tecnicas/ChequeoRealidad";
import MasAllaDeLasTecnicas from "./pages/tecnicas/MasAllaDeLasTecnicas";
import QuedarnosDormidosConcientemente from "./pages/tecnicas/QuedarnosDormidosConcientemente";
import TecnicaMILD from "./pages/tecnicas/TecnicaMILD";
import TecnologiaAlServicio from "./pages/tecnicas/TecnologiaAlServicio";
import WBTB from "./pages/tecnicas/WBTB";

// Actividades
import VolarEnLosSueños from "./pages/actividades/VolarEnLosSueños";
import EnfrentarMiedos from "./pages/actividades/EnfrentarMiedos";
import ExplorarYDivertirnos from "./pages/actividades/ExplorarYDivertirnos";
import ProlongarLaLucidez from "./pages/actividades/ProlongarLaLucidez";

function App() {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Home />} />

      {/* Introducción */}
      <Route path="/introduccion" element={<Introduccion />} />
      <Route
        path="/introduccion/ciencia-y-los-sueños"
        element={<CienciaYLosSueños />}
      />
      <Route
        path="/introduccion/etapas-del-sueño"
        element={<EtapasDelSueño />}
      />
      <Route
        path="/introduccion/historia-de-los-sueños-lucidos"
        element={<HistoriaDeLosSueñosLucidoss />}
      />
      <Route
        path="/introduccion/niveles-de-lucidez"
        element={<NivelesDeLucidez />}
      />
      <Route path="/introduccion/por-que-soñamos" element={<PorQueSoñamos />} />

      {/* Primeros Pasos */}
      <Route path="/primeros-pasos" element={<PrimerosPasos />} />
      <Route
        path="/primeros-pasos/diario-de-sueños"
        element={<DiarioDeSueños />}
      />
      <Route
        path="/primeros-pasos/reconoce-los-signos"
        element={<ReconoceLosSignos />}
      />

      {/* Técnicas */}
      <Route path="/tecnicas" element={<ConsejosTips />} />
      <Route path="/tecnicas/chequeo-realidad" element={<ChequeoRealidad />} />
      <Route
        path="/tecnicas/mas-alla-de-las-tecnicas"
        element={<MasAllaDeLasTecnicas />}
      />
      <Route
        path="/tecnicas/quedarnos-dormidos-concientemente"
        element={<QuedarnosDormidosConcientemente />}
      />
      <Route path="/tecnicas/tecnica-MILD" element={<TecnicaMILD />} />
      <Route
        path="/tecnicas/tecnologia-al-servicio"
        element={<TecnologiaAlServicio />}
      />
      <Route path="/tecnicas/WBTB" element={<WBTB />} />

      {/* Actividades */}
      <Route path="/actividades" element={<VolarEnLosSueños />} />
      <Route
        path="/actividades/volar-en-los-sueños"
        element={<VolarEnLosSueños />}
      />
      <Route
        path="/actividades/enfrentar-miedos"
        element={<EnfrentarMiedos />}
      />
      <Route
        path="/actividades/explorar-y-divertirnos"
        element={<ExplorarYDivertirnos />}
      />
      <Route
        path="/actividades/prolongar-la-lucidez"
        element={<ProlongarLaLucidez />}
      />
    </Routes>
  );
}

export default App;
