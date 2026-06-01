const steps = [
  {
    number: "01",
    title: "Wybierz plan",
    desc: "Wypełnij formularz rejestracyjny online i wybierz plan dopasowany do potrzeb Twojej firmy. Możesz zacząć bez zobowiązań lub wybrać umowę roczną ze znacznym rabatem.",
  },
  {
    number: "02",
    title: "Weryfikacja w 24h",
    desc: "Nasz zespół weryfikuje zgłoszenie i kontaktuje się z Tobą w ciągu maksymalnie 24 godzin. Proces jest szybki i bezproblemowy — prowadzimy Cię przez każdy krok.",
  },
  {
    number: "03",
    title: "Zacznij działać",
    desc: "Po podpisaniu umowy i wpłacie pierwszej raty usługa zostaje aktywowana. Od tej chwili Twoja firma dysponuje prestiżowym adresem i pełną obsługą naszego biura.",
  },
];

export function HowItWorks() {
  return (
    <section id="jak-zaczac" className="bg-[#f5f2ed] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span style={{ fontFamily: "'Inter', sans-serif", color: "#c9a84c", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
            Jak zacząć
          </span>
        </div>

        <h2
          className="mb-20"
          style={{ fontFamily: "'Playfair Display', serif", color: "#0d1b2a", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.25, fontWeight: 600 }}
        >
          Trzy proste kroki<br />do własnego biura
        </h2>

        <div className="relative grid md:grid-cols-3 gap-0">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-[#c9a84c]/30" aria-hidden="true" />

          {steps.map((s, i) => (
            <div key={s.number} className="relative px-0 md:px-8 mb-12 md:mb-0 first:pl-0 last:pr-0">
              {/* Number bubble */}
              <div
                className="relative z-10 w-16 h-16 border-2 border-[#c9a84c] flex items-center justify-center bg-[#f5f2ed] mb-8"
              >
                <span style={{ fontFamily: "'Playfair Display', serif", color: "#c9a84c", fontSize: "1.4rem", fontWeight: 700 }}>{s.number}</span>
              </div>

              <h3
                className="mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: "#0d1b2a", fontSize: "1.2rem", fontWeight: 600 }}
              >
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "14px", lineHeight: 1.8 }}>
                {s.desc}
              </p>

              {i < steps.length - 1 && (
                <div className="md:hidden h-12 w-px bg-[#c9a84c]/30 mt-8" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a
            href="#cennik"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0d1b2a] text-[#f5f2ed] hover:bg-[#132040] transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Wybierz plan
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#0d1b2a]/25 text-[#0d1b2a] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Mam pytania
          </a>
        </div>
      </div>
    </section>
  );
}
