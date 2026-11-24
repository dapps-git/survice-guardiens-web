"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { nav, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <a href={`tel:+91${site.phones[1]}`}>
            <Icon name="phone" size={14} /> +91 {site.phones[1]}
          </a>
          <a href={`mailto:${site.email}`}>
            <Icon name="mail" size={14} /> {site.email}
          </a>
          <span className="hide-sm">
            <Icon name="pin" size={14} /> Varapuzha, Ernakulam
          </span>
        </div>
      </div>

      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Service Guardians home">
            <img src="/images/logo.png" alt="Service Guardians" />
          </a>

          <nav className={`nav ${open ? "is-open" : ""}`}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href={`tel:+91${site.phones[1]}`} className="btn btn-primary nav-cta">
              <Icon name="phone" size={16} /> Call Now
            </a>
          </nav>

          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </header>
    </>
  );
}
