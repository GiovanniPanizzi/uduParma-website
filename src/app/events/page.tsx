import style from "./events.module.css";
function Events() {
    return (
        <main>
            <section className={style.titleSection}>
                <div className="container">
                    <h1>Eventi</h1>
                    <p>Qui trovi gli eventi in programma per questi mesi</p>
                </div>
            </section>
            <section className={style.recurrentEventsSection}>
                <div className="container">
                    <h2 className={style.headerSecondary}>I nostri eventi ricorrenti</h2>
                    <div className={style.eventsFlex}>
                        <div className={style.eventCard}>
                            <h3 className={style.eventTitle}><span className="yellow-text">Sun</span><span className="orange-text">Set</span></h3>
                            <p>Descrizione del sunset bla bla bla</p>
                            <p>altre cose</p>
                            <p>altre cose ancora</p>
                            <div className="calendar">
                                <span>Venerdì 27 Settembre</span>
                                <button className="rounded-red-button">Registrati per l'evento</button>
                            </div>
                        </div>
                        <div className={style.eventCard}>
                            <h3 className={style.eventTitle}><span className="yellow-text">Beer</span> Pong</h3>
                            <p>Descrizione del beer pong bla bla bla</p>
                            <p>altre cose</p>
                            <p>altre cose ancora</p>
                            <div className="calendar">
                                <span>Venerdì 27 Settembre</span>
                                <button className="rounded-red-button">Registrati per l'evento</button>
                            </div>
                        </div>
                        <div className={style.eventCard}>
                            <h3 className={style.eventTitle}>Chess<span className="red-text">Lab</span></h3>
                            <p>Descrizione del chess lab bla bla bla</p>
                            <p>altre cose</p>
                            <p>altre cose ancora</p>
                            <div className="calendar">
                                <span>Venerdì 27 Settembre</span>
                                <div className={style.buttons}>
                                    <button className="rounded-red-button">Registrati per l'evento</button>
                                    <button className="rounded-bordered-red-button">Gruppo whatsapp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Events;