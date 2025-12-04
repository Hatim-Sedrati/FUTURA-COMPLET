import { useState, useEffect } from "react";
import Header from "./component/header";
import Hero from "./component/hero";
import Footer from "./component/footer";
import BackgroundGrid from "./component/background-grid";
import xabaka from "./images/XBKA.png";

export default function Home() {
  const [showXabaka, setShowXabaka] = useState(false);

  // fade-in de l'image
  useEffect(() => {
    setTimeout(() => setShowXabaka(true), 400);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071033] via-[#02173b] to-[#6b0b8a] overflow-hidden relative">

      {/* Background Grid */}
      <BackgroundGrid />

      {/* Contenu principal */}
      <div className="relative z-20">
        <Header el="Accueil" />
        <Hero />

        {/* ============================
            IMAGE XABAKA — fade-in + floating
        ============================= */}
        <div
          className={`absolute right-0 top-[67%] -translate-y-1/2 pointer-events-none transition-opacity duration-700 ${
            showXabaka ? "opacity-100" : "opacity-0"
          }`}
          style={{
            zIndex: 15,
            animation: "floatXabaka 6s ease-in-out infinite", // 👈 ANIMATION INFINIE
          }}
        >
          <img
            src={xabaka}
            alt="Xabaka"
            className="w-[1000px] h-auto object-contain drop-shadow-xl"
          />
        </div>

        <Footer />
      </div>

      {/* Animation CSS globale */}
 
    </div>
  );
}
