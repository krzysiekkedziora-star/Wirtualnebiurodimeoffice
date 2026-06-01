export function About() {
  return (
    <section id="o-nas" className="bg-[#f5f2ed] py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Image column */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&auto=format"
            alt="Nowoczesne przestrzenie biurowe Dime Office w Poznaniu"
            className="w-full object-cover"
            style={{ aspectRatio: "4/3" }}
          />
          {/* Gold frame accent */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c9a84c] -z-10" />
          {/* Badge */}
          <div className="absolute -top-5 -left-5 bg-[#0d1b2a] text-[#f5f2ed] px-6 py-4">
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#c9a84c", fontWeight: 700, lineHeight: 1 }}>15+</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px", opacity: 0.7 }}>lat na rynku</p>
          </div>
        </div>

        {/* Text column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#c9a84c]" />
            <span style={{ fontFamily: "'Inter', sans-serif", color: "#c9a84c", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
              O nas
            </span>
          </div>

          <h2
            className="mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0d1b2a", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.25, fontWeight: 600 }}
          >
            Czym jest wirtualne biuro i dlaczego warto?
          </h2>

          <p className="mb-5" style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "15px", lineHeight: 1.8 }}>
            Wirtualne biuro to nowoczesna usługa, która pozwala zarejestrować firmę pod prestiżowym adresem i korzystać z profesjonalnej obsługi administracyjnej — bez konieczności wynajmowania fizycznej przestrzeni biurowej.
          </p>
          <p className="mb-8" style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "15px", lineHeight: 1.8 }}>
            Dime Office w Poznaniu działa przy ul. Głogowskiej 31/33 — w doskonale skomunikowanej lokalizacji blisko centrum miasta. Jesteśmy jednym z pionierów rynku wirtualnych biur w Polsce i od ponad 15 lat wspieramy przedsiębiorców na każdym etapie rozwoju.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Rejestracja firmy", desc: "Adres do rejestracji w KRS, CEIDG i US" },
              { label: "Obsługa korespondencji", desc: "Powiadomienia o przesyłkach tego samego dnia" },
              { label: "Skanowanie listów", desc: "Skany dokumentów wysyłane bezpośrednio na e-mail" },
              { label: "Elastyczne warunki", desc: "Umowa miesięczna lub roczna — bez zbędnych formalności" },
            ].map((f) => (
              <div key={f.label} className="border-t-2 border-[#c9a84c] pt-4">
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em" }}>{f.label}</p>
                <p className="mt-1" style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "13px", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
