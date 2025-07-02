// Validation des dates
export const isDateValid = (date: string): boolean => {
  const selectedDate = new Date(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return selectedDate >= today
}

// validation de la periode de voyage
export const isPeriodValid = (
  startDate: string,
  returnDate: string
): boolean => {
  const start = new Date(startDate)
  const return_date = new Date(returnDate)
  return return_date > start
}

// Message d'erreur
export const errorMessage = {
  required: "Ce champ est requis",
  destination: "Veuillez sélectionner une destination",
  startDate: "Veuillez sélectionner une date de départ",
  returnDate: "Veuillez sélectionner une date de retour",
  invalidDateRange: "La date de retour doit être après la date de départ",
  invalidDate: "La date sélectionnée est invalide",
  travelers: "Veuillez sélectionner le nombre de voyageurs",
  invalidTravelers: "Le nombre de voyageurs doit être compris entre 1 et 6",
  roomType: "Veuillez sélectionner le type de chambre",
  specialRequirements: "Veuillez sélectionner les exigences spéciales",
}
