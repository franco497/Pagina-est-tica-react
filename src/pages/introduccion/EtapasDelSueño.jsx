import Layout from "../../components/Layout";

const EtapasDelSueño = () => {
  return (
    <Layout>
      <h1>Etapas del sueño</h1>
      <p>
        El sueño humano se divide en ciclos de aproximadamente 90 minutos, cada
        uno compuesto por diferentes etapas:
      </p>
      <h2>Fase NREM (Non-Rapid Eye Movement)</h2>
      <ul>
        <li>
          <strong>Etapa 1 (N1):</strong> Transición entre vigilia y sueño.
          Duración de 1-7 minutos.
        </li>
        <li>
          <strong>Etapa 2 (N2):</strong> Sueño ligero. Ocupa aproximadamente el
          50% del tiempo total de sueño.
        </li>
        <li>
          <strong>Etapa 3 (N3):</strong> Sueño profundo o de ondas lentas.
          Esencial para la recuperación física.
        </li>
      </ul>
      <h2>Fase REM (Rapid Eye Movement)</h2>
      <p>
        Es la etapa donde ocurren la mayoría de los sueños vívidos. Se
        caracteriza por:
      </p>
      <ul>
        <li>Movimientos oculares rápidos</li>
        <li>Parálisis muscular (atonía REM)</li>
        <li>Aumento de la actividad cerebral</li>
        <li>Aceleración del ritmo cardíaco y respiratorio</li>
      </ul>
      <p>
        Los sueños lúcidos ocurren típicamente durante la fase REM, aunque se
        han reportado casos en otras etapas del sueño.
      </p>
    </Layout>
  );
};

export default EtapasDelSueño;
