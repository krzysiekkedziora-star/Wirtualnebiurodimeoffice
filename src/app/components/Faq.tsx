import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Czy mogę zarejestrować firmę pod adresem Dime Office?",
    answer:
      "Tak. Adres Dime Office może zostać wykorzystany do rejestracji jednoosobowej działalności gospodarczej, spółki z o.o. oraz innych form działalności zgodnie z obowiązującymi przepisami.",
  },
  {
    question: "Jak działa obsługa korespondencji?",
    answer:
      "Odbieramy przesyłki w Twoim imieniu, informujemy Cię o ich nadejściu i – w zależności od pakietu – możemy również wykonać skany dokumentów oraz przesłać je drogą elektroniczną.",
  },
  {
    question: "Czy muszę podpisywać umowę na rok?",
    answer:
      "Nie. Oferujemy zarówno elastyczne umowy miesięczne, jak i korzystniejsze cenowo pakiety roczne.",
  },
  {
    question: "Czy mogę korzystać z sal konferencyjnych?",
    answer:
      "Tak. Klienci Dime Office mogą wynajmować sale konferencyjne i przestrzenie spotkań na preferencyjnych warunkach.",
  },
  {
    question: "Czy otrzymam powiadomienie o nowej korespondencji?",
    answer:
      "Tak. Informacje o odebranych przesyłkach wysyłamy niezwłocznie drogą mailową, dzięki czemu zawsze wiesz, kiedy dotarła nowa korespondencja.",
  },
  {
    question: "Czy wirtualne biuro jest legalne?",
    answer:
      "Tak. Korzystanie z usług wirtualnego biura jest w pełni legalne i powszechnie wykorzystywane przez przedsiębiorców w Polsce oraz całej Europie.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#c9a84c",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              FAQ
            </span>
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0d1b2a",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              fontWeight: 600,
            }}
          >
            Najczęściej zadawane pytania
          </h2>

          <p
            className="max-w-2xl mx-auto mt-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5a6374",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            Zebraliśmy odpowiedzi na pytania, które najczęściej otrzymujemy od
            przedsiębiorców zainteresowanych usługą wirtualnego biura.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group border transition-all duration-300 ${
                  isOpen
                    ? "border-[#c9a84c] shadow-lg shadow-black/5"
                    : "border-[#e8e1d4] hover:border-[#c9a84c]/50"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-7 py-6 flex items-center justify-between text-left bg-[#fdfcf9]"
                >
                  <span
                    className="pr-6"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#0d1b2a",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#c9a84c] text-[#c9a84c]"
                        : "border-[#d7d0c3] text-[#0d1b2a]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-7 pb-7 pt-1 bg-white border-t border-[#f0ebe2]">
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#5a6374",
                        fontSize: "15px",
                        lineHeight: 1.9,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5a6374",
              fontSize: "15px",
            }}
          >
            Nie znalazłeś odpowiedzi?
          </p>

          <a
            href="#kontakt"
            className="inline-flex mt-4 border border-[#c9a84c] px-8 py-4 transition-all duration-300 hover:bg-[#c9a84c] hover:text-white"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#0d1b2a",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
}