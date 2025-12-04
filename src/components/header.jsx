import { Link, useLocation } from "react-router-dom";
import mm from "../assets/images/logo header.png";
import { useState, useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("Accueil");

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "A propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const current = navItems.find(item => item.path === location.pathname);
    if (current) {
      setActiveNav(current.name);
    }
  }, [location]);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-8 py-3 max-w-[95%] mx-auto ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="font-light tracking-wide text-white text-2xl flex items-center">
            <span className="w-[180px]" aria-hidden>
              <img src={mm} alt="Futura Logo" className="w-full h-auto" />
            </span>
          </span>
        </div>

        {/* Main Navigation - Centered */}
        <div className="flex items-center gap-1 bg-[#2a2a2a]/50 backdrop-blur-sm rounded-full px-4 py-2.5 border border-white/5">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <button
                className={`px-6 py-2 rounded-full font-light tracking-wide transition-all duration-300 text-[15px] ${activeNav === item.name
                  ? "bg-[#3a3a3a] text-white"
                  : "text-gray-400 hover:text-white hover:bg-[#2d2d2d]"
                  }`}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link to="/login">
            <button className="px-6 py-2.5 rounded-full border border-white/10 text-gray-300 font-light tracking-wide hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300 text-[15px]">
              Se connecter
            </button>
          </Link>
          <Link to="/inscription">
            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-light tracking-wide hover:from-purple-500 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 text-[15px]">
              S&apos;inscrire
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}