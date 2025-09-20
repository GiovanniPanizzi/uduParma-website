"use client";
import { useEffect } from "react";

export default function MobileMenu() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const ul = document.querySelector(".main-nav-ul");
    if (!hamburger || !ul) return;

    const toggleMenu = () => {
      hamburger.classList.toggle("active");
      ul.classList.toggle("active");
      hamburger.setAttribute(
        "aria-expanded",
        hamburger.classList.contains("active") ? "true" : "false"
      );
    };

    const closeMenu = () => {
      hamburger.classList.remove("active");
      ul.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    };

    hamburger.addEventListener("click", toggleMenu);
    ul.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      ul.querySelectorAll("a").forEach(link => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  return null;
}
