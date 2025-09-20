"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ActiveLink() {
  const pathname = usePathname();
  const underlineRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const links = document.querySelectorAll(".main-nav-ul a");

    function updateUnderline() {
      if (!underlineRef.current) return;

      let activeLink: HTMLElement | null = null;

      links.forEach(link => {
        const href = link.getAttribute("href") || "";

        // link a sezioni interne
        if (href.startsWith("#") || href.startsWith("/#")) {
          const id = href.replace(/^\/?#/, "");
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= 80) {
            activeLink = link as HTMLElement;
          }
        } 
        // link a pagine esterne
        else {
          if (href === pathname) activeLink = link as HTMLElement;
        }
      });

      if (activeLink && underlineRef.current) {
        const el = activeLink as HTMLElement;
        const underline = underlineRef.current;
      
        underline.style.width = `${el.offsetWidth}px`;
        underline.style.left = `${el.offsetLeft}px`;
      }
    }

    window.addEventListener("scroll", updateUnderline);
    updateUnderline(); // iniziale

    return () => window.removeEventListener("scroll", updateUnderline);
  }, [pathname]);

  return <span className="underline" ref={underlineRef}></span>;
}