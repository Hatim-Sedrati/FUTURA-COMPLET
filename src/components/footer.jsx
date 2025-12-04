import { useState } from "react"

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null)

  const links = [
    "Engagement de confidentialité",
    "Utilisation des Cookies",
    "Conditions d'utilisation",
    "Mentions Légales",
  ]

  return (
    <footer className="relative border-t border-purple-500/20 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left side - Copyright */}
          <div className="flex items-center gap-3 text-gray-400 font-light text-sm">
            <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">✦</span>
            </div>
            <span>Copyright 2025 Futura Inc . All rights reserved</span>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-8 flex-wrap">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`font-light text-sm transition-all duration-300 ${hoveredLink === link ? "text-cyan-400 translate-y-[-2px]" : "text-gray-400 hover:text-gray-300"
                  }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
