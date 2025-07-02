import { Toaster } from "react-hot-toast"
import Booking from "./components/Booking"
import Contact from "./components/Contact"
import Destinations from "./components/Destinations"
import Footer from "./components/Footer"
import Galerie from "./components/Galerie"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Temoignages from "./components/Temoignages"

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Galerie />
      <Temoignages />
      <Booking />
      <Contact />
      <Footer />
    </>
  )
}

export default App
