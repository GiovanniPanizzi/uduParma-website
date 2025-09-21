import "./page.css";

function Home() {
  return (
    <main>
      <a href="" id="home"></a>

      <div id="hero" className={styles["hero-section"]}>
        <div className={styles["container"]}>
          <h1>L'unione è rivolta</h1>
          <p>Per un'università libera, inclusiva, accessibile</p>
          <button className={styles["rounded-red-button"]}>Scrivici</button>
        </div>
      </div>

      <div className={styles["upcoming-events-section"]}>
        <div className={styles["container"]}>
          <h2>Prossimi Eventi</h2>
          <div className={styles["events-list"]}>
            <ul className={styles["events"]}>
              <li className={styles["events-item"]}><a href="">Beer Pong</a></li>
              <li className={styles["events-item"]}><a href="">Qualcosa</a></li>
              <li className={styles["events-item"]}><a href="">Qualcos'altro</a></li>
              <li className={styles["events-item"]}><a href="">Altro ancora</a></li>
              <li className={styles["events-item"]}><a href="">Ancora altro</a></li>
              <li className={styles["events-item"]}><a href="">Ultimo evento</a></li>
            </ul>
            <span className={styles["underline"]}></span>
          </div>
        </div>
      </div>

      <div className={styles["vision-description-section"]}>
        <div className={styles["container"]}>
          <div className={styles["about-text-image"]}>
            <div className={styles["text"]}>
              <h2>Chi siamo</h2>
              <p>
                L’Unione degli universitari (UDU) è un sindacato studentesco universitario. Ne fanno parte 28 gruppi organizzati nelle principali università italiane.[2]

                Nasce nel 1994 dopo una serie di assemblee avvenute in diverse città italiane organizzate da preesistenti associazioni studentesche. L’associazione si colloca nella storia e nella cultura politica della sinistra.[3]
                Ha un patto di lavoro con la Rete degli studenti medi e con la CGIL.
              </p>
            </div>
            <img src="/udu_bandiera.jpg" alt="UDU Bandiera" />
          </div>
        </div>
      </div>

      <div id="contacts" className={styles["contacts-section"]}>
        <div className={styles["container"]}>
          <h2>Contattaci</h2>
          <p>
            Siamo a disposizione di tutt3 l3 student3 che abbiano necessità di informazioni o di una mano, non esitare a contattarci!
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;