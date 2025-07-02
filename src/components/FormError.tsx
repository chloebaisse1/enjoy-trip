import type React from "react"

interface FormErrorProps {
  message: string
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  return <p className="text-red-500 text-sm mt-1 animate-fade-in">{message}</p>
}

export default FormError
