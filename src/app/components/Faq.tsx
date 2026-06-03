import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqCategories = [
  {
    title: "Rejestracja firmy i wirtualny adres",
    items: [
      {
        question:
          "Czy pod adresem wirtualnego biura mogę zarejestrować firmę?",
        answer:
          "Tak, pod naszym adresem możesz zarejestrować firmę niezależnie od jej formy prawnej oraz wszelkie fundacje i stowarzyszenia. Nasz adres spełnia wszystkie wymogi formalne w zakresie rejestracji firmy w KRS, CEIDG oraz Urzędach Skarbowych.",
      },
      {
        question:
          "Czy mogę używać wirtualnego adresu na fakturach i dokumentach firmowych?",
        answer:
          "Tak, adres wirtualny może być używany jako oficjalny adres firmy na fakturach, umowach i innych dokumentach.",
      },
      {
        question:
          "Czy mogę używać wirtualnego adresu w materiałach promocyjnych i internecie?",
        answer:
          "Tak. Naszego adresu możesz używać we wszystkich działaniach związanych z prowadzoną działalnością.",
      },
    ],
  },
  {
    title: "Pakiety i plany rozliczeniowe",
    items: [
      {
        question:
          "Jaka jest różnica pomiędzy pakietem usług a planem rozliczeniowym?",
        answer:
          "Pakiet usług określa zakres wykonywanych przez nas czynności. Plan rozliczeniowy określa częstotliwość płatności i długość zobowiązania.",
      },
      {
        question: "Jakie pakiety oferujecie?",
        answer:
          "Oferujemy pakiety Siedziba Firmy oraz Wirtualny Sekretariat.",
      },
    ],
  },
];

export function FAQ() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenQuestion(null);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section id="faq" className="bg-white py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
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
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          {faqCategories.map((category, cIndex) => {
            const isCategoryOpen = openCategory === cIndex;

            return (
              <div
                key={category.title}
                className={`border transition-all duration-300 ${
                  isCategoryOpen
                    ? "border-[#c9a84c] shadow-lg shadow-black/5"
                    : "border-[#e8e1d4]"
                }`}
              >

                {/* CATEGORY */}
                <button
                  onClick={() => toggleCategory(cIndex)}
                  className="w-full flex items-center justify-between px-7 py-6 bg-[#fdfcf9]"
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#0d1b2a",
                    }}
                  >
                    {category.title}
                  </span>

                  <div
                    className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${
                      isCategoryOpen
                        ? "border-[#c9a84c] text-[#c9a84c]"
                        : "border-[#d7d0c3] text-[#0d1b2a]"
                    }`}
                  >
                    {isCategoryOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* ITEMS */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isCategoryOpen ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="bg-white border-t border-[#f0ebe2]">
                    {category.items.map((item) => {
                      const isOpen = openQuestion === item.question;

                      return (
                        <div
                          key={item.question}
                          className="border-b border-[#f5f0e6]"
                        >
                          {/* QUESTION */}
                          <button
                            onClick={() => toggleQuestion(item.question)}
                            className="w-full flex items-center justify-between px-7 py-5 text-left"
                          >
                            <span
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                color: "#0d1b2a",
                                fontSize: "15px",
                                fontWeight: 500,
                              }}
                            >
                              {item.question}
                            </span>

                            <div className="text-[#c9a84c]">
                              {isOpen ? (
                                <Minus size={18} />
                              ) : (
                                <Plus size={18} />
                              )}
                            </div>
                          </button>

                          {/* ANSWER */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? "max-h-96" : "max-h-0"
                            }`}
                          >
                            <div className="px-7 pb-6">
                              <p
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  color: "#5a6374",
                                  fontSize: "14.5px",
                                  lineHeight: 1.8,
                                }}
                              >
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
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