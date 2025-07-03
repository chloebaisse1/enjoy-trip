import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BaliImage from "../assets/bali.jpg"
import DubaiImage from "../assets/dubai.jpg"
import MaldivesImage from "../assets/maldives.jpg"
import SantoriniImage from "../assets/santorini.jpg"
import SeychellesImage from "../assets/seychelles.jpg"

// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// definition du tableau des destinations
const destinations = [
  {
    id: 1,
    name: "Maldives",
    image: MaldivesImage,
    description: "Paradis tropical avec villas sur piloti.",
    price: "A partir de 5000€",
  },
  {
    id: 2,
    name: "Santorini",
    image: SantoriniImage,
    description: "Vues spectaculaire sur la mer",
    price: "A partir de 3500€",
  },
  {
    id: 3,
    name: "Bali",
    image: BaliImage,
    description: "Culture et beauté uniques",
    price: "A partir de 4500€",
  },
  {
    id: 4,
    name: "Dubai",
    image: DubaiImage,
    description: "Desert moderne et luxe",
    price: "A partir de 4500€",
  },
  {
    id: 5,
    name: "Seychelles",
    image: SeychellesImage,
    description: "Plages paradisiaques et beauté",
    price: "A partir de 4300€",
  },
]
const Destinations = () => {
  // Hook d'intersection pour animations d'images

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* titre et sous-titre animés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Destinations d'Exception
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Voyagez dans les destinations les plus exceptionnelles
          </p>
        </motion.div>

        {/* Container carousel destinations*/}
        <div className="relative">
          {/* configuration du carousel et du swipper */}
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            className="mySwiper py-10"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id} className="px-4">
                <motion.div
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={destination.image}
                    className="w-full h-64 object-cover"
                    alt={destination.name}
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {destination.name}
                    </h3>
                    <p className=" text-gray-600 mb-4">
                      {destination.description}
                    </p>
                    <p className=" text-indigo-600 font-semibold mb-4">
                      {destination.price}
                    </p>

                    <button
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white
                    py-2 px-6 rounded-full transition-colors duration-300"
                    >
                      Reserver maintenant
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bouton de navigation */}
          <div
            className="swiper-button-prev absolute top-1/2 left-0 z-10 transform -translate-y-1/2
          bg-white rounded-full p-8 shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-indigo-600" />
          </div>

          <div
            className="swiper-button-next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-white
          rounded-full p-8 shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destinations
