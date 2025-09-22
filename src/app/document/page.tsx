import style from "./document.module.css";

function Document() {
    return (
        <main>
            <div className={style.title}>
                <div className="container">
                    <h1 className={style.mainTitle}>Documento politico<span className="red-text">25-27</span> </h1>
                    <p></p>
                </div>
            </div>
        </main>
    );
}

export default Document;