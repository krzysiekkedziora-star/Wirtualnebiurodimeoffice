export function Footer() {
  return (
    <footer className="bg-[#080f1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 bg-[#c9a84c] flex items-center justify-center">
                <span style={{ fontFamily: "'Playfair Display', serif", color: "#0d1b2a", fontSize: "12px", fontWeight: 700 }}>D</span>
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", color: "#f5f2ed", fontSize: "16px", fontWeight: 600, letterSpacing: "0.03em" }}>
                Dime Office<span style={{ color: "#c9a84c" }}>.</span>
              </span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.4)", fontSize: "13px", lineHeight: 1.8 }}>
              Wirtualne biuro w centrum Poznania. Prestiżowy adres, profesjonalna obsługa, elastyczne warunki.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Usługi",
              links: ["Adres Wirtualny", "Obsługa Korespondencji", "Rejestracja Działalności", "Skanowanie Listów"],
            },
            {
              title: "Firma",
              links: ["O nas", "Cennik", "FAQ", "Polityka Prywatności", "Regulamin"],
            },
            {
              title: "Kontakt",
              links: ["ul. Głogowska 31/33", "60-702 Poznań", "(61) 642 91 30", "poznan@dimeoffice.pl"],
            },
          ].map((col) => (
            <div key={col.title}>
              <p
                className="mb-4"
                style={{ fontFamily: "'Inter', sans-serif", color: "#f5f2ed", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}
              >
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.4)", fontSize: "13px" }}
                      className="hover:text-[#c9a84c] transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.25)", fontSize: "12px" }}>
            © {new Date().getFullYear()} Dime Office Poznań. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.25)", fontSize: "12px" }}>
              ul. Głogowska 31/33 · 60-702 Poznań
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
