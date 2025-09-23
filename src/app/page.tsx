import styles from "./page.module.css";

function Home() {
  return (
    <main>
      <a href=""></a>
      <section id="hero" className={styles.heroSection}>
        <div className="container">
          <h1>L'unione è rivolta</h1>
          <p>Per un'università libera, inclusiva, accessibile</p>
          <div className={styles.buttons}>
            <button className="rounded-red-button">Scrivici</button>
            <button className="rounded-bordered-red-button">SOS Studenti</button>
          </div>
        </div>
      </section>

      <section className={styles.upcomingEventsSection}>
        <div className="container">
          <h2>Prossimi Eventi</h2>
          <div className={styles.eventsList}>
            <ul>
              <li><a href="">Beer Pong</a></li>
              <li><a href="">Qualcosa</a></li>
              <li><a href="">Qualcos'altro</a></li>
              <li><a href="">Altro ancora</a></li>
              <li><a href="">Ancora altro</a></li>
              <li><a href="">Ultimo evento</a></li>
            </ul>
            <span></span>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutTextImage}>
            <div className={styles.text}>
              <h2>Chi siamo</h2>
              <p>
                L’Unione degli universitari (UDU) è un sindacato studentesco universitario. Ne fanno parte 28 gruppi organizzati nelle principali università italiane.

                Nasce nel 1994 dopo una serie di assemblee avvenute in diverse città italiane organizzate da preesistenti associazioni studentesche. L’associazione si colloca nella storia e nella cultura politica della sinistra.
                Ha un patto di lavoro con la Rete degli studenti medi e con la CGIL.
              </p>
              <a href="https://unioneuniversitari.it/" className={styles.uduLink}>Leggi di più...</a>
            </div>
            <img src="/udu_bandiera.jpg" alt="UDU Bandiera" />
          </div>
        </div>
      </section>

      <section id="contacts" className={styles.contactSection}>
        <div className="container">
          <h2>Contattaci</h2>
          <p>
            Siamo a disposizione di tutt3 l3 student3 che abbiano necessità di informazioni o di una mano, non esitare a contattarci!
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;