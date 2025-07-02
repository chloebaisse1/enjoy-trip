import { Camera, Compass, HandPlatter, Hotel, Plane, Wine } from "lucide-react"
import { useInView } from "react-intersection-observer"

import { motion } from "framer-motion"

// Définition du tableau de services
// Contient les informations détaillées de chaque service proposé
const services = [
  {
    icon: Plane,
    title: "vols Privés",
    description: "Voyagez en toute intimité avec nos vols privés.",
  },
  {
    icon: Hotel,
    title: "Hébergements de qualité",
    description: "Les meilleurs hôtels et villas privées du monde.",
  },
  {
    icon: Compass,
    title: "Excursions Exclusives",
    description: "Découvrez des lieux uniques avec nos guides experts.",
  },
  {
    icon: HandPlatter,
    title: "Conciergerie 24/7",
    description: "Un service personnalisé à votre disposition",
  },
  {
    icon: Wine,
    title: "Expériences Gastronomiques",
    description: "Dégustations et Restaurants étoilés à votre disposition",
  },
  {
    icon: Camera,
    title: "Moments Inoubliables",
    description: "Service photo/vidéo pour immortaliser votre voyage.",
  },
]
const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  return (
    <section ref={ref} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* titre et sous-titre animés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services haut de gamme pour un voyage
            d'exception
          </p>
        </motion.div>

        {/* Grille des services responsive */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
