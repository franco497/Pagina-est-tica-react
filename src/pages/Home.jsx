import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1>Ahora mismo, ¿Estás soñando?</h1>
      <p>
        Los sueños lúcidos son aquellos sueños en donde nos damos cuenta de que
        estamos soñando.
        <br />
        <br />
        En este sitio, encontrarás toda la información necesaria para poder
        llegar a tener sueños lúcidos; desde algunos interesantes antecedentes
        históricos del fenómeno, hasta técnicas para el desarrollo de la
        conciencia y la atención, fundamentos necesarios para despertar en
        nuestros sueños, y también en la vida... Bienvenidos soñadores.
      </p>
      <p className="citas">
        "Los sueños, siendo una gran reserva de conocimiento y experiencia, son
        a menudo no considerados en su cualidad de vehículos para explorar la
        realidad"
        <span className="autor">- Tarthang Tulku Rinpoche</span>
      </p>

      <p className="citas">
        "Siempre reconoce la cualidad onírica de la vida, reduciendo el apego y
        la aversión. Practica la amabilidad con todos los seres. Se amable y
        compasivo, sin importar que te hagan los demás a ti; lo que te hagan no
        va a importar mucho si miras todos como un sueño. El truco es tener una
        intención positiva durante el sueño. Este es el punto esencial, esto es
        la verdadera espiritualidad"
        <span className="autor">- Chakdud Tulku Rinpoche</span>
      </p>

      <p className="citas">
        "Todo lo que vemos no es sino un sueño dentro de un sueño"
        <span className="autor">- Edgar Allen Poe</span>
      </p>

      <p className="citas">
        "Que el dormir sea en sí mismo un ejercicio en la piedad, ya que tal
        como lo son nuestra vida y conducta, por necesidad también lo son
        nuestros sueños."
        <span className="autor">- San Basilio</span>
      </p>
    </Layout>
  );
};

export default Home;
