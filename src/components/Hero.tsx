import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import HeroBanner from "../assets/hero.jpg"

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* section du background  */}
      <div
        className="absolute inset-0 z-0"
        //style dynamique pour l'image de fond
        style={{
          backgroundImage: `url(${HeroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 md:text-6xl">
              Votre Voyage commence ici
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Explorez le monde avec nos offres exclusives.
              <br />
              Séjours romantiques, aventures en famille ou escapades relaxantes.
              <br /> Trouvez le voyage parfait et vivez des expériences
              inoubliables.
            </p>
            <motion.button
              className="bg-indigo-500 text-white px-8 py-4 rounded-full
            hover:bg-indigo-600 flex items-center space-x-2 text-lg font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Réservez maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
