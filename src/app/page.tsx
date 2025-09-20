import "./page.css";

function Home() {
  return (
    <main>
      <a id="first-content" href=""></a>
      <div id="hero" className="hero-section">
        <div className="container">
          <h1>L'unione è rivolta</h1>
          <p>Per un'università libera, inclusiva, accessibile</p>
          <button className="rounded-red-button">Scrivici</button>
        </div>
      </div>
      <div className="upcoming-events-section">
        <div className="container">
          <h2>Prossimi Eventi</h2>
          <div className="events-list">
            {/* Qui andranno gli eventi futuri */}
            <ul className="events">
              <li className="events-item"><a href="">Beer Pong</a></li>
              <li className="events-item"><a href="">Qualcosa</a></li>
              <li className="events-item"><a href="">Qualcos'altro</a></li>
              <li className="events-item"><a href="">Altro ancora</a></li>
              <li className="events-item"><a href="">Ancora altro</a></li>
              <li className="events-item"><a href="">Ultimo evento</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="vision-description-section">
        <div className="container">
          <div className="about-text-image">
            <div className="text">
              <h2>Chi siamo</h2>
              <p>
                L’Unione degli universitari (UDU) è un sindacato studentesco universitario. Ne fanno parte 28 gruppi organizzati nelle principali università italiane.[2]

                Nasce nel 1994 dopo una serie di assemblee avvenute in diverse città italiane organizzate da preesistenti associazioni studentesche. L’associazione si colloca nella storia e nella cultura politica della sinistra.[3]
                Ha un patto di lavoro con la Rete degli studenti medi e con la CGIL.
              </p>
            </div>
            <img src="/udu_bandiera.jpg" alt="" />
          </div>
        </div>
      </div>
      <div id="contacts" className="contacts-section">
        <div className="container">
          <h2>Contattaci</h2>
          <p>Siamo a disposizione di tutt3 l3 student3 che abbiano necessità di informazioni o di una mano, non esitare a contattarci!</p>
        </div>
      </div>
    </main>
  );
}

export default Home;