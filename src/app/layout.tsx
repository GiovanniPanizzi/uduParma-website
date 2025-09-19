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
            <span className="logo"><span className="logo-red">UDU</span> Parma</span>
            <ul>
              <li><a href="/" className="hover-underline">Home</a></li>  
              <li><a href="/about" className="hover-underline">Programma 25-27</a></li>    
              <li><a href="/events" className="hover-underline">Eventi</a></li>
              <li><a href="#contacts-section" className="hover-underline"><span className="red-text">Contattaci</span></a></li>
            </ul>
          </nav>
        </header>     
        {/* Main content */}
        {children}

        {/* Footer */}
        <footer>
          © 2025 Udu Parma
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
