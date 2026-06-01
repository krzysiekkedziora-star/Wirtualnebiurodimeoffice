import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Dime Office to strzał w dziesiątkę dla mojej jednoosobowej działalności. Adres przy Głogowskiej robi świetne wrażenie na klientach, a obsługa korespondencji działa bez zarzutu. Polecam każdemu, kto dopiero zaczyna.",
    author: "Marta Kowalczyk",
    role: "Właścicielka, Studio Graficzne MK",
    initials: "MK",
  },
  {
    text: "Korzystam z wirtualnego biura od ponad 3 lat. Cena jest uczciwa, a jakość obsługi naprawdę wysoka. Powiadomienia o przesyłkach tego samego dnia — to dla mnie kluczowe, gdy prowadzę działalność zdalnie.",
    author: "Tomasz Raczkowski",
    role: "Prezes, TechSolutions Sp. z o.o.",
    initials: "TR",
  },
  {
    text: "Polecam każdemu, kto potrzebuje profesjonalnego adresu w Poznaniu. Rejestracja firmy przebiegła sprawnie, umowa jest prosta i przejrzysta. Nie wyobrażam sobie powrotu do tradycyjnego biura.",
    author: "Anna Wróblewska",
    role: "Freelancer, Tłumaczenia i Copywriting",
    initials: "AW",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#f5f2ed] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span style={{ fontFamily: "'Inter', sans-serif", color: "#c9a84c", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
            Opinie klientów
          </span>
        </div>

        <h2
          className="mb-16"
          style={{ fontFamily: "'Playfair Display', serif", color: "#0d1b2a", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.25, fontWeight: 600 }}
        >
          Co mówią o nas<br />nasi klienci
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white p-8 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote size={28} color="#c9a84c" className="mb-6 opacity-60" />
              <p
                className="flex-1 mb-8"
                style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "14px", lineHeight: 1.8 }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-[#e8e3d8] pt-6">
                <div
                  className="w-10 h-10 flex items-center justify-center bg-[#0d1b2a] shrink-0"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#c9a84c", fontSize: "13px", fontWeight: 700 }}
                >
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "13px", fontWeight: 600 }}>{t.author}</p>
                  <p className="mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "12px" }}>{t.role}</p>
                </div>
              </div>
              {/* Bottom gold accent on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
