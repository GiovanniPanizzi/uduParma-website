import "./globals.css";
import Link from "next/link";
import ActiveLink from "./client/activeLink";
import HeaderScroll from "./client/header";
import MobileMenu from "./client/hamburger-nav";


export const metadata = {
  title: "Udu Parma - Sindacato Studentesco",
  description: "Sito ufficiale di Udu Parma, il sindacato studentesco che organizza eventi e offre supporto agli studenti.",
  keywords: ["sindacato", "studenti", "eventi", "iscrizione"],
  author: "Udu Parma",
  viewport: "width=device-width, initial-scale=1.0",
  favicon: "/uduparma_logo.png",
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
        <link rel="icon" href={metadata.favicon} />
        <title>{metadata.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {/* Header / Navbar */}
        <header>
          <HeaderScroll></HeaderScroll>
          <nav className="container">
            <span className="logo"><span className="logo-red">UDU</span> Parma <img src="/uduparma_logo.png" alt="" /></span>
            <ul className="main-nav-ul">
              <li>
                <Link href="/" className="hover-underline">Home</Link>
              </li>  
              <li>
                <Link href="/document" className="hover-underline">Programma 25-27</Link>
              </li>    
              <li>
                <Link href="/events" className="hover-underline">Eventi</Link>
              </li>
              <li>
                <Link href="/#contacts" className="hover-underline">
                  <span className="red-text">Contattaci</span>
                </Link>
              </li>
            </ul>
            <MobileMenu></MobileMenu>
            <button className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
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
