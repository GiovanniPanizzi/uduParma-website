import "./globals.css";

export const metadata = {
  title: "Udu Parma - Sindacato Studentesco",
  description: "Sito ufficiale di Udu Parma, il sindacato studentesco che organizza eventi e offre supporto agli studenti.",
  keywords: ["sindacato", "studenti", "eventi", "iscrizione"],
  author: "Udu Parma",
  viewport: "width=device-width, initial-scale=1.0",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <title>{metadata.title}</title>
      </head>

      <body>
        {/* Header / Navbar */}
        <header>
          <nav>
            <span className="logo">Udu Parma</span>
            <ul>
              <li><a href="/">Home</a></li>  
              <li><a href="/about">Programma 25-27</a></li>    
              <li><a href="/events">Eventi</a></li>
              <li><a href="/contact">Contattaci</a></li>  
            </ul>
          </nav>
        </header>     
        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          © 2025 Sindacato Studentesco. Tutti i diritti riservati.
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
