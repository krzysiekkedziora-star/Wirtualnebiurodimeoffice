import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b2a]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=1600&h=900&fit=crop&auto=format')" }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a] via-[#0d1b2a]/80 to-transparent" aria-hidden="true" />

      {/* Gold vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c9a84c]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#c9a84c]" />
            <span
              style={{ fontFamily: "'Inter', sans-serif", color: "#c9a84c", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}
            >
              Wirtualne Biuro · Poznań
            </span>
          </div>

          <h1
            className="mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#f5f2ed", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.15, fontWeight: 600 }}
          >
            Prestiżowy adres dla&nbsp;
            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>Twojej firmy</em>
            &nbsp;w sercu Poznania
          </h1>

          <p
            className="mb-10 max-w-lg"
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.65)", fontSize: "16px", lineHeight: 1.75 }}
          >
            Zarejestruj działalność pod profesjonalnym adresem przy ul. Głogowskiej 31/33 i&nbsp;korzystaj z pełnej obsługi korespondencji — bez kosztów utrzymania tradycyjnego biura.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#cennik"
              className="flex items-center gap-2 px-7 py-3.5 bg-[#c9a84c] text-[#0d1b2a] hover:bg-[#d4b86a] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Zobacz cennik
              <ArrowRight size={15} />
            </a>
            <a
              href="#o-nas"
              className="flex items-center gap-2 px-7 py-3.5 border border-white/25 text-[#f5f2ed] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              Dowiedz się więcej
            </a>
          </div>
        </div>

        {/* Stats panel */}
        <div className="hidden md:grid grid-cols-2 gap-px bg-white/10 border border-white/10">
          {[
            { value: "15+", label: "Lat doświadczenia" },
            { value: "2 400+", label: "Zadowolonych klientów" },
            { value: "1", label: "Lokalizacja — Poznań" },
            { value: "48h", label: "Czas aktywacji umowy" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0d1b2a]/80 p-8 flex flex-col justify-center">
              <p
                style={{ fontFamily: "'Playfair Display', serif", color: "#c9a84c", fontSize: "2.4rem", fontWeight: 600, lineHeight: 1 }}
              >
                {s.value}
              </p>
              <p
                className="mt-2"
                style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.55)", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-14 bg-[#c9a84c] animate-[scaleY_1.4s_ease-in-out_infinite] origin-top" />
      </div>
    </section>
  );
}
