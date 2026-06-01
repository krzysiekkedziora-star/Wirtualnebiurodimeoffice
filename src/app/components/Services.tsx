import { MapPin, Mail, ShieldCheck, Building2 } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Adres Wirtualny",
    desc: "Prestiżowy adres przy ul. Głogowskiej 31/33 do rejestracji firmy w KRS, CEIDG i US oraz do korespondencji i działań marketingowych.",
  },
  {
    icon: Mail,
    title: "Obsługa Korespondencji",
    desc: "Odbieramy i przechowujemy Twoje przesyłki, skanujemy listy i wysyłamy powiadomienia e-mail tego samego dnia. Możemy też przekazywać paczki pod wskazany adres.",
  },
  {
    icon: ShieldCheck,
    title: "Rejestracja Działalności",
    desc: "Adres spełnia wymogi urzędowe do rejestracji w KRS, CEIDG i Urzędzie Skarbowym. Pomagamy w przygotowaniu dokumentów zgłoszeniowych.",
  },
  {
    icon: Building2,
    title: "Elastyczna Umowa",
    desc: "Wybierz rozliczenie miesięczne bez zobowiązań lub skorzystaj z rocznego planu i zaoszczędź. Bez ukrytych opłat, proste warunki na każdym etapie.",
  },
];

export function Services() {
  return (
    <section id="uslugi" className="bg-[#0d1b2a] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span style={{ fontFamily: "'Inter', sans-serif", color: "#c9a84c", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
            Nasza oferta
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: "#f5f2ed", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.25, fontWeight: 600 }}
          >
            Kompleksowe usługi<br />
            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>dopasowane do Ciebie</em>
          </h2>
          <p
            className="max-w-sm"
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.55)", fontSize: "14px", lineHeight: 1.75 }}
          >
            Niezależnie od etapu rozwoju Twojej firmy — mamy rozwiązanie, które odpowiada Twoim potrzebom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-[#0d1b2a] p-8 group hover:bg-[#132040] transition-colors duration-300 cursor-default"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="w-12 h-12 border border-[#c9a84c]/40 flex items-center justify-center group-hover:border-[#c9a84c] transition-colors duration-300">
                  <s.icon size={20} color="#c9a84c" />
                </div>
                <span style={{ fontFamily: "'Playfair Display', serif", color: "rgba(201,168,76,0.15)", fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: "#f5f2ed", fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.3 }}
              >
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.5)", fontSize: "13px", lineHeight: 1.75 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
