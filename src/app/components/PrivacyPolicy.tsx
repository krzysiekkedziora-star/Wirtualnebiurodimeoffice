export function PrivacyPolicy() {
  return (
    <section className="bg-[#f5f2ed] py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0d1b2a] mb-6">
          Polityka prywatności
        </h1>

        <p className="text-[#5a6374] mb-4">
          Twoje dane są przetwarzane zgodnie z RODO...
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Administrator</h2>
        <p className="text-[#5a6374]">
          DIME OFFICE...
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Jakie dane zbieramy</h2>
        <p className="text-[#5a6374]">
          Imię, e-mail, telefon...
        </p>

        <a
          href="#"
          onClick={() => (window.location.hash = "")}
          className="inline-block mt-10 text-[#c9a84c] underline"
        >
          ← Wróć na stronę
        </a>
      </div>
    </section>
  );
}