import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

// 👉 Wejdź na https://formspree.io, utwórz konto, utwórz nowy formularz
//    i wklej swoje ID poniżej (np. "xabcdefg"):
const FORMSPREE_ID = "mnjreyen";

export function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "Imię i nazwisko": form.name,
          "Firma": form.company,
          "E-mail": form.email,
          "Telefon": form.phone,
          "Wiadomość": form.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const sent = status === "sent";

  return (
    <section id="kontakt" className="bg-[#f5f2ed] py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        {/* Left: info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#c9a84c]" />
            <span style={{ fontFamily: "'Inter', sans-serif", color: "#c9a84c", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
              Kontakt
            </span>
          </div>

          <h2
            className="mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0d1b2a", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.25, fontWeight: 600 }}
          >
            Skontaktuj się<br />z naszym biurem
          </h2>

          <p
            className="mb-10"
            style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "15px", lineHeight: 1.75 }}
          >
            Jesteśmy do Twojej dyspozycji od poniedziałku do piątku. Odpowiemy na każde pytanie i pomożemy dobrać najlepszy plan dla Twojej firmy.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { icon: MapPin, label: "Adres", value: "ul. Głogowska 31/33, 60-702 Poznań" },
              { icon: Phone, label: "Telefon", value: "(61) 642 91 30 · +48 730 790 100" },
              { icon: Mail, label: "E-mail", value: "poznan@dimeoffice.pl" },
              { icon: Clock, label: "Godziny biura", value: "Pn – Pt: 8:00 – 16:00" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center shrink-0">
                  <item.icon size={16} color="#c9a84c" />
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
                    {item.label}
                  </p>
                  <p className="mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "14px", fontWeight: 500 }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-10 relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <img
              src="https://images.unsplash.com/photo-1780429147769-dfbde46a99b7?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=krzysztof-kedziora-5DaaqPWw79k-unsplash.jpg"
              alt="Lokalizacja Dime Office Poznań – ul. Głogowska 31/33"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0d1b2a]/30 flex items-center justify-center">
              <div className="bg-white px-5 py-3 text-center">
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "12px", fontWeight: 600 }}>ul. Głogowska 31/33</p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "11px" }}>60-702 Poznań</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 border-2 border-[#c9a84c] flex items-center justify-center mb-6">
                <span style={{ color: "#c9a84c", fontSize: "1.8rem" }}>✓</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#0d1b2a", fontSize: "1.5rem", fontWeight: 600, marginBottom: "12px" }}>
                Dziękujemy za wiadomość!
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "#5a6374", fontSize: "14px", lineHeight: 1.75 }}>
                Odezwiemy się do Ciebie w ciągu 24 godzin roboczych.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: "name", label: "Imię i nazwisko", placeholder: "Jan Kowalski" },
                  { name: "company", label: "Nazwa firmy", placeholder: "Firma XYZ Sp. z o.o." },
                ].map((f) => (
                  <div key={f.name}>
                    <label
                      htmlFor={f.name}
                      style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "8px" }}
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type="text"
                      placeholder={f.placeholder}
                      value={(form as any)[f.name]}
                      onChange={handle}
                      required={f.name === "name"}
                      className="w-full px-4 py-3 bg-white border border-[#0d1b2a]/15 focus:border-[#c9a84c] focus:outline-none transition-colors duration-200"
                      style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "14px" }}
                    />
                  </div>
                ))}
              </div>

              {[
                { name: "email", label: "Adres e-mail", placeholder: "jan@firma.pl", type: "email", required: true },
                { name: "phone", label: "Telefon (opcjonalnie)", placeholder: "+48 600 000 000", type: "tel", required: false },
              ].map((f) => (
                <div key={f.name}>
                  <label
                    htmlFor={f.name}
                    style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "8px" }}
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={(form as any)[f.name]}
                    onChange={handle}
                    required={f.required}
                    className="w-full px-4 py-3 bg-white border border-[#0d1b2a]/15 focus:border-[#c9a84c] focus:outline-none transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "14px" }}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "8px" }}
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Opisz swoje potrzeby lub zadaj pytanie..."
                  value={form.message}
                  onChange={handle}
                  className="w-full px-4 py-3 bg-white border border-[#0d1b2a]/15 focus:border-[#c9a84c] focus:outline-none transition-colors duration-200 resize-none"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#0d1b2a", fontSize: "14px" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 px-8 py-4 bg-[#0d1b2a] text-[#f5f2ed] hover:bg-[#132040] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                {status === "sending" ? "Wysyłanie…" : "Wyślij wiadomość"}
              </button>

              {status === "error" && (
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#c1392b", fontSize: "13px" }}>
                  Coś poszło nie tak. Sprawdź połączenie lub napisz bezpośrednio na poznan@dimeoffice.pl.
                </p>
              )}

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#5a6374",
                  fontSize: "11px",
                  lineHeight: 1.6,
                }}
              >
                Przesyłając formularz, akceptujesz{" "}
                <a
                  href="#privacy"
                  className="text-[#c9a84c] underline hover:opacity-80"
                >
                  Politykę Prywatności
                </a>{" "}
                serwisu Dime Office.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
