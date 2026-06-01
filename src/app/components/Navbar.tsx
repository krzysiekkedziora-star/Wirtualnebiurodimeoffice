import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "O nas", href: "#o-nas" },
    { label: "Usługi", href: "#uslugi" },
    { label: "Jak zacząć", href: "#jak-zaczac" },
    { label: "Cennik", href: "#cennik" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1b2a] shadow-[0_2px_24px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#c9a84c] flex items-center justify-center">
            <span style={{ fontFamily: "'Playfair Display', serif", color: "#0d1b2a", fontSize: "13px", fontWeight: 700, letterSpacing: "-0.5px" }}>D</span>
          </div>
          <span style={{ fontFamily: "'Playfair Display', serif", color: "#f5f2ed", fontSize: "18px", fontWeight: 600, letterSpacing: "0.03em" }}>
            Dime Office<span style={{ color: "#c9a84c" }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.75)", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase" }}
              className="hover:text-[#c9a84c] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+48616429130" className="flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif", color: "#c9a84c", fontSize: "13px", fontWeight: 500 }}>
            <Phone size={14} />
            +48 61 642 91 30
          </a>
          <a
            href="#cennik"
            className="ml-2 px-5 py-2 bg-[#c9a84c] text-[#0d1b2a] transition-all duration-200 hover:bg-[#d4b86a]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Rozpocznij
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f5f2ed] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1b2a] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontFamily: "'Inter', sans-serif", color: "#f5f2ed", fontSize: "15px", letterSpacing: "0.04em" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cennik"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 bg-[#c9a84c] text-[#0d1b2a] text-center"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Rozpocznij współpracę
          </a>
        </div>
      )}
    </header>
  );
}
