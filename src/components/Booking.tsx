import { motion } from "framer-motion"
import { Calendar, CreditCard, Plane, Users } from "lucide-react"
import React, { useState } from "react"
import toast from "react-hot-toast"
import { useInView } from "react-intersection-observer"
import {
  errorMessage,
  isDateValid,
  isPeriodValid,
} from "../utils/validationUtils"
import FormError from "./FormError"

// Interface pour définir la structure des erreurs de validation
interface FormErrors {
  destination?: string
  startDate?: string
  returnDate?: string
  travelers?: string
  roomType?: string
  specialRequirements?: string
}

const Booking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [bookingData, setBookingData] = useState({
    destination: "",
    startDate: "",
    returnDate: "",
    travelers: "2",
    roomType: "standard",
    specialRequirements: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})

  // Etat pour suivre les champs selectionnés ( affichage des erreurs)
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  // fonction validation dynamique des champs du formulaire
  const validateField = (name: string, value: string) => {
    const newErrors: FormErrors = { ...errors }
    // logique de validation complexe pour chaque champs
    // utilise des utilitaires de validations personnalisés
    // Gere les erreurs de manière dynamique

    switch (name) {
      case "destination":
        if (!value) {
          newErrors.destination = errorMessage.destination
        } else {
          delete newErrors.destination
        }
        break
      case "startDate":
        if (!value) {
          newErrors.startDate = errorMessage.required
        } else if (!isDateValid(value)) {
          newErrors.startDate = errorMessage.invalidDate
        } else {
          delete newErrors.startDate
          if (bookingData.returnDate) {
            if (!isPeriodValid(value, bookingData.returnDate)) {
              newErrors.returnDate = errorMessage.invalidDateRange
            } else {
              delete newErrors.returnDate
            }
          }
        }
        break

      case "returnDate":
        if (!value) {
          newErrors.returnDate = errorMessage.required
        } else if (!isDateValid(value)) {
          newErrors.returnDate = errorMessage.invalidDate
        } else if (!isPeriodValid(bookingData.startDate, value)) {
          newErrors.returnDate = errorMessage.invalidDateRange
        } else {
          delete newErrors.returnDate
        }
        break
      case "travelers":
        if (!value || Number(value) < 1 || Number(value) > 6) {
          newErrors.travelers = errorMessage.invalidTravelers
        } else {
          delete newErrors.travelers
        }
        break
      case "roomType":
        if (!value) {
          newErrors.roomType = errorMessage.roomType
        } else {
          delete newErrors.roomType
        }
        break
      case "specialRequirements":
        if (!value) {
          newErrors.specialRequirements = errorMessage.specialRequirements
        } else {
          delete newErrors.specialRequirements
        }
        break
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Gestionnaire des evenements pour la perte de focus
  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name } = e.target
    setTouched({ ...touched, [name]: true })
    validateField(name, bookingData[name as keyof typeof bookingData])
  }

  // Gestionnaire de changement de valeur
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      validateField(name, value)
    }
  }

  // Soumission de formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // logique de soumission du formulaire
    let isValid = true
    Object.keys(bookingData).forEach((key) => {
      const fieldIsValid = validateField(
        key,
        bookingData[key as keyof typeof bookingData]
      )
      isValid = isValid && fieldIsValid
    })
    if (!isValid) {
      toast.error(
        "Veuillez corriger les erreurs du formulaire avant de soumettre."
      )
      return
    }
    // Utilisation de toast pour afficher un message de confirmation
    toast.success("Votre réservation a été envoyée avec succès !")

    // Réinitialisation du formulaire apres soumission
    setBookingData({
      destination: "",
      startDate: "",
      returnDate: "",
      travelers: "2",
      roomType: "standard",
      specialRequirements: "",
    })
    setTouched({})
    setErrors({})
  }

  return (
    <section ref={ref} className="py-20 bg-white" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6:lg:px-8">
        {/* titre et sous-titre animés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Réservez votre Voyage
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planifiez votre prochain voyage avec nous. Remplissez le formulaire
            ci-dessous pour commencer votre aventure !
          </p>
        </motion.div>

        {/* formulaire de réservation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Plane className="w-5 h-5 text-indigo-600" />
                    <span>Destination</span>
                  </div>
                </label>

                <select
                  name="destination"
                  required
                  value={bookingData.destination}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-indigo-500
                  focus:border-indigo-500
                  ${
                    errors.destination && touched.destination
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Sélectionnez une destination</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Santorini">Santorini</option>
                  <option value="Bali">Bali</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Seychelles">Seychelles</option>
                </select>

                {errors.destination && touched.destination && (
                  <FormError message={errors.destination} />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <span>Nombre de voyageurs</span>
                  </div>
                </label>
                <select
                  name="travelers"
                  value={bookingData.travelers}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.travelers && touched.travelers
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "voyageur" : "voyageurs"}
                    </option>
                  ))}
                </select>
                {errors.travelers && touched.travelers && (
                  <FormError message={errors.travelers} />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <span>Date de départ</span>
                  </div>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={bookingData.startDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.startDate && touched.startDate
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.startDate && touched.startDate && (
                  <FormError message={errors.startDate} />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <span>Date de retour</span>
                  </div>
                </label>
                <input
                  type="date"
                  name="returnDate"
                  value={bookingData.returnDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.returnDate && touched.returnDate
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.returnDate && touched.returnDate && (
                  <FormError message={errors.returnDate} />
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-indigo-600" />
                  <span>Type de chambre</span>
                </div>
              </label>
              <select
                name="roomType"
                value={bookingData.roomType}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.roomType && touched.roomType
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="standard">Chambre Standard</option>
                <option value="deluxe">Suite Deluxe</option>
                <option value="presidential">Suite Présidentielle</option>
                <option value="villa">Villa Privée</option>
              </select>
              {errors.roomType && touched.roomType && (
                <FormError message={errors.roomType} />
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Demandes spéciales
              </label>
              <textarea
                name="specialRequirements"
                value={bookingData.specialRequirements}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.specialRequirements && touched.specialRequirements
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Régime alimentaire particulier, arrangements spéciaux, etc."
              ></textarea>
              {errors.specialRequirements && touched.specialRequirements && (
                <FormError message={errors.specialRequirements} />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Réserver maintenant</span>
              <Plane className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Booking
