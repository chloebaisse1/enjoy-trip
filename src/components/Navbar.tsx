import { motion } from "framer-motion"
import { Menu, Plane, X } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [isOpen, setIsOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)
  // Écouteur d'événement pour détecter le défilement de la page

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // barre de navigation fixe avec transition dynamique
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" id="accueil">
          {/* {logo animé avec framer motion} */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* icon d'avion et nom de l'agence */}
            <Plane className="h-8 w-8 text-indigo-600" />
            <span className="text-gray-800 font-bold">Enjoy Trip</span>
          </motion.div>

          {/* Navigation pour desktops */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Génération dynamique des liens de navigation */}
              {[
                "Accueil",
                "Destinations",
                "Services",
                "À propos",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                  // Animation de survol des liens
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          {/* Bouton de menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {/* Icone de menu burger */}
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile avec animation */}
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {/* Génération dynamique des liens de navigation pour mobile */}
            {["Accueil", "Destinations", "Services", "À propos", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:indigo-600 transition-colors duration-300"
                  // Animation de survol des liens
                  whileHover={{ scale: 1.05 }} // Ferme le menu au clic
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
