import { Check, Info } from "lucide-react";
import { useState } from "react";

interface PricingRow {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  badge?: string;
  extras: string[];
  scanning: boolean | "limit" | "full";
}

const rows: PricingRow[] = [
  {
    id: "monthly-annual",
    name: "Płatność miesięczna\nw umowie rocznej",
    price: "80 zł",
    priceNote: "netto / mies.",
    badge: "Oszczędność ~20%",
    extras: [
      "5 zł za przesłanie przesyłki + koszt Poczty Polskiej",
      "2 zł za skan do 5 stron",
    ],
    scanning: "false",
  },
  {
    id: "monthly-open",
    name: "Płatność miesięczna\nbez zobowiązań",
    price: "100 zł",
    priceNote: "netto / mies.",
    extras: [
      "5 zł za przesłanie przesyłki + koszt Poczty Polskiej",
      "2 zł za skan do 5 stron",
    ],
    scanning: "false",
  },
  {
    id: "annual-noscan",
    name: "Płatność roczna\nbez skanowania",
    price: "699 zł",
    priceNote: "netto / rok",
    extras: [
      "5 zł za przesłanie przesyłki + koszt Poczty Polskiej",
      "2 zł za skan do 5 stron",
    ],
    scanning: false,
  },
  {
    id: "annual-scan-limit",
    name: "Płatność roczna\nze skanowaniem (limit 5 stron)",
    price: "799 zł",
    priceNote: "netto / rok",
    badge: "Popularne",
    extras: [
      "5 zł za przesłanie przesyłki + koszt Poczty Polskiej",
    ],
    scanning: "limit",
  },
  {
    id: "annual-scan-full",
    name: "Płatność roczna\nskanowanie pełne",
    price: "1 099 zł",
    priceNote: "netto / rok",
    extras: [
      "5 zł za przesłanie przesyłki + koszt Poczty Polskiej",
    ],
    scanning: "full",
  },
];

const scanLabel: Record<string, string> = {
  "false": "Brak skanowania",
  "limit": "Skan do 5 stron / przesyłka",
  "full": "Skanowanie pełne bez limitu",
};

const includedFeatures = [
  "Prestiżowy adres ul. Głogowska 31/33, Poznań",
  "Rejestracja firmy (KRS, CEIDG, Urząd Skarbowy)",
  "Adres korespondencyjny i marketingowy",
  "Odbiór i przechowywanie przesyłek",
  "Powiadomienia e-mail o nowej korespondencji",
];

export function Pricing() {
  const [isSending, setIsSending] = useState(false);
const [isSent, setIsSent] = useState(false);
  const [selected, setSelected] = useState<string>("annual-scan-limit");
  const [isModalOpen, setIsModalOpen] = useState(false);

 const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    const form = e.currentTarget;
    const active = rows.find((r) => r.id === selected)!;

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      nip: (form.elements.namedItem("nip") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      plan: active.name,
    };

    const res = await fetch("https://formspree.io/f/mnjreyen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setIsSending(false);

    if (res.ok) {
      setIsSent(true);

      setTimeout(() => {
        setIsModalOpen(false);
        setIsSent(false);
      }, 1200);
    } else {
      alert("Błąd wysyłki");
    }
  };

  setIsSending(true);

  const form = e.currentTarget;

  const payload = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    nip: (form.elements.namedItem("nip") as HTMLInputElement).value,
    company: (form.elements.namedItem("company") as HTMLInputElement).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    plan: active.name,
  };


  }
};
  return (
    <section id="cennik" className="bg-[#0d1b2a] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span style={{ fontFamily: "'Inter', sans-serif", color: "#c9a84c", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
            Cennik
          </span>
        </div>

        <h2
          className="mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: "#f5f2ed", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.25, fontWeight: 600 }}
        >
          Przejrzyste ceny,<br />
          <em style={{ color: "#c9a84c", fontStyle: "italic" }}>bez ukrytych opłat</em>
        </h2>
        <p className="mb-16 max-w-lg" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.5)", fontSize: "14px", lineHeight: 1.75 }}>
          Jedna usługa — wirtualny adres biznesowy — dostępna w pięciu wariantach rozliczenia. Wybierz ten, który najlepiej odpowiada Twojej firmie.
        </p>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Left: plan selector table */}
          <div>
            <div className="flex flex-col gap-px bg-white/10">
              {rows.map((row) => {
                const isActive = selected === row.id;
                return (
                  <button
                    key={row.id}
                    onClick={() => setSelected(row.id)}
                    className="text-left w-full transition-colors duration-200"
                    style={{ background: isActive ? "#132040" : "#0d1b2a" }}
                  >
                    <div className="px-6 py-5 flex items-center justify-between gap-4">
                      {/* Left: indicator + name */}
                      <div className="flex items-center gap-4">
                        <div
                          className="shrink-0 w-4 h-4 border-2 flex items-center justify-center transition-colors duration-200"
                          style={{ borderColor: isActive ? "#c9a84c" : "rgba(255,255,255,0.2)" }}
                        >
                          {isActive && <div className="w-2 h-2 bg-[#c9a84c]" />}
                        </div>
                        <div>
                          <p
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              color: isActive ? "#f5f2ed" : "rgba(245,242,237,0.6)",
                              fontSize: "14px",
                              fontWeight: isActive ? 600 : 400,
                              whiteSpace: "pre-line",
                              lineHeight: 1.4,
                            }}
                          >
                            {row.name}
                          </p>
                          {row.badge && (
                            <span
                              className="mt-1.5 inline-block px-2 py-0.5"
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "10px",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                background: "rgba(201,168,76,0.15)",
                                color: "#c9a84c",
                              }}
                            >
                              {row.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right: price */}
                      <div className="text-right shrink-0">
                        <p
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            color: isActive ? "#c9a84c" : "rgba(245,242,237,0.5)",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            lineHeight: 1,
                          }}
                        >
                          {row.price}
                        </p>
                        <p
                          className="mt-0.5"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "rgba(245,242,237,0.35)",
                            fontSize: "11px",
                          }}
                        >
                          {row.priceNote}
                        </p>
                      </div>
                    </div>
                    {/* Bottom accent for active */}
                    {isActive && <div className="h-0.5 bg-[#c9a84c]" />}
                  </button>
                );
              })}
            </div>

            <p className="mt-4 flex items-start gap-2" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.3)", fontSize: "11px", lineHeight: 1.6 }}>
              <Info size={12} className="mt-0.5 shrink-0" color="rgba(201,168,76,0.5)" />
              Wszystkie ceny podane są netto. Do podanych cen należy doliczyć podatek VAT 23%.
            </p>
          </div>

          {/* Right: detail card */}
          <div className="bg-[#132040] p-8 border-t-2 border-[#c9a84c]">
            {/* Price big */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.5)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                Wybrany plan
              </p>
              <p style={{ fontFamily: "'Playfair Display', serif", color: "#f5f2ed", fontSize: "1rem", fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.3 }}>
                {active.name}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span style={{ fontFamily: "'Playfair Display', serif", color: "#c9a84c", fontSize: "2.8rem", fontWeight: 700, lineHeight: 1 }}>
                  {active.price}
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.4)", fontSize: "13px" }}>
                  netto {active.priceNote.replace("netto ", "")}
                </span>
              </div>
            </div>

            {/* Included features */}
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.5)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              W każdym planie
            </p>
            <ul className="flex flex-col gap-2.5 mb-6">
              {includedFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={13} color="#c9a84c" className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.7)", fontSize: "13px", lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Check size={13} color="#c9a84c" className="mt-0.5 shrink-0" />
                <span style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.7)", fontSize: "13px", lineHeight: 1.5 }}>
                  Skanowanie: <strong style={{ color: "#f5f2ed" }}>{scanLabel[String(active.scanning)]}</strong>
                </span>
              </li>
            </ul>

            {/* Extras */}
            <div className="mb-8 bg-[#0d1b2a]/50 p-4 border border-white/8">
              <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.4)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                Dodatkowe opłaty
              </p>
              <ul className="flex flex-col gap-2">
                {active.extras.map((e) => (
                  <li key={e} style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,242,237,0.55)", fontSize: "12px", lineHeight: 1.5 }}>
                    + {e}
                  </li>
                ))}
              </ul>
            </div>

            <button
  onClick={() => setIsModalOpen(true)}
  className="w-full text-center px-6 py-4 bg-[#c9a84c] text-[#0d1b2a] hover:bg-[#d4b86a] transition-colors duration-200"
  style={{
    fontFamily: "'Inter', sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  }}
>
  Wybierz ten plan
</button>
          </div>
        </div>
      </div>
      {isModalOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
    onClick={() => setIsModalOpen(false)}
  >
    <div
      className="w-full max-w-2xl rounded-2xl border border-[#2b4a86] bg-[#132040] shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-[#c9a84c] uppercase tracking-widest text-xs">
              Wybrana oferta
            </p>

            <h3
              className="text-white mt-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
              }}
            >
              {active.name}
            </h3>

            <p className="text-[#c9a84c] mt-2 text-xl font-semibold">
              {active.price} {active.priceNote}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            className="text-white text-3xl"
          >
            ×
          </button>
        </div>

        <p className="text-white/60 mb-6">
          Zostaw swoje dane, a przygotujemy ofertę dopasowaną do Twojej firmy.
        </p>

        <form onSubmit={sendEmail} className="grid md:grid-cols-2 gap-4">
          <input
  name="name"
  placeholder="Imię i nazwisko"
  className="bg-[#0d1b2a] border border-white/10 rounded-lg p-3 text-white"
/>

          <input
  name="email"
  placeholder="Adres e-mail"
  className="bg-[#0d1b2a] border border-white/10 rounded-lg p-3 text-white"
/>

          <input
  name="phone"
  placeholder="Numer telefonu"
  className="bg-[#0d1b2a] border border-white/10 rounded-lg p-3 text-white"
/>

          <input
  name="nip"
  placeholder="NIP firmy"
  className="bg-[#0d1b2a] border border-white/10 rounded-lg p-3 text-white"
/>

          <input
  name="company"
  placeholder="Nazwa firmy"
  className="bg-[#0d1b2a] border border-white/10 rounded-lg p-3 text-white md:col-span-2"
/>

          <textarea
  name="message"
  rows={4}
  placeholder="Dodatkowe informacje"
  className="bg-[#0d1b2a] border border-white/10 rounded-lg p-3 text-white md:col-span-2"
/>
        </div>
        </form>

        <div className="mt-6 rounded-lg bg-[#0d1b2a] p-4 border border-white/10">
          <p className="text-white/80 text-sm">
            <strong>NIP:</strong> wymagany tylko jeśli oferta dotyczy
            istniejącej działalności.
          </p>
        </div>

        <button
  type="submit"
  disabled={isSending}
  className="w-full text-center mt-6 px-6 py-4 bg-[#c9a84c] text-[#0d1b2a]"
  style={{
    fontFamily: "'Inter', sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  }}
>
  {isSending
    ? "Wysyłanie..."
    : isSent
    ? "Wysłano ✓"
    : "Wyślij zapytanie"}
</button>

        <p className="text-center text-white/40 text-xs mt-4">
          Twoje dane są bezpieczne i wykorzystamy je wyłącznie do kontaktu w
          sprawie wybranej oferty.
        </p>
      </div>
    </div>
  </div>
)}
    </section>
  );
}
