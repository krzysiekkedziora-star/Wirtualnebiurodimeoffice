import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { Regulamin } from "./Regulamin";

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [route]);

  const isPrivacy = route === "#privacy";
  const isRegulamin = route === "#regulamin";

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      {isPrivacy ? (
        <>
          <Navbar />
          <PrivacyPolicy />
          <Footer />
        </>
      ) : isRegulamin ? (
        <>
          <Navbar />
          <Regulamin />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
