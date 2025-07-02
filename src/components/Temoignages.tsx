import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Importation des images des clients
import { Star } from "lucide-react"
import MarieProfil from "../assets/marie.jpg"
import PierreProfil from "../assets/pierre.jpg"
import SophieProfil from "../assets/sophie.jpg"

// Definition du tableau des temoignages
// Contient les informatiobs detaillées de chaque temoignage client
const temoignages = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "CEO",
    image: SophieProfil,
    content:
      "Un service exceptionnel ! Notre séjour aux Maldives était parfait dans les moindres détails.",
    rating: 5,
  },
  {
    id: 2,
    name: "Pierre Dubois",
    role: "Architecte",
    image: PierreProfil,
    content:
      "La meilleure agence de voyage de luxe. Leur attention aux détails est remarquable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marie Lambert",
    role: "Designer",
    image: MarieProfil,
    content:
      "Des expériences uniques et mémorables. Je recommande vivement leurs services.",
    rating: 5,
  },
]

const Temoignages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="bg-gray-50 py-20" id="temoignages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* titre et sous-titre animés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Temoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ils ont voyagé avec nous ... Découvrez leurs avis !
          </p>
        </motion.div>

        {/* grille des temoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temoignages.map((temoignage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <img
                  src={temoignage.image}
                  alt={temoignage.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {temoignage.name}
                  </h3>
                  <p className="text-gray-600">{temoignage.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(temoignage.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="text-yellow-400 w-5 h-5 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">{temoignage.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Temoignages
