import { useEffect, useState } from "react";
import heroImg from "../images/image.png";


export default function Hero() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateText(true);
  }, []);

  return (
    <section className="relative pt-32 pb-24 px-8 bg-gradient-to-b from-[#071033] via-[#02173b] to-[#6b0b8a]">
      <div className="max-w-7xl mx-auto text-center relative">

        {/* Title */}
        <h1
          className={`text-7xl md:text-8xl font-orbitron font-bold tracking-[0.15em] uppercase text-white mb-8 transition-all duration-1000 ${
            animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
            Intelligence Artificielle
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-200 font-body ${
            animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
    FUTURA est une plateforme d'intelligence artificielle avancée capable d'analyser l'environnement, d'interpréter les données en temps réel et d'automatiser des actions intelligentes.
        </p>

        {/* Image + Threads */}
        <div className="mt-8 w-full flex justify-center">
          <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-start gap-8">

            {/* LEFT IMAGE */}
            <div className="flex-1 relative z-20 max-w-[760px]">
              <div
                className={`rounded-[30px] overflow-hidden border-0.4 absolute inset-x-[30%] w-[700px] 
                border-black/60 shadow-2xl transition duration-1000 ease-out ${
                  animateText
                    ? "opacity-100 translate-y-0 scale-100 animate-float"
                    : "opacity-0 translate-y-6 scale-95"
                }`}
              >
                <img
                  src={heroImg}
                  alt="Illustration AI"
                  className="w-full  h-auto block"
                />
              </div>
            </div>

            {/* RIGHT SIDE (Threads + Xabaka) */}
            <div className="w-full md:w-[360px] h-[420px] relative z-10">

              {/* Threads background */}
         

              {/* Xabaka image (right aligned + vertically centered) */}
      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
