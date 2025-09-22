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
                    <h2>I nostri eventi ricorrenti</h2>
                    <div className={style.eventsGrid}>
                        <div className={style.eventCard}>
                            <h3><span className="yellow-text">Beer</span> Pong</h3>
                        </div>
                        <div className={style.eventCard}>
                            <h3>Chess<span className="red-text">Lab</span></h3>
                        </div>
                        <div className={style.eventCard}>
                            <h3><span className="yellow-text">Sun</span><span className="orange-text">Set</span></h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Events;